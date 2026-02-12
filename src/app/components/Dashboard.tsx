import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import { Wallet, LogOut, Plus, X, CheckCircle } from 'lucide-react';
import levelBronceIcon from 'figma:asset/2f6670d60dd5cc86dab83c47df4253843ecc98b3.png';
import levelPlataIcon from 'figma:asset/ff4c7438fb1b4a1ba5b98cf37a252a8685120d78.png';
import levelOroIcon from 'figma:asset/e8d9edf8b7198cc8ba5090ca2e709ef02f67625d.png';
import PresaleWidget from '@/imports/PresaleWidget-78-1195';

interface DashboardProps {
  balance: number;
  onDisconnect: () => void;
}

export const Dashboard = ({ balance: initialBalance = 200, onDisconnect }: DashboardProps) => {
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
    if (amount >= 500) return { current: 'Víbora', next: 'Smash', target: 1000, icon: levelPlataIcon, color: '#C0C0C0' };
    if (amount >= 100) return { current: 'Bandeja', next: 'Víbora', target: 500, icon: levelBronceIcon, color: '#CD7F32' };
    return { current: 'Sin Nivel', next: 'Bandeja', target: 100, icon: null, color: '#99a1af' };
  };

  const levelInfo = getLevelInfo(balance);
  
  // Progress Calculation
  const getProgress = () => {
    if (!levelInfo.target) return 100; // Max level
    
    let prevTarget = 0;
    if (levelInfo.current === 'Bandeja') prevTarget = 100;
    if (levelInfo.current === 'Víbora') prevTarget = 500;
    
    const range = levelInfo.target - prevTarget;
    const currentInLevel = balance - prevTarget;
    
    return Math.min(100, Math.max(0, (currentInLevel / range) * 100));
  };

  const progress = getProgress();

  const handleBuy = (amount: number) => {
    setBalance(prev => prev + amount);
    setIsBuyModalOpen(false);
    setShowSuccess(true);
    // Auto hide success after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };


  return (
    <div className="min-h-screen bg-black pt-24 pb-12 px-4 md:px-6 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white">Mi Panel</h1>
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
                {/* Left Icon (Previous/Other) */}
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] opacity-20 relative shrink-0">
                   {levelInfo.current === 'Víbora' ? (
                       <img src={levelBronceIcon} alt="Bronce" className="w-full h-full object-contain" />
                   ) : levelInfo.current === 'Smash' ? (
                       <img src={levelPlataIcon} alt="Plata" className="w-full h-full object-contain" />
                   ) : (
                       // If Bronze, show Silver faded on left? Or nothing?
                       // Design showed Plata on left for Bronce. Let's follow that weird pattern if it matches the screenshot.
                       // Screenshot: 2 (Left), 3 (Middle), 1 (Right).
                       // If 2=Plata, 3=Bronce, 1=Oro.
                       // This seems to be the static arrangement.
                       // I will stick to logical: Left = Lower, Right = Higher.
                       // But to match the visual density of 3 items:
                       // If Bronze: Show Silver (Left, Faded), Bronze (Center, Active), Gold (Right, Faded).
                       // This matches the "Plata - Bronce - Oro" visual if we assume order is arbitrary.
                       // Let's just use the logic: Previous - Current - Next.
                       // If no previous, show empty or maybe just Silver?
                       // Let's go with:
                       // Left: Silver (if Bronze), Bronze (if Silver), Silver (if Gold).
                       // Wait, if I am Bronze, I want to see what's next (Silver).
                       // If I am Gold, I want to see what was previous (Silver).
                       // Let's try:
                       // Always show 3 icons?
                       // Let's implement the specific look of the import for Bronze:
                       // Left: Plata (20%), Middle: Bronce (100%), Right: Oro (20%).
                       // This is what the code `Container-81-20.tsx` does.
                       // I'll make it dynamic:
                       // If Bronze: Plata(20) - Bronce(100) - Oro(20)
                       // If Silver: Bronce(20) - Plata(100) - Oro(20)
                       // If Gold: Bronce(20) - Oro(100) - Plata(20)?
                       // Actually, let's just arrange them: Bronce, Plata, Oro.
                       // And highlight the active one.
                       // If Bronce is active: Bronce (Center), others side?
                       // The `Frame` in import: Plata(Left), Bronce(Center), Oro(Right).
                       // This implies the position is fixed based on the image name, NOT the level.
                       // But the middle one is BIGGER (116px vs 80px).
                       // So the Active level MUST be in the middle.
                       // So:
                       // Left: Other1. Center: Active. Right: Other2.
                       <img src={
                           levelInfo.current === 'Bandeja' ? levelPlataIcon :
                           levelInfo.current === 'Víbora' ? levelBronceIcon :
                           levelPlataIcon // Gold case
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

                {/* Right Icon (Next/Other) */}
                <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] opacity-20 relative shrink-0">
                    <img src={
                           levelInfo.current === 'Bandeja' ? levelOroIcon :
                           levelInfo.current === 'Víbora' ? levelOroIcon :
                           levelBronceIcon // Gold case
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
                            ¡Máximo nivel alcanzado!
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

            {/* CTA Button */}
            <button 
                onClick={() => setIsBuyModalOpen(true)}
                className="w-full h-[57px] bg-[#01ffe7] rounded-[14px] text-black text-[16px] font-bold flex items-center justify-center shadow-[0_0_20px_0px_rgba(1,255,231,0.2)] hover:bg-[#00e6d0] transition-colors relative overflow-hidden group"
            >
                <span className="relative z-10">Comprar más</span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
        </div>

        {/* Recent Transactions / Info Placeholder */}
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
                        {levelInfo.current === 'Smash' ? 'Experiencias VIP y Clínicas' : 
                         levelInfo.current === 'Víbora' ? 'Prioridad en reservas' : 'Descuentos en tienda'}
                    </li>
                </ul>
            </GlassCard>

            <GlassCard className="p-6">
                 <h3 className="text-lg font-bold text-white mb-4">Próxima Recompensa</h3>
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
                    <PresaleWidget onClose={() => setIsBuyModalOpen(false)} onBuy={handleBuy} />
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
