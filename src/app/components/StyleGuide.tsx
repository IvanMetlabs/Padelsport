import React from 'react';
import { GlassCard } from './ui/GlassCard';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { Switch } from './ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Activity, AlertCircle, ArrowRight, Check, CheckCircle2, Copy, Search, User } from 'lucide-react';
import levelBronceIcon from 'figma:asset/2f6670d60dd5cc86dab83c47df4253843ecc98b3.png';
import imgUsdt1 from "figma:asset/2ed3e4b39d2a73d0b2cca87badd15501d959826b.png";
import imgHero1 from "figma:asset/cbbb7313b9e0107f0bfc4f9cb43241552f0ba154.png";

import { 
    PresaleWidget, 
    PresaleCountdown, 
    PresaleInput, 
    PresaleProgress, 
    TickerBadge, 
    CountdownDigit 
} from './PresaleWidget';

export const StyleGuide = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-12 font-sans selection:bg-[#00ffe6] selection:text-black">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-8">
            <div>
                <h1 className="text-4xl font-bold mb-2">Design System</h1>
                <p className="text-gray-400">Atomic Design Library for Pádel Sport Club</p>
            </div>
            <button 
                onClick={onBack}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm font-medium transition-colors border border-white/10"
            >
                ← Back to App
            </button>
        </div>

        {/* ATOMS */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-[#00ffe6] flex items-center gap-2">
                <span className="bg-[#00ffe6]/10 p-1 rounded">01</span> Atoms
            </h2>
            <Separator className="bg-white/10" />

            {/* Presale Atoms */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">Presale Elements</h3>
                <div className="flex flex-wrap gap-8 items-end p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Ticker Badge</p>
                        <div className="flex gap-4">
                             <TickerBadge img={imgUsdt1} text="USDT / BNB" />
                             <TickerBadge img={imgHero1} text="PSC" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-widest mb-2">Countdown Digits</p>
                        <div className="flex gap-2">
                             <CountdownDigit value={29} label="D" />
                             <CountdownDigit value={12} label="H" />
                             <CountdownDigit value={5} label="M" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Colors */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">Colors</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    <ColorSwatch name="Brand Primary" hex="#00ffe6" className="bg-[#00ffe6] text-black" />
                    <ColorSwatch name="Background" hex="#000000" className="bg-black border border-white/10" />
                    <ColorSwatch name="Surface Dark" hex="#020705" className="bg-[#020705] border border-white/10" />
                    <ColorSwatch name="Text Secondary" hex="#99a1af" className="bg-[#99a1af] text-black" />
                    <ColorSwatch name="Success" hex="#10b981" className="bg-emerald-500 text-black" />
                    <ColorSwatch name="Error" hex="#ef4444" className="bg-red-500 text-white" />
                </div>
            </div>

            {/* Typography */}
            <div className="space-y-6">
                <h3 className="text-xl text-white/90">Typography</h3>
                
                {/* Font Family Info */}
                <div className="p-6 border border-[#00ffe6]/20 rounded-xl bg-[#00ffe6]/5">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="w-10 h-10 bg-[#00ffe6]/10 rounded-lg flex items-center justify-center text-[#00ffe6] shrink-0">
                            <span className="text-lg">Aa</span>
                        </div>
                        <div>
                            <p className="text-white mb-1">Neue Haas Display</p>
                            <p className="text-[#99a1af] text-sm">
                                Primary typeface for the entire site. Fallback stack: Neue Haas Grotesk Display Pro &rarr; Helvetica Neue &rarr; Helvetica &rarr; Arial &rarr; sans-serif
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4">
                        <div className="bg-black/30 p-3 rounded-lg text-center">
                            <p className="text-white text-sm mb-1" style={{ fontWeight: 400 }}>Regular</p>
                            <p className="text-[#99a1af] text-xs font-mono">400</p>
                        </div>
                        <div className="bg-black/30 p-3 rounded-lg text-center border border-[#00ffe6]/20">
                            <p className="text-white text-sm mb-1" style={{ fontWeight: 600 }}>Semi Bold</p>
                            <p className="text-[#00ffe6] text-xs font-mono">600 (headings)</p>
                        </div>
                        <div className="bg-black/30 p-3 rounded-lg text-center">
                            <p className="text-white text-sm mb-1" style={{ fontWeight: 700 }}>Bold</p>
                            <p className="text-[#99a1af] text-xs font-mono">700</p>
                        </div>
                    </div>
                </div>

                {/* Heading Styles */}
                <div className="space-y-4 p-6 border border-white/10 rounded-xl bg-white/5">
                    <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-[#00ffe6] uppercase tracking-widest">Global Heading Rules</p>
                        <div className="flex gap-2">
                            <span className="px-2 py-0.5 bg-[#00ffe6]/10 text-[#00ffe6] text-xs rounded-full border border-[#00ffe6]/20">font-weight: 600</span>
                            <span className="px-2 py-0.5 bg-[#00ffe6]/10 text-[#00ffe6] text-xs rounded-full border border-[#00ffe6]/20">letter-spacing: -3px</span>
                        </div>
                    </div>
                    <Separator className="bg-white/5" />
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Display / H1</p>
                        <h1 className="text-5xl md:text-6xl text-white">Redefiniendo el deporte</h1>
                        <p className="text-xs text-gray-600 font-mono">h1 &middot; Semi Bold 600 &middot; tracking: -3px</p>
                    </div>
                    <Separator className="bg-white/5" />
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Heading / H2</p>
                        <h2 className="text-4xl text-white">Tokenomics & Allocation</h2>
                        <p className="text-xs text-gray-600 font-mono">h2 &middot; Semi Bold 600 &middot; tracking: -3px</p>
                    </div>
                    <Separator className="bg-white/5" />
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Heading / H3</p>
                        <h3 className="text-2xl text-white">Membresía Gamificada</h3>
                        <p className="text-xs text-gray-600 font-mono">h3 &middot; Semi Bold 600 &middot; tracking: -3px</p>
                    </div>
                    <Separator className="bg-white/5" />
                    <div className="space-y-2">
                        <p className="text-xs text-gray-500 uppercase tracking-widest">Body Text</p>
                        <p className="text-[#99a1af] text-lg leading-relaxed max-w-2xl">
                           Una comunidad de pádel de nueva generación impulsada por blockchain. 
                           Hemos sustituido el concepto técnico de "staking" por un sistema de Membresía.
                        </p>
                        <p className="text-xs text-gray-600 font-mono">p &middot; Regular 400 &middot; tracking: normal</p>
                    </div>
                </div>

                {/* CSS Token Reference */}
                <div className="p-6 border border-white/10 rounded-xl bg-white/5">
                    <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">CSS / Tailwind Reference</p>
                    <div className="bg-black/50 rounded-lg p-4 font-mono text-sm space-y-1 overflow-x-auto">
                        <p className="text-gray-500">{'/* theme.css - Global heading styles */'}</p>
                        <p><span className="text-purple-400">h1, h2, h3</span> {'{'}</p>
                        <p className="pl-4"><span className="text-[#00ffe6]">font-weight</span>: <span className="text-orange-300">600</span>;</p>
                        <p className="pl-4"><span className="text-[#00ffe6]">letter-spacing</span>: <span className="text-orange-300">-3px</span>;</p>
                        <p>{'}'}</p>
                        <p className="mt-2 text-gray-500">{'/* Font stack */'}</p>
                        <p><span className="text-purple-400">--font-sans</span>: <span className="text-orange-300">"Neue Haas Grotesk Display Pro"</span>,</p>
                        <p className="pl-4"><span className="text-orange-300">"Neue Haas Display"</span>, <span className="text-orange-300">"Helvetica Neue"</span>,</p>
                        <p className="pl-4"><span className="text-orange-300">Helvetica</span>, <span className="text-orange-300">Arial</span>, <span className="text-orange-300">sans-serif</span>;</p>
                    </div>
                </div>
            </div>

            {/* Icons */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">Icons (Lucide React)</h3>
                <div className="flex flex-wrap gap-4">
                    <IconWrapper icon={Activity} name="Activity" />
                    <IconWrapper icon={Search} name="Search" />
                    <IconWrapper icon={User} name="User" />
                    <IconWrapper icon={CheckCircle2} name="CheckCircle2" />
                    <IconWrapper icon={Copy} name="Copy" />
                    <IconWrapper icon={AlertCircle} name="AlertCircle" />
                </div>
            </div>

            {/* Buttons & Badges */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white/90">Interactive Elements</h3>
                <div className="flex flex-wrap gap-4 items-center bg-white/5 p-6 rounded-xl border border-white/10">
                    <button className="bg-[#01ffe7] px-6 py-3 rounded-[14px] text-black font-bold hover:bg-[#00e6d0] transition-colors shadow-[0_0_20px_rgba(1,255,231,0.2)]">
                        Primary Action
                    </button>
                    
                    <button className="bg-white/10 px-6 py-3 rounded-[14px] text-white font-bold hover:bg-white/20 transition-colors border border-white/5 flex items-center gap-2">
                        Secondary Action
                    </button>

                    <button className="px-6 py-3 rounded-[14px] text-[#99a1af] font-medium hover:text-white transition-colors flex items-center gap-2">
                        Ghost Button <ArrowRight size={16} />
                    </button>

                    <div className="h-8 w-px bg-white/10 mx-2" />

                    <Badge className="bg-[#00ffe6]/10 text-[#00ffe6] border-[#00ffe6]/20 hover:bg-[#00ffe6]/20">
                        New Feature
                    </Badge>
                    
                    <Badge variant="outline" className="text-gray-400 border-gray-700">
                        Coming Soon
                    </Badge>
                </div>
            </div>
        </section>

        {/* MOLECULES */}
        <section className="space-y-8">
            <h2 className="text-2xl font-bold text-[#00ffe6] flex items-center gap-2">
                <span className="bg-[#00ffe6]/10 p-1 rounded">02</span> Molecules
            </h2>
            <Separator className="bg-white/10" />

            <div className="grid md:grid-cols-2 gap-8">
                 {/* Presale Components */}
                 <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white/90">Presale Controls</h3>
                    <GlassCard className="p-6 space-y-6 bg-black/50">
                        <div className="space-y-2">
                            <Label className="text-[#99a1af]">Input Field</Label>
                            <PresaleInput 
                                label="Pagas con" 
                                value="5.000,00" 
                                tickerImg={imgUsdt1} 
                                tickerText="USDT" 
                                placeholder="0.00"
                            />
                        </div>

                        <div className="space-y-2">
                             <Label className="text-[#99a1af]">Progress Bar (Soft Cap)</Label>
                             <PresaleProgress raised={600000} target={1200000} softCap={600000} />
                        </div>

                        <div className="space-y-2">
                             <Label className="text-[#99a1af]">Countdown Timer</Label>
                             <div className="bg-[#020705] p-4 rounded-xl flex justify-center">
                                <PresaleCountdown />
                             </div>
                        </div>
                    </GlassCard>
                </div>

                {/* Tab Group */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white/90">Tab Navigation</h3>
                    <GlassCard className="p-6">
                        <Tabs defaultValue="account" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 bg-black/40">
                                <TabsTrigger value="account">Account</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                            </TabsList>
                            <TabsContent value="account">
                                <p className="text-sm text-gray-400 mt-4">Make changes to your account here.</p>
                            </TabsContent>
                            <TabsContent value="password">
                                <p className="text-sm text-gray-400 mt-4">Change your password here.</p>
                            </TabsContent>
                        </Tabs>
                    </GlassCard>
                </div>
            </div>
        </section>

        {/* ORGANISMS */}
        <section className="space-y-8 pb-20">
            <h2 className="text-2xl font-bold text-[#00ffe6] flex items-center gap-2">
                <span className="bg-[#00ffe6]/10 p-1 rounded">03</span> Organisms
            </h2>
            <Separator className="bg-white/10" />

            <div className="grid md:grid-cols-2 gap-12">
                {/* Full Presale Widget */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white/90">Presale Widget</h3>
                    <div className="flex justify-center md:justify-start">
                        <PresaleWidget />
                    </div>
                </div>

                {/* Feature Card */}
                <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-white/90">Feature Card</h3>
                    <div className="max-w-md">
                        <GlassCard className="p-8 flex flex-col items-center text-center border-[#CD7F32]/20 hover:border-[#CD7F32]/40 transition-colors group">
                        <div className="w-[100px] h-[100px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <img src={levelBronceIcon} alt="Nivel Bronce" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(205,127,50,0.3)]" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">Bandeja</h3>
                        <p className="text-[#CD7F32] text-sm font-bold uppercase tracking-wider mb-4">+100 PSC</p>
                        <ul className="space-y-3 text-sm text-[#99a1af] w-full text-left bg-black/20 p-4 rounded-lg">
                            <li className="flex items-start gap-2">
                                <span className="text-[#CD7F32] mt-0.5"><Check size={14} /></span> Acceso básico
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#CD7F32] mt-0.5"><Check size={14} /></span> Descuentos en marcas
                            </li>
                        </ul>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

// Helper Components
const ColorSwatch = ({ name, hex, className }: { name: string, hex: string, className?: string }) => (
    <div className="flex flex-col gap-2">
        <div className={`w-full aspect-video rounded-lg shadow-lg ${className}`} />
        <div>
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-xs text-gray-500 font-mono">{hex}</p>
        </div>
    </div>
);

const IconWrapper = ({ icon: Icon, name }: { icon: any, name: string }) => (
    <div className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg border border-white/5 w-24 h-24 hover:bg-white/10 transition-colors">
        <Icon className="text-[#00ffe6] mb-2" />
        <span className="text-xs text-gray-400">{name}</span>
    </div>
);