import React from 'react';
import { motion } from 'motion/react';
import svgPaths from '../../imports/svg-nbw3qw3f35';

// Assets
import imgAcademiasBg from "figma:asset/90e919ed0d4e7f2c6ef4b72fe2f8998ae8c1fdfb.png";
import imgSZ from "figma:asset/da39a5bddb0633611431baad5d771a5ea2364afe.png";
import imgDiagonal from "figma:asset/5526274a3f9590a69afb4c761af3417fa21af54f.png";
import imgGameBg from "figma:asset/3b9e3e34356c873a87e8ea668e669ad165fd3742.png";
import imgEcosistemaBg from "figma:asset/a93fb7dd965e5848491705a8308d710afa6a4343.png";
import imgLegal from "figma:asset/c4a13dea5fae043146a7bb1e9a5758744c72a3f4.png";
import imgZarapps from "figma:asset/6a05a2a0f6e828fa14f56cbc7f8d93de86892475.png";
import imgSerbo from "figma:asset/e3a9875e60022da657a0d6766e0369eb5a4c18db.png";

const MetlabsLogo = () => (
  <svg className="w-[184px] h-[31px]" viewBox="0 0 184 31" fill="none">
    <g>
        <path d={svgPaths.p112c70b0} fill="white" />
        <path d={svgPaths.p2165ca00} fill="white" />
        <path d={svgPaths.pc479480} fill="white" />
        <path d={svgPaths.p8d36300} fill="white" />
        <path d={svgPaths.p20157600} fill="white" />
        <path d={svgPaths.p3a6ca400} fill="#A260F6" />
        <path d={svgPaths.p31526a70} fill="white" />
        <path d={svgPaths.p2cb68130} fill="white" />
        <path d={svgPaths.p4d47be0} fill="white" />
        <path d={svgPaths.p309ec800} fill="white" />
    </g>
  </svg>
);

export const Features = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 lg:items-start justify-between">
           <div className="shrink-0">
               <h3 className="text-[#00ffe6] text-sm font-bold tracking-wider uppercase">AUTORIDAD Y ALIANZAS CLAVE</h3>
           </div>
           <p className="text-white text-2xl md:text-[24px] font-normal leading-tight max-w-2xl">
               La credibilidad de Pádel Sport Club se sustenta en alianzas con líderes de la industria española y global.
           </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            
            {/* 1. Academias de Elite (Full Width) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="col-span-1 md:col-span-3 h-[450px] relative rounded-2xl overflow-hidden"
            >
                {/* Bg */}
                <img src={imgAcademiasBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.67)]" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 flex flex-col md:flex-row gap-4 justify-between items-end md:items-center">
                    <h2 className="text-white text-3xl md:text-[24px] font-semibold ">Academias de Élite</h2>
                    <div className="flex items-center gap-8">
                        <img src={imgSZ} alt="S&Z" className="h-[46px] w-auto opacity-80" />
                        <img src={imgDiagonal} alt="Diagonal" className="h-[26px] w-auto opacity-80" />
                    </div>
                </div>
            </motion.div>

            {/* 2. Videojuego */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.1 }}
               className="h-[340px] relative rounded-[32px] overflow-hidden group"
            >
                <div className="absolute inset-0 bg-white" />
                <img src={imgGameBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-bold text-base text-center">
                        Videojuego en desarrollo
                    </div>
                </div>
            </motion.div>

            {/* 3. Ecosistema */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="h-[340px] relative rounded-[32px] overflow-hidden"
            >
                 <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(0, 255, 230, 0) 29.93%, #00FFE6 172.29%), #0D0D0D" }} />
                 {/* Image overflow handling as per Figma logic */}
                 <div className="absolute inset-0 overflow-hidden">
                     <img src={imgEcosistemaBg} alt="" className="absolute w-[250%] max-w-none left-[-90%] top-[13%] opacity-100" />
                 </div>
                 
                 <div className="absolute inset-0 p-6 flex flex-col justify-start gap-2">
                     <h2 className="text-white text-2xl font-semibold ">Ecosistema integral</h2>
                     <p className="text-white/60 text-base">El ecosistema se estructura mediante el token PSC</p>
                 </div>
            </motion.div>

            {/* 4. Legal */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.3 }}
               className="h-[340px] relative rounded-[32px] overflow-hidden bg-[#001614]"
            >
                 <div className="absolute inset-0 p-6 flex flex-col justify-start gap-2 z-10">
                     <h2 className="text-white text-2xl font-semibold ">Dirección Legal</h2>
                     <p className="text-white/60 text-base">Expertos en derecho tecnológico garantizando transparencia.</p>
                 </div>
                 <div className="absolute bottom-0 left-[-17px] w-[393px] h-[330px]">
                     <img src={imgLegal} alt="" className="w-full h-full object-contain" />
                 </div>
            </motion.div>

        </div>

        {/* Footer List */}
        <div className="flex flex-col gap-0 border-t border-[#404040]">
            {/* Item 1 */}
            <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-[#404040] items-center">
                <p className="flex-1 text-white text-xl md:text-2xl">En el desarrollo de la aplicación mobile</p>
                <img src={imgZarapps} alt="Zarapps" className="h-[60px] w-auto object-contain" />
            </div>
             {/* Item 2 */}
            <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-[#404040] items-center">
                <p className="flex-1 text-white text-xl md:text-2xl">Entidad creadora</p>
                <img src={imgSerbo} alt="Serbo Network" className="h-[64px] w-auto object-contain" />
            </div>
             {/* Item 3 */}
            <div className="flex flex-col md:flex-row gap-6 py-8 border-b border-[#404040] items-center">
                <p className="flex-1 text-white text-xl md:text-2xl">Infraestructura Web3</p>
                <MetlabsLogo />
            </div>
        </div>

      </div>
    </section>
  );
};
