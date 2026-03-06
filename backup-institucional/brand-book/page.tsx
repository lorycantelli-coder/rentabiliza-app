'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function BrandBookPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">

      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h1 className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </h1>
        </div>

        {/* Menu */}
        <div className="py-4">
          <a href="#brand-core" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors cursor-pointer">
            FOUNDATIONS
          </a>

          <a href="#typography" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors cursor-pointer">
            TYPOGRAPHY
          </a>

          <a href="#color" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors cursor-pointer">
            COLOR
          </a>

          <a href="#voice" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors cursor-pointer">
            BRAND VOICE
          </a>

          <a href="#positioning" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors cursor-pointer">
            POSITIONING
          </a>

          <a href="#metrics" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors cursor-pointer">
            PROOF POINTS
          </a>
        </div>

        {/* Version */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
            VERSION 2.0
          </p>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="ml-64 flex-1 p-6 lg:p-8 max-w-[1600px]">

        {/* Hero */}
        <div className="mb-16 relative">
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#DCA405] opacity-10 blur-[120px] rounded-full" />
          <Badge className="bg-[#DCA405] text-[#040812] border-0 mb-4 font-mono text-[10px] tracking-[0.3em] font-bold relative z-10">
            BRANDBOOK.V2
          </Badge>
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white mb-3 leading-[0.85] tracking-[-0.02em] relative z-10" style={{ fontFamily: 'Playfair Display' }}>
            RENTABILIZA
          </h1>
          <p className="text-xl text-white/40 max-w-2xl font-mono tracking-tight relative z-10">
            IA Preditiva • Investimentos Inteligentes • Resultados Auditados
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 auto-rows-auto">

          {/* 01 - Brand Core */}
          <section
            id="brand-core"
            className="lg:col-span-12 bg-black rounded-lg p-8 lg:p-12 border border-white/10 relative overflow-hidden group hover:border-[#DCA405]/30 transition-all"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DCA405]/5 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">01</p>
              <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-[-0.02em]">
                BRAND ESSENCE
              </h2>
              <p className="text-lg text-white/50 mb-12 max-w-3xl font-light">
                Sofisticação que Gera Resultados
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[#DCA405]/20 transition-all">
                  <div className="w-12 h-12 border-2 border-[#DCA405]/30 rounded mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Sophistication</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    Design elegante e profissional que transmite confiança através de precisão, não decoração.
                  </p>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[#DCA405]/20 transition-all">
                  <div className="w-12 h-12 border-2 border-[#DCA405]/30 rounded mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Clarity</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    Informações complexas apresentadas com simplicidade cirúrgica. Zero jargão desnecessário.
                  </p>
                </div>

                <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[#DCA405]/20 transition-all">
                  <div className="w-12 h-12 border-2 border-[#DCA405]/30 rounded mb-6" />
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Prosperity</h3>
                  <p className="text-sm text-white/40 leading-relaxed font-light">
                    Gold como evidência de resultados, não luxo. <span className="font-mono text-[#DCA405]">34%</span> acima do mercado.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 02 - Typography */}
          <section
            id="typography"
            className="lg:col-span-7 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
          >
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">02</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">TYPOGRAPHY</h2>

            <div className="space-y-8">
              <div className="border-b border-white/5 pb-6">
                <p className="font-mono text-[10px] text-white/30 mb-3 tracking-[0.2em]">DISPLAY</p>
                <h3 className="text-5xl font-bold text-white mb-2 tracking-tight" style={{ fontFamily: 'Playfair Display' }}>
                  Playfair Display
                </h3>
                <p className="text-xs text-white/30 font-mono mt-2">Serif • 400-700 • Headlines</p>
              </div>

              <div className="border-b border-white/5 pb-6">
                <p className="font-mono text-[10px] text-white/30 mb-3 tracking-[0.2em]">INTERFACE</p>
                <h3 className="text-3xl font-semibold text-white mb-2">
                  Inter
                </h3>
                <p className="text-xs text-white/30 font-mono mt-2">Sans • 300-700 • UI/Body</p>
              </div>

              <div>
                <p className="font-mono text-[10px] text-white/30 mb-3 tracking-[0.2em]">MONOSPACE</p>
                <h3 className="text-2xl font-mono font-medium text-white mb-2">
                  Roboto Mono
                </h3>
                <p className="text-xs text-white/30 font-mono mt-2">Mono • 400-700 • Data/Metrics</p>
              </div>
            </div>
          </section>

          {/* 03 - Color System */}
          <section
            id="color"
            className="lg:col-span-5 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
          >
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">03</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">COLOR</h2>

            <div className="space-y-3">
              <div className="bg-[#DCA405] rounded-lg p-6 border border-[#DCA405]">
                <p className="text-[#040812] font-mono text-[10px] mb-2 tracking-[0.2em]">PRIMARY</p>
                <h3 className="text-[#040812] text-xl font-bold mb-1">Prosperity Gold</h3>
                <p className="text-[#040812]/50 text-xs font-mono">#DCA405 • RGB(220,164,5)</p>
              </div>

              <div className="bg-[#040812] rounded-lg p-6 border border-white/10">
                <p className="text-[#DCA405] font-mono text-[10px] mb-2 tracking-[0.2em]">SECONDARY</p>
                <h3 className="text-white text-xl font-bold mb-1">Deep Navy</h3>
                <p className="text-white/30 text-xs font-mono">#040812 • RGB(4,8,18)</p>
              </div>

              <div className="bg-white rounded-lg p-6 border border-white">
                <p className="text-[#DCA405] font-mono text-[10px] mb-2 tracking-[0.2em]">NEUTRAL</p>
                <h3 className="text-[#040812] text-xl font-bold mb-1">Pure White</h3>
                <p className="text-[#040812]/30 text-xs font-mono">#FFFFFF • RGB(255,255,255)</p>
              </div>
            </div>
          </section>

          {/* 04 - Brand Voice */}
          <section
            id="voice"
            className="lg:col-span-8 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
          >
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">04</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">BRAND VOICE</h2>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5">
                <p className="font-mono text-[10px] text-[#DCA405] mb-2 tracking-[0.2em]">DIRECT</p>
                <div className="text-6xl font-bold text-white mb-2">9<span className="text-2xl text-white/30">/10</span></div>
                <p className="text-xs text-white/40">Frases curtas. Zero enrolação.</p>
              </div>

              <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5">
                <p className="font-mono text-[10px] text-[#DCA405] mb-2 tracking-[0.2em]">TECHNICAL</p>
                <div className="text-6xl font-bold text-white mb-2">8<span className="text-2xl text-white/30">/10</span></div>
                <p className="text-xs text-white/40">Dados específicos, não generalização.</p>
              </div>

              <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5">
                <p className="font-mono text-[10px] text-[#DCA405] mb-2 tracking-[0.2em]">CONFIDENT</p>
                <div className="text-6xl font-bold text-white mb-2">9<span className="text-2xl text-white/30">/10</span></div>
                <p className="text-xs text-white/40">Afirmações, não condicionais.</p>
              </div>

              <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5">
                <p className="font-mono text-[10px] text-[#DCA405] mb-2 tracking-[0.2em]">HUMAN</p>
                <div className="text-6xl font-bold text-white mb-2">7<span className="text-2xl text-white/30">/10</span></div>
                <p className="text-xs text-white/40">Conversacional, não acadêmico.</p>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6">
              <p className="font-mono text-[10px] text-white/30 mb-4 tracking-[0.2em]">SIGNATURE</p>
              <blockquote className="text-2xl font-light text-white/80 italic" style={{ fontFamily: 'Playfair Display' }}>
                "A IA trabalha. Os resultados são seus."
              </blockquote>
            </div>
          </section>

          {/* 05 - Positioning */}
          <section
            id="positioning"
            className="lg:col-span-4 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-lg p-8 border border-[#DCA405] text-[#040812]"
          >
            <p className="font-mono text-[10px] mb-3 tracking-[0.25em] opacity-60">05</p>
            <h2 className="text-4xl font-black mb-8 tracking-[-0.02em]">POSITIONING</h2>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] mb-2 tracking-[0.2em] opacity-60">CATEGORY</p>
                <p className="text-lg font-bold">Plataforma de Investimentos com IA Preditiva</p>
              </div>

              <div>
                <p className="font-mono text-[10px] mb-2 tracking-[0.2em] opacity-60">OWNED WORD</p>
                <p className="text-3xl font-black tracking-tight">PREDITIVO</p>
              </div>

              <div>
                <p className="font-mono text-[10px] mb-2 tracking-[0.2em] opacity-60">TARGET</p>
                <p className="text-sm font-medium">Executivos 30-55 anos • R$ 100K-1M investível</p>
              </div>

              <div className="border-t border-[#040812]/10 pt-6">
                <p className="text-xs opacity-60">Antecipa oportunidades <span className="font-mono font-bold">48h antes</span> do mercado reagir</p>
              </div>
            </div>
          </section>

          {/* 06 - Performance Metrics */}
          <section
            id="metrics"
            className="lg:col-span-12 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
          >
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">06</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">PROOF POINTS</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-2">34%</div>
                <p className="text-xs text-white/40 font-mono">Acima do mercado</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-2">15.2K</div>
                <p className="text-xs text-white/40 font-mono">Investidores ativos</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-2">48h</div>
                <p className="text-xs text-white/40 font-mono">Antecipação IA</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-2">3%</div>
                <p className="text-xs text-white/40 font-mono">Max loss por ativo</p>
              </div>

              <div className="text-center">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-2">R$497</div>
                <p className="text-xs text-white/40 font-mono">Flat fee mensal</p>
              </div>
            </div>
          </section>

          {/* 07 - Logo */}
          <section
            id="logo"
            className="lg:col-span-6 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-lg p-8 border border-[#DCA405] text-[#040812]"
          >
            <p className="font-mono text-[10px] mb-3 tracking-[0.25em] opacity-60">07</p>
            <h2 className="text-4xl font-black mb-8 tracking-[-0.02em]">LOGO</h2>

            <div className="bg-[#040812] rounded-lg p-12 mb-6 flex items-center justify-center min-h-[200px]">
              <div className="text-center">
                <div className="text-8xl font-black text-[#DCA405] mb-4" style={{ fontFamily: 'Playfair Display' }}>R</div>
                <p className="text-xl font-black text-white tracking-[0.3em]">RENTABILIZA</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-black/10 rounded-lg p-4">
                <p className="font-mono text-[10px] mb-1 opacity-60 tracking-wide">MIN WIDTH</p>
                <p className="text-lg font-bold">180px</p>
              </div>
              <div className="bg-black/10 rounded-lg p-4">
                <p className="font-mono text-[10px] mb-1 opacity-60 tracking-wide">CLEAR SPACE</p>
                <p className="text-lg font-bold">1x 'R'</p>
              </div>
              <div className="bg-black/10 rounded-lg p-4">
                <p className="font-mono text-[10px] mb-1 opacity-60 tracking-wide">FORMATS</p>
                <p className="text-sm font-bold">SVG/PNG</p>
              </div>
            </div>
          </section>

          {/* 08 - Components */}
          <section
            id="components"
            className="lg:col-span-6 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
          >
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">08</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">COMPONENTS</h2>

            <div className="space-y-6">
              <div>
                <p className="font-mono text-[10px] text-white/30 mb-3 tracking-[0.2em]">BUTTONS</p>
                <div className="flex gap-3">
                  <button className="bg-[#DCA405] text-[#040812] px-6 py-3 rounded-xl font-bold hover:bg-[#F5C542] transition-colors">
                    Primary
                  </button>
                  <button className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">
                    Secondary
                  </button>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-white/30 mb-3 tracking-[0.2em]">CARDS</p>
                <div className="bg-white/[0.02] border border-white/10 rounded-lg p-6 hover:border-[#DCA405]/20 transition-all">
                  <p className="text-sm text-white/60">Card component with hover effect</p>
                </div>
              </div>

              <div>
                <p className="font-mono text-[10px] text-white/30 mb-3 tracking-[0.2em]">INPUTS</p>
                <input
                  type="text"
                  placeholder="Type something..."
                  className="w-full bg-[#0A1326] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-[#DCA405] focus:outline-none transition-colors"
                />
              </div>
            </div>
          </section>

          {/* 09 - Spacing Grid */}
          <section
            id="spacing"
            className="lg:col-span-12 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
          >
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">09</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">SPACING & GRID</h2>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="h-2 w-full bg-[#DCA405] mb-3 rounded"></div>
                <p className="font-mono text-sm text-[#DCA405] mb-1">8px</p>
                <p className="text-xs text-white/40">Base unit</p>
              </div>

              <div className="text-center">
                <div className="h-4 w-full bg-[#DCA405] mb-3 rounded"></div>
                <p className="font-mono text-sm text-[#DCA405] mb-1">16px</p>
                <p className="text-xs text-white/40">Default</p>
              </div>

              <div className="text-center">
                <div className="h-6 w-full bg-[#DCA405] mb-3 rounded"></div>
                <p className="font-mono text-sm text-[#DCA405] mb-1">24px</p>
                <p className="text-xs text-white/40">Section</p>
              </div>

              <div className="text-center">
                <div className="h-8 w-full bg-[#DCA405] mb-3 rounded"></div>
                <p className="font-mono text-sm text-[#DCA405] mb-1">32px</p>
                <p className="text-xs text-white/40">Large gap</p>
              </div>

              <div className="text-center">
                <div className="h-12 w-full bg-[#DCA405] mb-3 rounded"></div>
                <p className="font-mono text-sm text-[#DCA405] mb-1">48px</p>
                <p className="text-xs text-white/40">Major</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-white/5">
              <p className="font-mono text-[10px] text-white/30 mb-4 tracking-[0.2em]">GRID SYSTEM</p>
              <div className="grid grid-cols-12 gap-3">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="h-16 bg-[#DCA405]/20 border border-[#DCA405]/30 rounded flex items-center justify-center">
                    <span className="text-xs font-mono text-[#DCA405]">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-xs text-white/20 font-mono tracking-wide">
            RENTABILIZA BRAND BOOK v2.0 • 2026
          </p>
        </div>

      </div>
    </div>
  )
}
