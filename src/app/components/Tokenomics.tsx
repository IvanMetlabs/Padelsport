import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import pscLogo from 'figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png';
import { GlassCard } from './ui/GlassCard';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { ShoppingBag, Smartphone, Award, Landmark, TrendingUp } from 'lucide-react';

const data = [
  { name: 'Videojuego', value: 40, color: '#00ffe6' }, // Cyan
  { name: 'Clubes Físicos', value: 30, color: '#3b82f6' }, // Blue
  { name: 'Recompra', value: 20, color: '#8b5cf6' }, // Purple
  { name: 'Comunidad', value: 10, color: '#10b981' }, // Emerald
];

const utilities = [
  {
    title: "Beneficios Físicos",
    desc: "Descuentos exclusivos en marcas de ropa, equipamiento y tarifas preferentes en clubes y academias asociadas.",
    icon: ShoppingBag,
    color: "text-[#00ffe6]"
  },
  {
    title: "Experiencia Digital",
    desc: "Acceso a modos de juego exclusivos, torneos con recompensas y elementos digitales únicos en el videojuego.",
    icon: Smartphone,
    color: "text-blue-400"
  },
  {
    title: "Staking y Fidelidad",
    desc: "Bloquear tokens permite mantener activa la membresía oficial y acceder a prioridad en eventos y clínicas.",
    icon: Award,
    color: "text-purple-400"
  },
  {
    title: "Evolución Regulada (OCA)",
    desc: "Evolución hacia un modelo híbrido bajo la regulación de la CNMV en España (Otros Criptoactivos).",
    icon: Landmark,
    color: "text-emerald-400"
  },
  {
    title: "Distribución de Beneficios",
    desc: "Ingresos del videojuego y clubes se destinan a recompra y quema de tokens, aumentando la escasez.",
    icon: TrendingUp,
    color: "text-orange-400"
  }
];

const SupplyCounter = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, latest => Math.round(latest).toLocaleString('de-DE')); // Using de-DE for dots separation

  React.useEffect(() => {
    const controls = animate(count, 1000000000, { duration: 3, ease: "circOut" });
    return controls.stop;
  }, []);

  return <motion.span className="tabular-nums">{rounded}</motion.span>;
};

