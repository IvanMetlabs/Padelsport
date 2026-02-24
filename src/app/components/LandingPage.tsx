import React from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from './Navbar';
import { Hero } from './Hero';
import { Features } from './Features';
import { Tokenomics } from './Tokenomics';
import { Roadmap } from './Roadmap';
import { Footer } from './Footer';
import { GlassCard } from './ui/GlassCard';
import { Shield, Users } from 'lucide-react';
import { useAuth } from './auth/AuthContext';
import diagonalLogo from 'figma:asset/5526274a3f9590a69afb4c761af3417fa21af54f.png';
import szLogo from 'figma:asset/fe637dc0826347c94b1c0f4d2de6465539bd000c.png';
import logo3 from 'figma:asset/a185c9b7c55fed3d7245d9f281608d32382d227b.png';
import logo4 from 'figma:asset/af834a208507c761df6ee82e93d48731ad2af394.png';
import levelBronceIcon from 'figma:asset/2f6670d60dd5cc86dab83c47df4253843ecc98b3.png';
import levelPlataIcon from 'figma:asset/ff4c7438fb1b4a1ba5b98cf37a252a8685120d78.png';
import levelOroIcon from 'figma:asset/e8d9edf8b7198cc8ba5090ca2e709ef02f67625d.png';

const VideoSection = () => {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
       {/* Background glow */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffe6]/5 rounded-full blur-[100px] pointer-events-none" />

       <div className="container mx-auto px-6 relative z-10">
         {/* Header */}
         <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="text-[#00ffe6] font-bold tracking-[1.2px] text-[14px] uppercase mb-4">Utility</p>
            <h2 className="text-4xl md:text-[36px] font-semibold text-white mb-6 tracking-[-1px]">Membresia Gamificada</h2>
            <p className="text-[#99a1af] text-[16px] leading-[26px]">
               Hemos sustituido el concepto tecnico de "staking" por un sistema de Membresia por niveles basada en los golpes del padel para incentivar la pertenencia.
            </p>
         </div>
         
         {/* Badges Visual */}
         <div className="relative w-full max-w-[1000px] mx-auto h-[300px] md:h-[480px] mb-12 hidden md:block">
            {/* Bronce (Left) */}
            <div className="absolute left-[5%] top-0 w-[374px] h-[374px] -rotate-[20.52deg] z-10 flex items-center justify-center">
                <img src={levelBronceIcon} alt="Nivel Bronce" className="w-full h-full object-contain" />
            </div>
            {/* Plata (Right) */}
            <div className="absolute right-[5%] top-[18px] w-[353px] h-[353px] rotate-[17.61deg] z-10 flex items-center justify-center">
                <img src={levelPlataIcon} alt="Nivel Plata" className="w-full h-full object-contain" />
            </div>
             {/* Oro (Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[443px] h-[443px] z-20">
                <img src={levelOroIcon} alt="Nivel Oro" className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" />
            </div>
         </div>

         {/* Mobile Badges (Stacked) */}
         <div className="md:hidden flex justify-center items-center -space-x-12 mb-12 scale-90">
             <div className="w-[180px] -rotate-12 z-0 opacity-80">
                 <img src={levelBronceIcon} alt="Nivel Bronce" className="w-full" />
             </div>
             <div className="w-[200px] z-20 -mt-10">
                 <img src={levelOroIcon} alt="Nivel Oro" className="w-full drop-shadow-2xl" />
             </div>
             <div className="w-[180px] rotate-12 z-0 opacity-80">
                 <img src={levelPlataIcon} alt="Nivel Plata" className="w-full" />
             </div>
         </div>
         
         {/* Cards */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
            
            {/* Bandeja */}
            <div className="flex flex-col bg-gradient-to-b from-transparent to-[#171c17] rounded-[16px] overflow-hidden">
               <div className="p-8 pb-4 flex flex-col items-center text-center gap-3">
                  <h3 className="text-white text-[36px] font-bold leading-none">Bandeja</h3>
                  <p className="text-[#FFD700] text-[24px] tracking-[0.7px] uppercase">+100 PSC</p>
               </div>
               <div className="mx-4 mb-4 bg-black/20 rounded-[10px] border border-[#413a3a] p-6 flex-1">
                  <div className="space-y-4 text-[14px] text-white">
                      <p>Acceso basico</p>
                      <p>Descuentos en marcas</p>
                      <p>Acceso al videojuego</p>
                  </div>
               </div>
            </div>

            {/* Smash */}
            <div className="flex flex-col rounded-[16px] overflow-hidden" style={{ backgroundImage: "linear-gradient(179.77deg, rgba(13, 13, 13, 0) 0.16%, rgb(64, 69, 10) 144.42%)" }}>
               <div className="p-8 pb-4 flex flex-col items-center text-center gap-3">
                  <h3 className="text-white text-[36px] font-bold leading-none">Smash</h3>
                  <p className="text-[#FFD700] text-[24px] tracking-[0.7px] uppercase">+1.000 PSC</p>
               </div>
               <div className="mx-4 mb-4 bg-black/20 rounded-[10px] border border-[#413a3a] p-6 flex-1">
                  <div className="space-y-4 text-[14px] text-white">
                      <p>Experiencias exclusivas</p>
                      <p>Clinicas profesionales</p>
                      <p>Mayor participacion</p>
                  </div>
               </div>
            </div>

            {/* Vibora */}
            <div className="flex flex-col bg-gradient-to-b from-transparent to-[#2c2c2c] rounded-[16px] overflow-hidden">
               <div className="p-8 pb-4 flex flex-col items-center text-center gap-3">
                  <h3 className="text-white text-[36px] font-bold leading-none">Vibora</h3>
                  <p className="text-[#FFD700] text-[24px] tracking-[0.7px] uppercase">+500 PSC</p>
               </div>
               <div className="mx-4 mb-4 bg-black/20 rounded-[10px] border border-[#413a3a] p-6 flex-1">
                   <div className="space-y-4 text-[14px] text-white">
                      <p>Prioridad reservas pistas</p>
                      <p>Mejores recompensas</p>
                      <p>Contenido premium</p>
                  </div>
               </div>
            </div>

         </div>
       </div>
    </section>
  );
};

