import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import {
  useWeb3Auth,
  useWeb3AuthConnect,
  useWeb3AuthDisconnect,
  useIdentityToken,
} from '@web3auth/modal/react';
import { BrowserProvider } from 'ethers';
import { supabaseUrl, edgeFunctionName } from '../../../../utils/supabase/info';

const SERVER_URL = `${supabaseUrl}/functions/v1/${edgeFunctionName}`;

export interface UserProfile {
  id: string;
  email: string | null;
  walletAddress: string;
  walletType: 'external' | 'internal' | 'web3auth_mpc';
  registrationMethod: string;
  displayName: string | null;
  tokenBalance: number;
  createdAt: string;
}

interface AuthContextType {
  isConnected: boolean;
  loading: boolean;
  error: string | null;
  profile: UserProfile | null;
  walletAddress: string | null;
  connect: () => Promise<boolean>;
  disconnect: () => Promise<void>;
  fetchProfile: () => Promise<void>;
  getIdToken: () => Promise<string | null>;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const AuthProviderInner: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { provider, isConnected: web3AuthConnected, isInitialized, web3Auth } = useWeb3Auth() as any;
  const { connect: web3AuthConnect, loading: connectLoading, error: connectError } = useWeb3AuthConnect();
  const { disconnect: web3AuthDisconnect } = useWeb3AuthDisconnect();
  const { getIdentityToken } = useIdentityToken();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [sessionToken, setSessionToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loginProcessedRef = useRef(false);
  const loginInProgressRef = useRef(false);

  // Get wallet address from provider (with retries)
  const resolveWalletAddress = useCallback(async (retries = 3): Promise<string | null> => {
    if (!provider) return null;
    for (let i = 0; i < retries; i++) {
      try {
        const ethersProvider = new BrowserProvider(provider as any);
        const signer = await ethersProvider.getSigner();
        const address = await signer.getAddress();
        console.log('[Auth] Wallet address resolved:', address);
        return address;
      } catch (err) {
        console.warn(`[Auth] resolveWalletAddress attempt ${i + 1}/${retries} failed:`, err);
        if (i < retries - 1) await delay(1500);
      }
    }
    return null;
  }, [provider]);

  // Get idToken for server calls (with retries)
  const getIdToken = useCallback(async (retries = 3): Promise<string | null> => {
    for (let i = 0; i < retries; i++) {
      try {
        const result = await getIdentityToken();
        if (result) {
          console.log('[Auth] Identity token obtained');
          return result;
        }
        console.warn(`[Auth] getIdentityToken attempt ${i + 1}/${retries} returned empty`);
      } catch (err) {
        console.warn(`[Auth] getIdentityToken attempt ${i + 1}/${retries} failed:`, err);
      }
      if (i < retries - 1) await delay(1500);
    }
    return null;
  }, [getIdentityToken]);

  // Helper: perform login to get a fresh session token
  const renewSession = useCallback(async (): Promise<string | null> => {
    const address = await resolveWalletAddress(1);
    const idToken = await getIdToken(1);
    if (!address || !idToken) return null;

    const res = await fetch(`${SERVER_URL}/auth/web3auth-login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({ walletAddress: address }),
    });

    if (res.ok) {
      const data = await res.json();
      setSessionToken(data.sessionToken);
      setProfile(data);
      return data.sessionToken;
    }
    return null;
  }, [resolveWalletAddress, getIdToken]);

  // Helper: call server with session token, auto-refresh on 401
  const serverFetch = useCallback(async (path: string, options: RequestInit = {}) => {
    if (!sessionToken) throw new Error('No session token');

    const doFetch = (token: string) => {
      const headers = new Headers(options.headers);
      headers.set('Authorization', `Bearer ${token}`);
      if (!headers.has('Content-Type') && options.body) {
        headers.set('Content-Type', 'application/json');
      }
      return fetch(`${SERVER_URL}${path}`, { ...options, headers });
    };

    const res = await doFetch(sessionToken);

    // Auto-refresh: if session expired, renew and retry once
    if (res.status === 401) {
      console.log('[Auth] Session expired, renewing...');
      const newToken = await renewSession();
      if (newToken) {
        return doFetch(newToken);
      }
    }

    return res;
  }, [sessionToken, renewSession]);

  // Fetch profile from server
  const fetchProfile = useCallback(async () => {
    try {
      const res = await serverFetch('/auth/profile');
      if (res.ok) {
        setProfile(await res.json());
      } else {
        console.warn('[Auth] Failed to fetch profile:', res.status);
      }
    } catch (err) {
      console.error('[Auth] Error fetching profile:', err);
    }
  }, [serverFetch]);

  // Post-login: register/login on server
  const processLogin = useCallback(async () => {
    if (loginProcessedRef.current || loginInProgressRef.current) return;
    if (!provider || !web3AuthConnected) return;

    loginInProgressRef.current = true;
    console.log('[Auth] processLogin started');

    try {
      // Step 1: Resolve wallet address
      const address = await resolveWalletAddress();
      if (!address) {
        console.error('[Auth] FAILED: could not resolve wallet address');
        setError('No se pudo obtener la direccion de wallet. Intenta reconectar.');
        return;
      }
      setWalletAddress(address);

      // Step 2: Get identity token
      const idToken = await getIdToken();
      if (!idToken) {
        console.error('[Auth] FAILED: could not get identity token');
        setError('No se pudo obtener el token de identidad. Intenta reconectar.');
        return;
      }

      // Debug: decode JWT to see header + claims
      try {
        const [h, p] = idToken.split('.').slice(0, 2).map(part =>
          JSON.parse(atob(part.replace(/-/g, '+').replace(/_/g, '/')))
        );
        console.log('[Auth] JWT header:', h);
        console.log('[Auth] JWT payload:', { iss: p.iss, sub: p.sub, aud: p.aud, iat: p.iat, exp: p.exp, email: p.email, verifier: p.verifier, typeOfLogin: p.typeOfLogin });
      } catch {}

      console.log('[Auth] Calling server /auth/web3auth-login');

      // Step 3: Call server — only send walletAddress
      // Server extracts email, name, walletType from the verified JWT
      const res = await fetch(`${SERVER_URL}/auth/web3auth-login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ walletAddress: address }),
      });

