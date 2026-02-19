import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  ArrowLeft,
  CheckCircle,
  Loader2,
  AlertCircle,
  Wallet,
  ArrowRight,
} from 'lucide-react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router';
import logo from 'figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png';

type View = 'form' | 'email-sent';

export const LoginPage = () => {
  const { signInWithMagicLink, signInWithWallet, error, clearError, user, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailLoading, setEmailLoading] = useState(false);
  const [walletLoading, setWalletLoading] = useState(false);
  const [view, setView] = useState<View>('form');
  const [localError, setLocalError] = useState<string | null>(null);
  const [walletNotFound, setWalletNotFound] = useState(false);

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  const handleClearErrors = () => {
    clearError();
    setLocalError(null);
    setWalletNotFound(false);
  };

  // Flujo A: Login con Magic Link
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmailLoading(true);
    handleClearErrors();

    const result = await signInWithMagicLink(email.trim());
    setEmailLoading(false);

    if (result.success) {
      setView('email-sent');
    } else {
      setLocalError(result.error || 'Error al enviar magic link');
    }
  };

  // Flujo B: Login con Wallet
  const handleWalletLogin = async () => {
    setWalletLoading(true);
    handleClearErrors();

    const result = await signInWithWallet();
    setWalletLoading(false);

    if (result.success) {
      navigate('/dashboard');
    } else if (result.code === 'USER_NOT_FOUND') {
      setWalletNotFound(true);
    } else if (result.error) {
      setLocalError(result.error);
    }
  };

  const displayError = localError || error;

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00ffe6]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#00ffe6]/3 rounded-full blur-[80px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[460px] relative z-10"
      >
        {/* Back button */}
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-[#99a1af] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Volver al inicio</span>
        </button>

        {/* Card */}
        <div className="bg-[rgba(0,0,0,0.6)] border border-white/10 rounded-[28px] p-8 md:p-10 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img src={logo} alt="PSC" className="h-16 w-auto" />
          </div>

          <AnimatePresence mode="wait">
            {/* ====== VISTA: FORMULARIO ====== */}
            {view === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="text-white text-[28px] font-semibold text-center mb-2 tracking-[-1px]">
                  Iniciar Sesión
                </h1>
                <p className="text-[#99a1af] text-center text-[15px] mb-8">
                  Accede a tu cuenta de Pádel Sport Club
                </p>

                {/* ─── Flujo A: Email ─── */}
                <form onSubmit={handleEmailSubmit} className="space-y-4">
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                      Introduce tu Email
                    </label>
                    <div className="relative">
                      <Mail
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#99a1af]"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          handleClearErrors();
                        }}
                        placeholder="tu@email.com"
                        className="w-full bg-[#020705] border border-white/10 rounded-[14px] pl-11 pr-4 h-[52px] text-white placeholder-white/30 focus:outline-none focus:border-[#00ffe6]/50 transition-colors text-[15px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Error general (solo para flujo email) */}
                  {displayError && !walletNotFound && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3"
                    >
                      <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                      <p className="text-red-400 text-sm">{displayError}</p>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={emailLoading || !email.trim()}
                    className="w-full h-[56px] bg-[#01ffe7] rounded-[14px] text-black font-bold text-[16px] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {emailLoading ? (
                      <Loader2 size={20} className="animate-spin relative z-10" />
                    ) : (
                      <>
                        <Mail size={18} className="relative z-10" />
                        <span className="relative z-10">Iniciar Sesión con Email</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-5">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-[#99a1af] text-[12px] uppercase tracking-wider">o</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* ─── Flujo B: Wallet ─── */}
                <button
                  onClick={handleWalletLogin}
                  disabled={walletLoading}
                  className="w-full h-[52px] bg-white/5 border border-white/10 rounded-[14px] text-white font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {walletLoading ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Wallet size={18} />
                  )}
                  <span>{walletLoading ? 'Conectando...' : 'Conectar Wallet'}</span>
                </button>

                {/* Error: wallet no encontrada → Ir al Registro */}
                <AnimatePresence>
                  {walletNotFound && (
                    <motion.div
                      key="wallet-not-found"
                      initial={{ opacity: 0, y: -6, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 bg-amber-500/10 border border-amber-500/25 rounded-[14px] p-4">
                        <div className="flex items-start gap-2.5 mb-3">
                          <AlertCircle
                            size={16}
                            className="text-amber-400 mt-0.5 shrink-0"
                          />
                          <p className="text-amber-300 text-[14px] leading-snug">
                            Usuario no encontrado.
                          </p>
                        </div>
                        <Link
                          to="/register"
                          className="w-full h-[38px] bg-amber-500/15 border border-amber-500/25 rounded-[10px] text-amber-300 font-medium text-[13px] flex items-center justify-center gap-1.5 hover:bg-amber-500/25 transition-all"
                        >
                          Ir al Registro
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Enlace a registro */}
                <div className="mt-6 text-center">
                  <p className="text-[#99a1af] text-sm">
                    ¿No tienes cuenta?{' '}
                    <Link
                      to="/register"
                      className="text-[#00ffe6] hover:underline font-medium"
                    >
                      Regístrate aquí
                    </Link>
                  </p>
                </div>
              </motion.div>
            )}

            {/* ====== VISTA: EMAIL ENVIADO ====== */}
            {view === 'email-sent' && (
              <motion.div
                key="sent"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center py-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00ffe6]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-[#00ffe6]" />
                </div>
                <h2 className="text-white text-[24px] font-semibold mb-3 tracking-[-1px]">
                  Revisa tu email
                </h2>
                <p className="text-[#99a1af] text-[15px] mb-2">
                  Hemos enviado un magic link a
                </p>
                <p className="text-white font-medium text-[16px] mb-6">{email}</p>
                <p className="text-[#99a1af] text-[13px] mb-8">
                  Haz clic en el enlace del email para iniciar sesión. Si no lo encuentras,
                  revisa la carpeta de spam.
                </p>
                <button
                  onClick={() => {
                    setView('form');
                    setEmail('');
                    handleClearErrors();
                  }}
                  className="text-[#00ffe6] text-sm hover:underline font-medium"
                >
                  Usar otro email
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