const TransparencySection = () => {
  return (
    <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Compromiso</p>
               <h2 className="text-4xl font-bold text-white">Transparencia e Impacto Social</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                 <GlassCard className="p-8 bg-gradient-to-b from-white/10 to-transparent border-white/5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                       <Shield size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Gobernanza</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Comunicacion clara y periodica sobre la evolucion estrategica y economica del proyecto.
                    </p>
                 </GlassCard>

                 <GlassCard className="p-8 bg-gradient-to-b from-white/10 to-transparent border-white/5 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#00ffe6]/20 flex items-center justify-center mb-6 text-[#00ffe6]">
                       <Users size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Impacto Social</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Programa de becas y patrocinios para jovenes deportistas, fomentando el deporte base y el talento emergente.
                    </p>
                 </GlassCard>
            </div>
        </div>
      </section>
  );
};

export const LandingPage = () => {
  const { isConnected } = useAuth();
  const navigate = useNavigate();

  const handleConnect = () => {
    if (isConnected) {
      navigate('/dashboard');
    } else {
      navigate('/register');
    }
  };

  const logos = [
    { src: diagonalLogo, alt: "Diagonal Padel Academy" },
    { src: szLogo, alt: "S&Z Sports Consulting" },
    { src: logo3, alt: "Partner 3" },
    { src: logo4, alt: "Partner 4" },
    { src: diagonalLogo, alt: "Diagonal Padel Academy" },
    { src: szLogo, alt: "S&Z Sports Consulting" },
    { src: logo3, alt: "Partner 3" },
    { src: logo4, alt: "Partner 4" },
  ];

  return (
    <>
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
      <Navbar onConnect={handleConnect} isConnected={isConnected} />
      <Hero onConnect={handleConnect} />
      
      {/* Marquee Section */}
      <div className="bg-[#00ffe6]/5 border-y border-[#00ffe6]/20 py-6 overflow-hidden relative z-20">
        <div className="flex w-max animate-scroll">
           {/* First copy */}
           <div className="flex items-center gap-20 px-10">
              {logos.map((logo, index) => (
                <div key={`l1-${index}`} className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity">
                   <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain brightness-0 invert" />
                </div>
              ))}
           </div>
           {/* Second copy for infinite loop */}
           <div className="flex items-center gap-20 px-10">
              {logos.map((logo, index) => (
                <div key={`l2-${index}`} className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity">
                   <img src={logo.src} alt={logo.alt} className="h-full w-auto object-contain brightness-0 invert" />
                </div>
              ))}
           </div>
        </div>
      </div>

      <Features />
      <VideoSection />
      <Tokenomics />
      <Roadmap />
      <TransparencySection />
      <Footer />
    </>
  );
};
