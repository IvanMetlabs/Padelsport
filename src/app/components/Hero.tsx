import React from 'react';
import { motion } from 'motion/react';
import imgPadelLogoHorizontal1 from "figma:asset/ac4637c17e39d796f6823439bbcc12c96c23f219.png";
import coinImage from "figma:asset/215266e80ed007dd7ff5b8361bbcf0132d5e0591.png";
import logoBlack from "figma:asset/14bb6c8ca043393cf68fb2e756369dc5e9b04b44.png";
import { PresaleWidget } from './PresaleWidget';

export const Hero = ({ onConnect }: { onConnect?: () => void }) => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black flex flex-col items-center justify-center py-20 md:py-[116px] px-4">
       
       {/* Backgrounds */}
       <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
             <img 
               src={imgPadelLogoHorizontal1} 
               alt="" 
               className="absolute w-[100%] h-[100%] left-0 top-0 object-cover opacity-100"
             />
          </div>
          <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0.5)] inset-0 to-black" />
       </div>

       {/* Main Content */}
       <div className="relative z-10 flex flex-col items-center gap-6 w-full max-w-[896px] text-center">
          {/* Badge */}
          <div className="flex gap-4 items-center justify-center">
             <div className="w-[40px] h-[40px] md:w-[43px] md:h-[43px] rounded-full overflow-hidden relative border border-white/10">
                <img src={logoBlack} alt="" className="absolute inset-0 w-full h-full object-cover" />
             </div>
             <p className="text-[#99a1af] text-base md:text-[18px] tracking-[1.2px] uppercase">
                $PSC Presale
             </p>
          </div>

          {/* Title */}
          <h1 className="text-white text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight md:leading-[90px]">
             Redefiniendo el deporte
          </h1>

          {/* Paragraph */}
          <div className="relative w-full max-w-[672px] px-4">
             <p className="text-[#e5e7eb] text-lg md:text-[20px] leading-relaxed md:leading-[32.5px]">
               Una comunidad de pádel de nueva generación impulsada por blockchain
             </p>
          </div>
       </div>

       {/* Widget and Coins Container */}
       <div className="relative mt-10 md:mt-[60px] w-full max-w-[700px] flex items-center justify-center">
          {/* Coin 1 - Hidden on mobile, visible on lg */}
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
             className="hidden md:flex absolute left-[-150px] lg:left-[-100px] top-[13px] w-[200px] h-[200px] lg:w-[330px] lg:h-[330px] items-center justify-center z-10 pointer-events-none"
          >
             <div className="w-full h-full rotate-[0.783deg]">
                <img src={coinImage} alt="" className="w-full h-full object-contain" />
             </div>
          </motion.div>

          {/* Coin 2 - Hidden on mobile, visible on lg */}
          <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
             className="hidden md:flex absolute right-[-100px] lg:right-[-80px] bottom-[-20px] w-[120px] h-[120px] lg:w-[165px] lg:h-[165px] items-center justify-center z-10 pointer-events-none"
          >
             <div className="w-full h-full rotate-[180.783deg] scale-y-[-1]">
                <img src={coinImage} alt="" className="w-full h-full object-contain" />
             </div>
          </motion.div>

          {/* Widget */}
          <div className="z-20 relative w-full flex justify-center">
             <PresaleWidget onConnect={onConnect} />
          </div>
       </div>

    </section>
  );
};
