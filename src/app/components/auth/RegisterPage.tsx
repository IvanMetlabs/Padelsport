import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  ArrowLeft,
  CheckCircle,
  Loader2,
  AlertCircle,
  Wallet,
  X,
} from 'lucide-react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router';
import logo from 'figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png';

type View = 'form' | 'magic-sent';

export const RegisterPage = () => {
  const { registerWithWallet, registerWithEmail, clearError, user, loading } = useAuth();
  const navigate = useNavigate();

  const [view, setView] = useState<View>('form');

  // Flujo A: solo email
  const [emailA, setEmailA] = useState('');
  const [emailALoading, setEmailALoading] = useState(false);
  const [emailAError, setEmailAError] = useState<string | null>(null);

  // Flujo B: wallet + email
  const [walletAddress, setWalletAddress] = useState('');
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [emailB, setEmailB] = useState('');
  const [walletSubmitLoading, setWalletSubmitLoading] = useState(false);
  const [walletError, setWalletError] = useState<string | null>(null);

  // Success screen
  const [sentEmail, setSentEmail] = useState('');
  const [registrationType, setRegistrationType] = useState<'email' | 'wallet'>('email');

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, loading, navigate]);

  // ─── Helpers ───────────────────────────────────────────────
  const isEmailCollision = (msg: string) =>
    msg.toLowerCase().includes('already') ||
    msg.toLowerCase().includes('registrado') ||
    msg.toLowerCase().includes('ya existe') ||
    msg.toLowerCase().includes('exists');

  const truncateAddr = (addr: string) =>
    addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : '';

  // ─── Flujo B: Conectar wallet ───────────────────────────────
  const handleConnectWallet = async () => {
    setWalletConnecting(true);
    setWalletError(null);
    clearError();

    try {
      if (!(window as any).ethereum) {
        setWalletError(
          'No se detectó ninguna wallet. Instala MetaMask u otra wallet compatible.'
        );
        return;
      }

      const accounts: string[] = await (window as any).ethereum.request({
        method: 'eth_requestAccounts',
      });

      if (accounts && accounts.length > 0) {
        setWalletAddress(accounts[0]);
      } else {
        setWalletError('No se obtuvo ninguna cuenta de la wallet.');
      }
    } catch (err: any) {
      if (err?.code === 4001) {
        setWalletError('Conexión rechazada por el usuario.');
      } else {
        setWalletError(`Error al conectar wallet: ${err?.message || err}`);
      }
    } finally {
      setWalletConnecting(false);
    }
  };

  const handleDisconnectWallet = () => {
    setWalletAddress('');
    setEmailB('');
    setWalletError(null);
  };

  // ─── Flujo A: Registro con email ───────────────────────────
  const handleEmailRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailA.trim()) return;

    setEmailALoading(true);
    setEmailAError(null);
    clearError();

    const result = await registerWithEmail(emailA.trim());
    setEmailALoading(false);

    if (result.success) {
      setSentEmail(emailA.trim());
      setRegistrationType('email');
      setView('magic-sent');
    } else {
      const msg = result.error || 'Error al registrar';
      if (isEmailCollision(msg)) {
        setEmailAError(
          'Este email ya está registrado. Por favor, inicia sesión o usa otro email.'
        );
      } else {
        setEmailAError(msg);
      }
    }
  };

  // ─── Flujo B: Registro con wallet + email ──────────────────
  const handleWalletRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailB.trim() || !walletAddress) return;

    setWalletSubmitLoading(true);
    setWalletError(null);
    clearError();

    const result = await registerWithWallet(emailB.trim(), walletAddress);
    setWalletSubmitLoading(false);

    if (result.success) {
      setSentEmail(emailB.trim());
      setRegistrationType('wallet');
      setView('magic-sent');
    } else {
      const msg = result.error || 'Error al registrar con wallet';
      if (isEmailCollision(msg)) {
        setWalletError(
          'Este email ya está registrado. Por favor, introduce un email válido.'
        );
      } else {
        setWalletError(msg);
      }
    }
  };

  const handleStartOver = () => {
    setView('form');
    setEmailA('');
    setEmailB('');
    setWalletAddress('');
    setEmailAError(null);
    setWalletError(null);
    clearError();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden py-12">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#00ffe6]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-[460px] relative z-10"
      >
        {/* Back button → siempre vuelve al Login */}
        <button
          onClick={() => (view === 'form' ? navigate('/login') : handleStartOver())}
          className="flex items-center gap-2 text-[#99a1af] hover:text-white transition-colors mb-8 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">
            {view === 'form' ? 'Volver al login' : 'Empezar de nuevo'}
          </span>
        </button>

        {/* Card */}
        <div className="bg-[rgba(0,0,0,0.6)] border border-white/10 rounded-[28px] p-8 md:p-10 backdrop-blur-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logo} alt="PSC" className="h-14 w-auto" />
          </div>

          <AnimatePresence mode="wait">
            {/* ========== VISTA: FORMULARIO ========== */}
            {view === 'form' && (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h1 className="text-white text-[26px] font-semibold text-center mb-2 tracking-[-1px]">
                  Crea tu cuenta
                </h1>
                <p className="text-[#99a1af] text-center text-[14px] mb-8">
                  Regístrate en Pádel Sport Club
                </p>

                {/* ─────────────────────────────────────
                    FLUJO A: Registro exclusivo por Email
                ───────────────────────────────────── */}
                <form onSubmit={handleEmailRegister} className="space-y-4">
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
                        value={emailA}
                        onChange={(e) => {
                          setEmailA(e.target.value);
                          setEmailAError(null);
                        }}
                        placeholder="tu@email.com"
                        className="w-full bg-[#020705] border border-white/10 rounded-[14px] pl-11 pr-4 h-[52px] text-white placeholder-white/30 focus:outline-none focus:border-[#00ffe6]/50 transition-colors text-[15px]"
                      />
                    </div>
                  </div>

                  <AnimatePresence>
                    {emailAError && (
                      <motion.div
                        key="emailAError"
                        initial={{ opacity: 0, y: -4, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                          <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                          <p className="text-red-400 text-sm">{emailAError}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={emailALoading || !emailA.trim()}
                    className="w-full h-[52px] bg-[#01ffe7] rounded-[14px] text-black font-bold text-[15px] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    {emailALoading ? (
                      <Loader2 size={18} className="animate-spin relative z-10" />
                    ) : (
                      <>
                        <Mail size={16} className="relative z-10" />
                        <span className="relative z-10">Registrarse con Email</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Divider */}
                <div className="flex items-center gap-4 my-6">
                  <div className="flex-1 h-px bg-white/10" />
                  <span className="text-[#99a1af] text-[12px] uppercase tracking-wider">o</span>
                  <div className="flex-1 h-px bg-white/10" />
                </div>

                {/* ─────────────────────────────────────
                    FLUJO B: Registro por Wallet Externa
                ───────────────────────────────────── */}
                {!walletAddress ? (
                  // Botón para conectar wallet
                  <>
                    <button
                      onClick={handleConnectWallet}
                      disabled={walletConnecting}
                      className="w-full h-[52px] bg-white/5 border border-white/10 rounded-[14px] text-white font-semibold text-[15px] flex items-center justify-center gap-2 hover:bg-white/10 hover:border-[#00ffe6]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {walletConnecting ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Wallet size={18} />
                      )}
                      <span>
                        {walletConnecting ? 'Conectando...' : 'Registrarse con Wallet'}
                      </span>
                    </button>

                    {/* Error al conectar wallet */}
                    <AnimatePresence>
                      {walletError && (
                        <motion.div
                          key="walletConnectError"
                          initial={{ opacity: 0, y: -4, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden mt-3"
                        >
                          <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                            <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                            <p className="text-red-400 text-sm">{walletError}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  // Sección dinámica tras conectar wallet
                  <motion.div
                    key="wallet-section"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                  >
                    {/* Indicador de wallet conectada */}
                    <div className="bg-[#020705] border border-[#00ffe6]/25 rounded-[14px] p-3.5 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#00ffe6]/10 flex items-center justify-center shrink-0">
                        <Wallet size={14} className="text-[#00ffe6]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[#99a1af] text-[11px] uppercase tracking-wider">
                          Wallet conectada
                        </p>
                        <p className="text-white text-[13px] font-mono">
                          {truncateAddr(walletAddress)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00ffe6] animate-pulse shrink-0" />
                        <button
                          onClick={handleDisconnectWallet}
                          className="text-white/30 hover:text-white/70 transition-colors"
                          title="Desconectar wallet"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Campo dinámico: email para el flujo de wallet */}
                    <form onSubmit={handleWalletRegister} className="space-y-4">
                      <div>
                        <label className="block text-white/60 text-xs uppercase tracking-wider mb-2">
                          Introduce un email para continuar
                        </label>
                        <div className="relative">
                          <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-[#99a1af]"
                          />
                          <input
                            type="email"
                            value={emailB}
                            onChange={(e) => {
                              setEmailB(e.target.value);
                              setWalletError(null);
                            }}
                            placeholder="tu@email.com"
                            autoFocus
                            className="w-full bg-[#020705] border border-white/10 rounded-[14px] pl-11 pr-4 h-[52px] text-white placeholder-white/30 focus:outline-none focus:border-[#00ffe6]/50 transition-colors text-[15px]"
                          />
                        </div>
                      </div>

                      <AnimatePresence>
                        {walletError && (
                          <motion.div
                            key="walletError"
                            initial={{ opacity: 0, y: -4, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                              <AlertCircle
                                size={16}
                                className="text-red-400 mt-0.5 shrink-0"
                              />
                              <p className="text-red-400 text-sm">{walletError}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <button
                        type="submit"
                        disabled={walletSubmitLoading || !emailB.trim()}
                        className="w-full h-[52px] bg-[#01ffe7] rounded-[14px] text-black font-bold text-[15px] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        {walletSubmitLoading ? (
                          <Loader2 size={18} className="animate-spin relative z-10" />
                        ) : (
                          <>
                            <Wallet size={16} className="relative z-10" />
                            <span className="relative z-10">Registrarse con Wallet</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}

                {/* Enlace a login */}
                <div className="mt-6 text-center">
                  <p className="text-[#99a1af] text-sm">
                    ¿Ya tienes cuenta?{' '}
                    <Link
                      to="/login"
                      className="text-[#00ffe6] hover:underline font-medium"
                    >
                      Inicia sesión
                    </Link>
                  </p>
                </div>
              </motion.div>
            )}

            {/* ========== VISTA: MAGIC LINK ENVIADO ========== */}
            {view === 'magic-sent' && (
              <motion.div
                key="magic-sent"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-2"
              >
                <div className="w-16 h-16 rounded-full bg-[#00ffe6]/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={32} className="text-[#00ffe6]" />
                </div>
                <h2 className="text-white text-[24px] font-semibold mb-3 tracking-[-1px]">
                  Revisa tu email
                </h2>
                <p className="text-[#99a1af] text-[14px] mb-1">
                  Hemos enviado un magic link a
                </p>
                <p className="text-white font-medium text-[16px] mb-5">{sentEmail}</p>

                {/* Info contextual según tipo de registro */}
                {registrationType === 'wallet' ? (
                  <div className="bg-[#020705] border border-[#00ffe6]/20 rounded-[14px] p-3.5 mb-6 text-left">
                    <p className="text-[#99a1af] text-[11px] uppercase tracking-wider mb-1">
                      Wallet a vincular
                    </p>
                    <p className="text-white text-[13px] font-mono">
                      {truncateAddr(walletAddress)}
                    </p>
                  </div>
                ) : (
                  <div className="bg-purple-500/5 border border-purple-500/15 rounded-[14px] p-3.5 mb-6 text-left">
                    <p className="text-purple-300/70 text-[12px]">
                      Al confirmar tu cuenta, se creará automáticamente una wallet interna
                      vinculada a tu email.
                    </p>
                  </div>
                )}

                <p className="text-[#99a1af] text-[13px] mb-8">
                  Haz clic en el enlace del email para completar tu registro. Si no lo
                  encuentras, revisa la carpeta de spam.
                </p>

                <button
                  onClick={handleStartOver}
                  className="text-[#00ffe6] text-sm hover:underline font-medium"
                >
                  Empezar de nuevo
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