      if (res.ok) {
        const data = await res.json();
        console.log('[Auth] Server login SUCCESS:', data);
        setSessionToken(data.sessionToken);
        setProfile(data);
        loginProcessedRef.current = true;
        // Close Web3Auth modal if still open
        try { web3Auth?.loginModal?.closeModal(); } catch {}
      } else {
        const errText = await res.text();
        console.error('[Auth] Server login FAILED:', res.status, errText);
        const errData = (() => { try { return JSON.parse(errText); } catch { return { error: errText }; } })();
        setError(errData.error || 'Error al iniciar sesion');
      }
    } catch (err) {
      console.error('[Auth] processLogin ERROR:', err);
      setError('Error al procesar el login');
    } finally {
      loginInProgressRef.current = false;
      setLoading(false);
    }
  }, [provider, web3AuthConnected, resolveWalletAddress, getIdToken]);

  // Handle initialization & connection changes
  useEffect(() => {
    if (!isInitialized) return;

    if (!web3AuthConnected) {
      setProfile(null);
      setWalletAddress(null);
      setSessionToken(null);
      loginProcessedRef.current = false;
      loginInProgressRef.current = false;
      setLoading(false);
      return;
    }

    if (web3AuthConnected && provider && !loginProcessedRef.current) {
      processLogin();
    }
  }, [isInitialized, web3AuthConnected, provider, processLogin]);

  const connect = async (): Promise<boolean> => {
    try {
      setError(null);
      setLoading(true);
      await web3AuthConnect();
      // Close the Web3Auth modal immediately so it doesn't linger empty
      try { web3Auth?.loginModal?.closeModal(); } catch {}
      // Verify the connection actually succeeded (user may have closed the modal)
      if (!web3Auth?.connected) {
        setLoading(false);
        return false;
      }
      return true;
    } catch (err: any) {
      setLoading(false);
      if (err?.message?.includes('User closed')) return false;
      setError('Error al conectar');
      console.error('[Auth] Connect error:', err);
      return false;
    }
  };

  const disconnect = async () => {
    try {
      await web3AuthDisconnect();
      setProfile(null);
      setWalletAddress(null);
      setSessionToken(null);
      loginProcessedRef.current = false;
      loginInProgressRef.current = false;
      setError(null);
    } catch (err) {
      console.error('[Auth] Disconnect error:', err);
    }
  };

  const clearError = () => setError(null);

  return (
    <AuthContext.Provider
      value={{
        isConnected: web3AuthConnected && profile !== null,
        loading: loading || connectLoading,
        error: error || (connectError ? connectError.message : null),
        profile,
        walletAddress,
        connect,
        disconnect,
        fetchProfile,
        getIdToken,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
