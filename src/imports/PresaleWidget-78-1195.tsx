import React, { useState, useEffect } from 'react';
import { X, ChevronDown, CreditCard } from 'lucide-react';
import imgUsdt1 from "figma:asset/2ed3e4b39d2a73d0b2cca87badd15501d959826b.png";
import imgHero1 from "figma:asset/cbbb7313b9e0107f0bfc4f9cb43241552f0ba154.png";

interface PresaleWidgetProps {
  onClose?: () => void;
  onBuy?: (tokenAmount: number) => void;
}

export default function PresaleWidget({ onClose, onBuy }: PresaleWidgetProps) {
  const [usdtAmount, setUsdtAmount] = useState<string>("5000");
  const [pscAmount, setPscAmount] = useState<number>(0);
  const TOKEN_PRICE = 0.05;

  useEffect(() => {
    const value = parseFloat(usdtAmount.replace(/,/g, '')) || 0;
    setPscAmount(value / TOKEN_PRICE);
  }, [usdtAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and decimals
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setUsdtAmount(value);
  };

  const handleBuy = () => {
    if (onBuy && pscAmount > 0) {
        onBuy(pscAmount);
    }
  };

  return (
    <div className="bg-[#121212] flex flex-col gap-5 p-6 rounded-2xl w-full max-w-[400px] shadow-2xl border border-white/10 relative">
      
      {/* Header */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[#99a1af] text-xs font-bold tracking-widest uppercase">
            COMPRA $PSC
        </h2>
        <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors text-[#99a1af]"
        >
            <X size={16} />
        </button>
      </div>

      {/* Pay Section */}
      <div className="bg-[#020705] rounded-[17px] p-4 flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
            <div className="w-[18px] h-[18px] bg-[#1a1a1a] rounded-full flex items-center justify-center text-[#99A1AF]">
                <ChevronDown size={12} />
            </div>
            <span className="text-white text-xs">Pagas con</span>
        </div>
        
        <div className="flex items-end justify-between w-full">
            <input 
                type="text" 
                value={usdtAmount}
                onChange={handleInputChange}
                className="bg-transparent text-3xl text-white font-sans w-full focus:outline-none placeholder-white/30"
                placeholder="0"
            />
            <div className="bg-[#06160f] border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shrink-0">
                <img src={imgUsdt1} alt="USDT" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-bold">USDT</span>
            </div>
        </div>
      </div>

      {/* Receive Section */}
      <div className="bg-[#020705] rounded-[17px] p-4 flex flex-col w-full relative">
         <div className="flex items-center gap-2 mb-2">
            <div className="w-[18px] h-[18px] bg-[#1a1a1a] rounded-full flex items-center justify-center text-[#99A1AF]">
                <ChevronDown size={12} />
            </div>
            <span className="text-white text-xs">Recibes</span>
         </div>

         <div className="flex items-end justify-between w-full mb-6">
            <div className="text-3xl text-white font-sans">
                {pscAmount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
            </div>
             <div className="bg-[#06160f] border border-white/10 rounded-xl px-3 py-2 flex items-center gap-2 shrink-0">
                <img src={imgHero1} alt="PSC" className="w-5 h-5 object-contain" />
                <span className="text-white text-sm font-bold">PSC</span>
            </div>
         </div>

         {/* Progress Info */}
         <div className="space-y-3">
             <div className="flex justify-between text-[10px] text-[#99a1af]">
                 <span>Recaudado: <span className="text-white">$1,245,000</span></span>
                 <span>Objetivo: <span className="text-white">$2,000,000</span></span>
             </div>
             
             {/* Progress Bar */}
             <div className="h-3 bg-black/40 rounded-full border border-white/5 p-0.5">
                 <div className="h-full rounded-full bg-gradient-to-r from-[#01ffe7] to-[#01ffe7] w-[60%] shadow-[0_0_10px_rgba(1,255,231,0.3)] opacity-80" />
             </div>
         </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 w-full">
         <button 
            onClick={handleBuy}
            className="w-full h-14 bg-[#01ffe7] hover:bg-[#00e6d0] rounded-xl text-black font-bold text-base shadow-[0_0_20px_rgba(1,255,231,0.2)] transition-all active:scale-[0.98]"
         >
             Comprar con Crypto
         </button>
         
         <button 
            onClick={handleBuy}
            className="w-full h-14 bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl text-white font-bold text-base flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
         >
             <CreditCard size={18} />
             Pagar con Tarjeta (Fiat)
         </button>
      </div>

    </div>
  );
}