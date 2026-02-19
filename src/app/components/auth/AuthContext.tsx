import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { createClient, type Session, type User, type SupabaseClient } from '@supabase/supabase-js';
import { projectId, publicAnonKey } from '/utils/supabase/info';

const SUPABASE_URL = `https://${projectId}.supabase.co`;
const SERVER_URL = `${SUPABASE_URL}/functions/v1/make-server-a024ec43`;

// Singleton Supabase client
let supabaseInstance: SupabaseClient | null = null;
const getSupabase = () => {
  if (!supabaseInstance) {
    supabaseInstance = createClient(SUPABASE_URL, publicAnonKey);
  }
  return supabaseInstance;
};

export interface UserProfile {
  id: string;
  email: string;
  walletAddress: string;
  walletType: 'external' | 'internal';
  registrationMethod: 'wallet' | 'email';
  tokenBalance: number;
  createdAt: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  signInWithMagicLink: (email: string) => Promise<{ success: boolean; error?: string }>;
  signInWithWallet: () => Promise<{ success: boolean; error?: string; code?: string }>;
  registerWithWallet: (email: string, walletAddress: string) => Promise<{ success: boolean; error?: string }>;
  registerWithEmail: (email: string) => Promise<{ success: boolean; error?: string; walletAddress?: string }>;
  signOut: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  clearError: () => void;
  supabase: SupabaseClient;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const supabase = getSupabase();

  // Fetch user profile from server
  const fetchProfile = useCallback(async () => {
    try {
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      if (!currentSession?.access_token) return;

      const res = await fetch(`${SERVER_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${currentSession.access_token}` },
      });

      if (res.ok) {
        const data = await res.json();
        setProfile(data);
      } else {
        console.log('Failed to fetch profile:', await res.text());
      }
    } catch (err) {
      console.log('Error fetching profile:', err);
    }
  }, [supabase]);

  // Initialize auth state
  useEffect(() => {
    // IMPORTANTE: registrar onAuthStateChange PRIMERO.
    // El evento INITIAL_SESSION se dispara cuando Supabase termina de
    // inicializar, incluyendo el procesamiento del token del magic link
    // en la URL. Solo entonces ponemos loading=false, evitando la race
    // condition donde getSession() devolvía null antes de que el token
    // fuera procesado y ProtectedRoute redirigía prematuramente.
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        console.log('Auth state change:', event);
        setSession(newSession);
        setUser(newSession?.user ?? null);

        if (event === 'INITIAL_SESSION') {
          // Supabase ha terminado de procesar la URL (token del magic link
          // incluido). Ahora es seguro desactivar el loading.
          setLoading(false);
          if (newSession?.user) {
            setTimeout(() => fetchProfile(), 100);
          }
        }

        if (event === 'SIGNED_IN' && newSession?.user) {
          setTimeout(() => fetchProfile(), 500);
        }

        if (event === 'SIGNED_OUT') {
          setProfile(null);
        }
      }
    );

    return () => subscription.unsubscribe();
  }, [supabase, fetchProfile]);

  // Sign in with magic link
  const signInWithMagicLink = async (email: string) => {
    try {
      setError(null);
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (otpError) {
        const msg = `Error al enviar magic link: ${otpError.message}`;
        setError(msg);
        console.log(msg);
        return { success: false, error: msg };
      }

      return { success: true };
    } catch (err) {
      const msg = `Error inesperado al enviar magic link: ${err}`;
      setError(msg);
      console.log(msg);
      return { success: false, error: msg };
    }
  };

  // Sign in with wallet (MetaMask → server lookup → instant session)
  const signInWithWallet = async (): Promise<{ success: boolean; error?: string; code?: string }> => {
    try {
      setError(null);

      // Step 1: Check if MetaMask / browser wallet is available
      const ethereum = (window as any).ethereum;
      if (!ethereum) {
        const msg = 'No se detectó una wallet. Instala MetaMask u otra wallet compatible.';
        setError(msg);
        return { success: false, error: msg, code: 'NO_WALLET' };
      }

      // Step 2: Request wallet connection
      let accounts: string[];
      try {
        accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      } catch (connErr: any) {
        const msg = connErr?.code === 4001
          ? 'Conexión rechazada por el usuario.'
          : `Error al conectar wallet: ${connErr?.message || connErr}`;
        setError(msg);
        return { success: false, error: msg, code: 'CONNECTION_REJECTED' };
      }

      if (!accounts || accounts.length === 0) {
        const msg = 'No se obtuvo ninguna cuenta de la wallet.';
        setError(msg);
        return { success: false, error: msg };
      }

      const walletAddress = accounts[0];

      // Step 3: Call server to look up user by wallet and get instant login token
      const res = await fetch(`${SERVER_URL}/auth/login/wallet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ walletAddress }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === 'USER_NOT_FOUND') {
          return { success: false, error: data.error, code: 'USER_NOT_FOUND' };
        }
        const msg = data.error || 'Error al iniciar sesión con wallet';
        setError(msg);
        return { success: false, error: msg };
      }

      // Step 4: Use the server-generated token_hash to verify OTP instantly
      const { error: verifyError } = await supabase.auth.verifyOtp({
        token_hash: data.token_hash,
        type: 'magiclink',
      });

      if (verifyError) {
        const msg = `Error al verificar sesión: ${verifyError.message}`;
        setError(msg);
        console.log(msg);
        return { success: false, error: msg };
      }

      // Success! Session is now active, onAuthStateChange will handle the rest
      console.log(`Wallet login successful for: ${data.email}`);
      return { success: true };
    } catch (err) {
      const msg = `Error inesperado al iniciar sesión con wallet: ${err}`;
      setError(msg);
      console.log(msg);
      return { success: false, error: msg };
    }
  };

  // Register with wallet + email
  const registerWithWallet = async (email: string, walletAddress: string) => {
    try {
      setError(null);

      // Step 1: Create user on server with wallet metadata
      const res = await fetch(`${SERVER_URL}/auth/register/wallet`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email, walletAddress }),
      });

      const data = await res.json();
      if (!res.ok) {
        const msg = data.error || 'Error al registrar con wallet';
        setError(msg);
        return { success: false, error: msg };
      }

      // Step 2: Send magic link for email confirmation
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (otpError) {
        const msg = `Usuario creado pero error al enviar magic link: ${otpError.message}`;
        setError(msg);
        return { success: false, error: msg };
      }

      return { success: true };
    } catch (err) {
      const msg = `Error inesperado en registro con wallet: ${err}`;
      setError(msg);
      return { success: false, error: msg };
    }
  };

  // Register with email only (internal wallet)
  const registerWithEmail = async (email: string) => {
    try {
      setError(null);

      // Step 1: Create user on server with auto-generated wallet
      const res = await fetch(`${SERVER_URL}/auth/register/email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        const msg = data.error || 'Error al registrar con email';
        setError(msg);
        return { success: false, error: msg };
      }

      // Step 2: Send magic link
      const { error: otpError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/dashboard`,
        },
      });

      if (otpError) {
        const msg = `Usuario creado pero error al enviar magic link: ${otpError.message}`;
        setError(msg);
        return { success: false, error: msg };
      }

      return { success: true, walletAddress: data.walletAddress };
    } catch (err) {
      const msg = `Error inesperado en registro con email: ${err}`;
      setError(msg);
      return { success: false, error: msg };
    }
  };

  // Sign out
  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setProfile(null);
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        profile,
        loading,
        error,
        signInWithMagicLink,
        signInWithWallet,
        registerWithWallet,
        registerWithEmail,
        signOut,
        fetchProfile,
        clearError,
        supabase,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};