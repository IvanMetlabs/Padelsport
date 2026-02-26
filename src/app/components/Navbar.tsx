import image_cf422f683fcd4a8eed14062d8cc2c68ff0331705 from 'figma:asset/cf422f683fcd4a8eed14062d8cc2c68ff0331705.png';
import React, { useState, useEffect } from 'react';
import { Menu, X, Twitter, Send, Disc, Wallet, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { useAuth } from './auth/AuthContext';
import logo from 'figma:asset/beaf3bcfd3b85b6602316924aae2e5fe82f1f4f6.png';

export const Navbar = ({ onConnect, isConnected: isConnectedProp }: { onConnect?: () => void, isConnected?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const { isConnected, connect, loading } = useAuth();
  const navigate = useNavigate();

  const connected = isConnectedProp ?? isConnected;

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Inicio', href: '#' },
    { name: 'Vision', href: '#vision' },
    { name: 'Tokenomics', href: '#tokenomics' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Whitepaper', href: '#' },
  ];

  const handleConnect = async () => {
    setConnecting(true);
    try {
      const success = await connect();
      if (success) {
        navigate('/dashboard');
      }
    } finally {
      setConnecting(false);
    }
  };

  const isLoading = connecting || loading;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => navigate('/')}>
            {/* Desktop Logo */}
            <img
              src={image_cf422f683fcd4a8eed14062d8cc2c68ff0331705}
              alt="Padel Sport Club"
              className="hidden md:block h-9 w-auto object-contain"
            />

            {/* Mobile Logo */}
            <div className="flex md:hidden items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-[#00ffe6]/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                <img
                  src={logo}
                  alt="Padel Sport Club Logo"
                  className="h-12 w-auto object-contain relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8 bg-[rgba(255,255,255,0.05)] px-8 py-2.5 rounded-full border border-white/5 backdrop-blur-sm">
            <a href="#vision" className="text-[14px] text-[#d1d5dc] transition-all hover:text-white relative group">
                Vision
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffe6] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#tokenomics" className="text-[14px] text-[#d1d5dc] transition-all hover:text-white relative group">
                Tokenomics
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffe6] transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#roadmap" className="text-[14px] text-[#d1d5dc] transition-all hover:text-white relative group">
                Roadmap
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00ffe6] transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Right Side - CTA */}
          <div className="hidden md:flex items-center gap-3">
            {connected ? (
              <button
                onClick={() => navigate('/dashboard')}
                className="flex items-center gap-2 rounded-[14px] bg-[#00ffe6] px-6 h-[42px] text-sm font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] relative overflow-hidden group border-[0.667px] border-[rgba(1,255,230,0.5)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Wallet size={16} className="relative z-10" />
                <span className="relative z-10">Mi Panel</span>
              </button>
            ) : (
              <button
                onClick={handleConnect}
                disabled={isLoading}
                className="flex items-center gap-2 rounded-[14px] bg-[#00ffe6] px-6 h-[42px] text-sm font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(1,255,231,0.4)] relative overflow-hidden group border-[0.667px] border-[rgba(1,255,230,0.5)] disabled:opacity-60"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                {isLoading ? <Loader2 size={16} className="relative z-10 animate-spin" /> : <Wallet size={16} className="relative z-10" />}
                <span className="relative z-10">{isLoading ? 'Conectando...' : 'Conectar'}</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 md:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-black/95 backdrop-blur-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-300 hover:text-white hover:pl-2 transition-all border-l-2 border-transparent hover:border-[#00ffe6] pl-0"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <div className="h-px bg-white/10 my-2" />

              <div className="flex justify-center gap-6 py-2">
                 <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
                 <a href="#" className="text-gray-400 hover:text-white"><Send size={24} /></a>
                 <a href="#" className="text-gray-400 hover:text-white"><Disc size={24} /></a>
              </div>

              <button
                onClick={async () => {
                  setIsOpen(false);
                  if (connected) {
                    navigate('/dashboard');
                  } else {
                    await handleConnect();
                  }
                }}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#00ffe6] py-3 font-bold text-black shadow-lg shadow-[#00ffe6]/20 disabled:opacity-60"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Wallet size={20} />}
                {connected ? 'Mi Panel' : isLoading ? 'Conectando...' : 'Conectar'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
