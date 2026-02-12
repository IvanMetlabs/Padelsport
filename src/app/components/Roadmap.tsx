import React from 'react';
import { motion } from 'motion/react';
import { GlassCard } from './ui/GlassCard';
import coinImage from "figma:asset/c9fb2644aa11627a1e095e18da6b12e112d18731.png";
import newCoinImage from "figma:asset/978030518d45c5b9755accc1e52c7d66fce97454.png";

const phases = [
  {
    phase: "Fase 1",
    title: "Lanzamiento del token y construcción de la comunidad",
    items: [
      "Emisión del token de membresía en formato utility",
      "Estrategia activa de creación de comunidad",
      "Alianzas con marcas, academias y clubes existentes",
      "Ventajas reales y descuentos desde el inicio"
    ]
  },
  {
    phase: "Fase 2",
    title: "Desarrollo del videojuego y expansión física",
    items: [
      "Lanzamiento del videojuego oficial como puerta de entrada digital",
      "Captación masiva de usuarios en plataformas móviles",
      "Creación y adhesión de clubes físicos de pádel",
      "Refuerzo de la conexión digital-deportiva"
    ]
  },
  {
    phase: "Fase 3",
    title: "Evolución regulada del token y mecanismos de valor",
    items: [
      "Evolución a modelo híbrido utility-security (OCA - CNMV)",
      "Mecanismos de recompra y quema de tokens",
      "Reinversión de beneficios de videojuego y clubes",
      "Reducción de oferta para aumentar la escasez"
    ]
  },
  {
    phase: "Fase 4",
    title: "Expansión internacional y consolidación del ecosistema",
    items: [
      "Escalado del modelo a nivel internacional",
      "Consolidación de la red de clubes físicos y digitales",
      "Ampliación de alianzas globales",
      "Referente en deporte, tecnología y comunidad"
    ]
  }
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-[1118px] left-[364px] w-[600px] h-[600px] bg-[#01ffe6]/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#00ffe6] font-bold tracking-[1.4px] text-[14px] uppercase mb-4 block">Roadmap</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Crecimiento Progresivo y <br/> Estratégico
          </h2>
          <p className="text-[#99a1af] max-w-2xl mx-auto text-[16px] leading-[24px]">
             Diseñamos un crecimiento progresivo para minimizar riesgos y maximizar el valor para la comunidad.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto pb-20">
          {/* Central Line */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#00ffe6] via-[#00b8db] to-transparent md:-translate-x-1/2 opacity-30" />

          <div className="space-y-24 md:space-y-32">
            {phases.map((phase, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-12 items-center md:items-start relative ${
                   index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-[#00ffe6] shadow-[0_0_15px_rgba(0,255,230,0.8)] md:-translate-x-1/2 z-20 border-2 border-[#050511] mt-2" />

                {/* Content Side */}
                <div className={`ml-12 md:ml-0 md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
                  
                  {/* Phase & Title */}
                  <div className={`mb-6 flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <div className="text-[#00ffe6] text-[14px] font-bold mb-2 uppercase tracking-wide">{phase.phase}</div>
                    <h3 className="text-[24px] font-bold text-white leading-[30px] max-w-md">{phase.title}</h3>
                  </div>

                  {/* Card */}
                  <div className={`relative group inline-block w-full max-w-lg`}>
                    <GlassCard className="p-8 bg-[#ffffff]/5 border-[#ffffff]/10 hover:border-[#ffffff]/20 text-left transition-colors rounded-[16px]">
                      <ul className="space-y-4">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-[#99a1af] text-[14px] leading-[20px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00ffe6] flex-shrink-0 mt-2 shadow-[0_0_5px_#00ffe6]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>
                  </div>
                </div>

                {/* Empty Side / Decor Side */}
                <div className="hidden md:flex md:w-1/2 items-center justify-center relative self-stretch">
                   {/* Coin 1 - Visible on Phase 2 (Index 1) - Left Side */}
                   {index === 1 && (
                      <div className="w-[217px] h-[217px] pointer-events-none transform rotate-[-40deg] scale-y-[-1]">
                         <img src={newCoinImage} alt="" className="w-full h-full object-contain mix-blend-plus-lighter" />
                      </div>
                   )}

                   {/* Coin 2 - Visible on Phase 3 (Index 2) - Right Side */}
                   {index === 2 && (
                      <div className="w-[237px] h-[237px] pointer-events-none transform rotate-[-40deg]">
                         <img src={newCoinImage} alt="" className="w-full h-full object-contain mix-blend-plus-lighter" />
                      </div>
                   )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
