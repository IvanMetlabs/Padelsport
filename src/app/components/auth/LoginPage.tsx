import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Loader2, AlertCircle, Wallet } from 'lucide-react';
import { useAuth } from './AuthContext';
import { useNavigate, Link } from 'react-router';
import logo from 'figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png';

export const LoginPage = () => {
  const { connect, isConnected, loading, error, clearError } = useAuth();
  const navigate = useNavigate();

  // Redirect if already connected
  useEffect(() => {
    if (!loading && isConnected) {
      navigate('/dashboard', { replace: true });
    }
  }, [isConnected, loading, navigate]);

  const handleConnect = async () => {
    clearError();
    await connect();
  };

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

          <h1 className="text-white text-[28px] font-semibold text-center mb-2 tracking-[-1px]">
            Iniciar Sesion
          </h1>
          <p className="text-[#99a1af] text-center text-[15px] mb-8">
            Accede a tu cuenta de Padel Sport Club
          </p>

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-2 bg-red-500/10 border border-red-500/20 rounded-xl p-3 mb-4"
            >
              <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
              <p className="text-red-400 text-sm">{error}</p>
            </motion.div>
          )}

          {/* Single connect button */}
          <button
            onClick={handleConnect}
            disabled={loading}
            className="w-full h-[56px] bg-[#01ffe7] rounded-[14px] text-black font-bold text-[16px] flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            {loading ? (
              <Loader2 size={20} className="animate-spin relative z-10" />
            ) : (
              <>
                <Wallet size={18} className="relative z-10" />
                <span className="relative z-10">Conectar</span>
              </>
            )}
          </button>

          <p className="text-[#99a1af]/60 text-center text-[12px] mt-4">
            Usa Google, Email o tu wallet preferida (MetaMask, WalletConnect...)
          </p>

          {/* Link to register */}
          <div className="mt-6 text-center">
            <p className="text-[#99a1af] text-sm">
              ¿No tienes cuenta?{' '}
              <Link
                to="/register"
                className="text-[#00ffe6] hover:underline font-medium"
              >
                Registrate aqui
              </Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
