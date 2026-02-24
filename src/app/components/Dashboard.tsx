import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { Wallet, LogOut, CreditCard, CheckCircle } from 'lucide-react';
import { useAuth } from './auth/AuthContext';
import { useCheckout } from '@web3auth/modal/react';
import { supabaseUrl, edgeFunctionName } from '../../../utils/supabase/info';
import levelBronceIcon from 'figma:asset/2f6670d60dd5cc86dab83c47df4253843ecc98b3.png';
import levelPlataIcon from 'figma:asset/ff4c7438fb1b4a1ba5b98cf37a252a8685120d78.png';
import levelOroIcon from 'figma:asset/e8d9edf8b7198cc8ba5090ca2e709ef02f67625d.png';
import PresaleWidget from '@/imports/PresaleWidget-78-1195';

const SERVER_URL = `${supabaseUrl}/functions/v1/${edgeFunctionName}`;

interface DashboardProps {
  balance: number;
  onDisconnect: () => void;
}

export const Dashboard = ({ balance: initialBalance = 0, onDisconnect }: DashboardProps) => {
  const { profile, fetchProfile, getIdToken } = useAuth();
  const { showCheckout } = useCheckout();
  const [balance, setBalance] = useState(initialBalance);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Update local balance if prop changes
  useEffect(() => {
    setBalance(initialBalance);
  }, [initialBalance]);

  // Level Logic
  const getLevelInfo = (amount: number) => {
    if (amount >= 1000) return { current: 'Smash', next: null, target: null, icon: levelOroIcon, color: '#FFD700' };
    if (amount >= 500) return { current: 'Vibora', next: 'Smash', target: 1000, icon: levelPlataIcon, color: '#C0C0C0' };
    if (amount >= 100) return { current: 'Bandeja', next: 'Vibora', target: 500, icon: levelBronceIcon, color: '#CD7F32' };
    return { current: 'Sin Nivel', next: 'Bandeja', target: 100, icon: null, color: '#99a1af' };
  };

  const levelInfo = getLevelInfo(balance);

  // Progress Calculation
  const getProgress = () => {
    if (!levelInfo.target) return 100;

    let prevTarget = 0;
    if (levelInfo.current === 'Bandeja') prevTarget = 100;
    if (levelInfo.current === 'Vibora') prevTarget = 500;

    const range = levelInfo.target - prevTarget;
    const currentInLevel = balance - prevTarget;

    return Math.min(100, Math.max(0, (currentInLevel / range) * 100));
  };

  const progress = getProgress();

  // Wallet type display label
  const walletTypeLabel = () => {
    if (!profile) return '';
    switch (profile.walletType) {
      case 'external': return 'Wallet externa';
      case 'web3auth_mpc': return 'Wallet embebida';
      case 'internal': return 'Wallet interna';
      default: return profile.walletType;
    }
  };

  const handleBuy = async (amount: number) => {
    try {
      const idToken = await getIdToken();
      if (!idToken) {
        console.log('No idToken for buy-tokens');
        return;
      }

      const res = await fetch(`${SERVER_URL}/auth/buy-tokens`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({ amount }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setBalance(data.newBalance);
        setIsBuyModalOpen(false);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        fetchProfile();
      } else {
        console.log('Token purchase error:', data.error);
      }
    } catch (err) {
      console.log('Error during token purchase:', err);
    }
  };

  const handleFiatBuy = async () => {
    try {
      await showCheckout();
    } catch (err) {
      console.log('Error showing checkout:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 md:px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">Mi Panel</h1>
            {profile?.walletAddress && (
              <div className="flex items-center gap-2 mt-1">
                <div className={`w-2 h-2 rounded-full ${profile.walletType === 'external' ? 'bg-[#00ffe6]' : 'bg-purple-400'}`} />
                <span className="text-[#99a1af] text-xs font-mono">
                  {profile.walletAddress.slice(0, 6)}...{profile.walletAddress.slice(-4)}
                </span>
                <span className="text-[#99a1af]/50 text-[10px] uppercase">
                  ({walletTypeLabel()})
                </span>
              </div>
            )}
          </div>
          <button
            onClick={onDisconnect}
            className="flex items-center gap-2 text-sm text-[#99a1af] hover:text-white transition-colors"
          >
            <LogOut size={16} />
            Desconectar
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-black rounded-[30px] p-[30px] md:p-[50px] flex flex-col items-center gap-[30px] md:gap-[48px] w-full border border-white/5 shadow-2xl relative">
            {/* Level Icons Row */}
            <div className="flex items-center gap-[9px] relative">
                {/* Left Icon */}
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] opacity-20 relative shrink-0">
                   {levelInfo.current === 'Vibora' ? (
                       <img src={levelBronceIcon} alt="Bronce" className="w-full h-full object-contain" />
                   ) : levelInfo.current === 'Smash' ? (
                       <img src={levelPlataIcon} alt="Plata" className="w-full h-full object-contain" />
                   ) : (
                       <img src={
                           levelInfo.current === 'Bandeja' ? levelPlataIcon :
                           levelInfo.current === 'Vibora' ? levelBronceIcon :
                           levelPlataIcon
                       } alt="Left" className="w-full h-full object-contain" />
                   )}
                </div>

                {/* Center Icon (Current) */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-[100px] h-[100px] md:w-[116px] md:h-[116px] relative shrink-0 z-10"
                >
                    <img
                        src={levelInfo.icon || levelBronceIcon}
                        alt={levelInfo.current}
                        className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    />
                </motion.div>

                {/* Right Icon */}
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] opacity-20 relative shrink-0">
                    <img src={
                           levelInfo.current === 'Bandeja' ? levelOroIcon :
                           levelInfo.current === 'Vibora' ? levelOroIcon :
                           levelBronceIcon
                    } alt="Right" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-[28px] md:text-[32px] font-bold text-white uppercase tracking-wide text-center">
                Nivel {levelInfo.current}
            </h2>

            {/* Progress Section */}
            <div className="flex flex-col gap-[14px] items-start w-full">
                <div className="flex flex-col md:flex-row items-center justify-between w-full text-center md:text-left gap-2 md:gap-0">
                     <p className="text-[20px] font-bold text-white">
                        Tienes {balance.toLocaleString()} $PSC
                     </p>
                     {levelInfo.next && (
                         <p className="text-[16px] md:text-[20px] text-white/45">
                            Faltan {levelInfo.target! - balance} $PSC para el nivel {levelInfo.next}
                         </p>
                     )}
                     {!levelInfo.next && (
                         <p className="text-[20px] text-white/45">
                            ¡Maximo nivel alcanzado!
                         </p>
                     )}
                </div>

                {/* Bar */}
                <div className="bg-[#d9d9d9]/10 h-[23px] w-full rounded-[72px] overflow-hidden relative">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-[#01ffe7] relative shadow-[0_0_15px_rgba(1,255,231,0.4)]"
                    />
                </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <button
                  onClick={() => setIsBuyModalOpen(true)}
                  className="flex-1 h-[57px] bg-[#01ffe7] rounded-[14px] text-black text-[16px] font-bold flex items-center justify-center shadow-[0_0_20px_0px_rgba(1,255,231,0.2)] hover:bg-[#00e6d0] transition-colors relative overflow-hidden group"
              >
                  <span className="relative z-10">Comprar mas</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>

              <button
                  onClick={handleFiatBuy}
                  className="flex-1 h-[57px] bg-white/5 border border-white/10 rounded-[14px] text-white text-[16px] font-bold flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
              >
                  <CreditCard size={18} />
                  <span>Pagar con Tarjeta</span>
              </button>
            </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
                <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <Wallet size={20} className="text-[#00ffe6]" />
                    Beneficios Activos
                </h3>
                <ul className="space-y-3 text-gray-400 text-sm">
                    <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00ffe6]" />
                        Acceso a preventa exclusiva
                    </li>
                    <li className="flex items-center gap-2">
                         <div className="w-1.5 h-1.5 rounded-full bg-[#00ffe6]" />
                        {levelInfo.current === 'Smash' ? 'Experiencias VIP y Clinicas' :
                         levelInfo.current === 'Vibora' ? 'Prioridad en reservas' : 'Descuentos en tienda'}
                    </li>
                </ul>
            </GlassCard>

            <GlassCard className="p-6">
                 <h3 className="text-lg font-bold text-white mb-4">Proxima Recompensa</h3>
                 <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#00ffe6]/10 rounded-lg flex items-center justify-center text-[#00ffe6]">
                        🎁
                    </div>
                    <div>
                        <p className="text-white font-medium">Airdrop de Tokens</p>
                        <p className="text-xs text-gray-500">Se desbloquea en {levelInfo.target ? levelInfo.target - balance : 0} PSC</p>
                    </div>
                 </div>
            </GlassCard>
        </div>
      </div>

      {/* Buy Modal */}
      <AnimatePresence>
        {isBuyModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    onClick={() => setIsBuyModalOpen(false)}
                />
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative z-10 w-full max-w-[450px]"
                >
                    <PresaleWidget
                      onClose={() => setIsBuyModalOpen(false)}
                      onBuy={handleBuy}
                      onFiatBuy={handleFiatBuy}
                    />
                </motion.div>
            </div>
        )}
      </AnimatePresence>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
             <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 pointer-events-none">
                 <motion.div
                     initial={{ opacity: 0, scale: 0.8, y: 20 }}
                     animate={{ opacity: 1, scale: 1, y: 0 }}
                     exit={{ opacity: 0, scale: 0.8, y: -20 }}
                     className="bg-[#020705] border border-[#00ffe6]/20 p-8 rounded-2xl shadow-[0_0_50px_rgba(0,255,230,0.2)] flex flex-col items-center gap-4 text-center max-w-sm w-full"
                 >
                     <div className="w-16 h-16 rounded-full bg-[#00ffe6]/10 flex items-center justify-center text-[#00ffe6] mb-2">
                         <CheckCircle size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-white">¡Compra Exitosa!</h3>
                     <p className="text-gray-400">Has adquirido nuevos tokens $PSC. Tu nivel y balance se han actualizado.</p>
                 </motion.div>
             </div>
        )}
      </AnimatePresence>
    </div>
  );
};