export const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ffe6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
           <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-[#00ffe6] text-sm font-bold mb-4 uppercase tracking-wider">
             Token Allocation
           </div>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
             Tokenomics
           </h2>
           <p className="text-gray-400 max-w-2xl mx-auto mb-10">
             Distribución estratégica diseñada para garantizar la sostenibilidad y el crecimiento a largo plazo.
           </p>

           {/* Total Supply Section */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="inline-flex flex-col items-center justify-center p-8 rounded-[30px] bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group min-w-[300px] hover:border-[#00ffe6]/30 transition-colors"
           >
              <div className="absolute inset-0 bg-[#00ffe6]/5 blur-xl group-hover:bg-[#00ffe6]/10 transition-colors duration-500" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#00ffe6] rounded-b-full shadow-[0_0_15px_#00ffe6]" />
              
              <span className="text-sm text-[#99a1af] uppercase tracking-[0.2em] mb-2 relative z-10 font-bold">Total Supply</span>
              <div className="text-4xl md:text-6xl font-black text-white relative z-10 flex items-center gap-3 tracking-tight drop-shadow-[0_0_20px_rgba(0,255,230,0.15)]">
                 <SupplyCounter />
                 <span className="text-[#00ffe6] text-3xl md:text-5xl">$PSC</span>
              </div>
           </motion.div>
        </div>

        {/* Custom Chart Section */}
        <div className="relative w-full max-w-[900px] mx-auto h-[500px] mb-24 hidden md:block">
           <ResponsiveContainer width="100%" height="100%">
             <PieChart>
               <defs>
                 <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                   <feGaussianBlur stdDeviation="3" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
                 </filter>
               </defs>
               <Pie
                 data={data}
                 cx="50%"
                 cy="50%"
                 innerRadius={130}
                 outerRadius={145}
                 paddingAngle={6}
                 dataKey="value"
                 stroke="none"
                 startAngle={90}
                 endAngle={-270}
               >
                 {data.map((entry, index) => (
                   <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    style={{ filter: 'url(#glow)' }}
                    stroke={entry.color}
                    strokeWidth={1}
                    fillOpacity={0.8}
                   />
                 ))}
               </Pie>
             </PieChart>
           </ResponsiveContainer>

           {/* Manual Overlay for Labels and Central Logo */}
           <div className="absolute inset-0 pointer-events-none">
              {/* Center Logo with 50% opacity */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center z-20">
                  <img src={pscLogo} alt="PSC Logo" className="w-full h-full object-contain opacity-50 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
              </div>

              {/* Labels with connecting lines */}
              
              {/* 40% (Videojuego) - Top Right (Midpoint ~18°) */}
              <div className="absolute top-[18%] right-[18%] flex items-center gap-3">
                 <div className="w-24 h-[1px] bg-gradient-to-l from-[#00ffe6]/40 to-transparent origin-right rotate-[-15deg] translate-y-6" />
                 <div className="text-left">
                    <h4 className="text-white/90 font-bold text-lg">Videojuego</h4>
                    <p className="text-[#00ffe6] text-sm font-mono">40%</p>
                 </div>
              </div>
              
              {/* 30% (Clubes) - Bottom Right (Midpoint ~-108° / 252°) */}
              <div className="absolute bottom-[18%] right-[22%] flex items-center gap-3">
                 <div className="w-20 h-[1px] bg-gradient-to-l from-[#3b82f6]/40 to-transparent origin-right rotate-[35deg] -translate-y-5" />
                 <div className="text-left">
                    <h4 className="text-white/90 font-bold text-lg">Clubes</h4>
                    <p className="text-[#3b82f6] text-sm font-mono">30%</p>
                 </div>
              </div>

              {/* 20% (Recompra) - Bottom Left (Midpoint ~-198° / 162°) */}
              <div className="absolute bottom-[20%] left-[20%] flex flex-row-reverse items-center gap-3">
                 <div className="w-24 h-[1px] bg-gradient-to-r from-[#8b5cf6]/40 to-transparent origin-left rotate-[-25deg] -translate-y-4" />
                 <div className="text-right">
                    <h4 className="text-white/90 font-bold text-lg">Recompra</h4>
                    <p className="text-[#8b5cf6] text-sm font-mono">20%</p>
                 </div>
              </div>

              {/* 10% (Comunidad) - Top Left (Midpoint ~-252° / 108°) */}
              <div className="absolute top-[22%] left-[18%] flex flex-row-reverse items-center gap-3">
                 <div className="w-20 h-[1px] bg-gradient-to-r from-[#10b981]/40 to-transparent origin-left rotate-[15deg] translate-y-3" />
                 <div className="text-right">
                    <h4 className="text-white/90 font-bold text-lg">Comunidad</h4>
                    <p className="text-[#10b981] text-sm font-mono">10%</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Mobile Fallback (Standard Stack) */}
        <div className="md:hidden flex flex-col gap-6 mb-12">
            {data.map((item, index) => (
               <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-3">
                     <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                     <span className="text-white font-medium">{item.name}</span>
                  </div>
                  <span className="font-bold" style={{ color: item.color }}>{item.value}%</span>
               </div>
            ))}
        </div>

        {/* Utilities Grid - Repositioned to bottom */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
             {utilities.map((item, index) => (
               <GlassCard key={index} className="flex flex-col gap-4 p-5 bg-white/5 border-white/5 hover:bg-white/10 transition-colors group">
                 <div className={`p-3 rounded-xl bg-black/40 w-fit ${item.color} group-hover:scale-110 transition-transform`}>
                   <item.icon size={20} />
                 </div>
                 <div>
                   <h3 className="font-bold text-white mb-2 text-sm">{item.title}</h3>
                   <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                 </div>
               </GlassCard>
             ))}
        </div>
      </div>
    </section>
  );
};