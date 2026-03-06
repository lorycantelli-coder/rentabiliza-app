'use client'

import { Badge } from '@/components/ui/badge'

export default function GuidelinesPage() {
  return (
    <div className="p-6 lg:p-8 max-w-[1600px] mx-auto">
      {/* Hero Minimalista */}
      <div className="mb-16 relative">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-[#DCA405] opacity-10 blur-[120px] rounded-full" />
        <Badge className="bg-[#DCA405] text-[#040812] border-0 mb-4 font-mono text-[10px] tracking-[0.3em] font-bold">
          GUIDELINES.V2
        </Badge>
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white mb-3 leading-[0.85] tracking-[-0.02em]">
          RENTABILIZA
        </h1>
        <p className="text-xl text-white/40 max-w-2xl font-mono tracking-tight">
          Identity system for intelligent capital allocation
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 auto-rows-auto">

        {/* 01 - Identity System */}
        <section
          id="section-01"
          className="lg:col-span-12 bg-black rounded-lg p-8 lg:p-12 border border-white/10 relative overflow-hidden group hover:border-[#DCA405]/30 transition-all"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#DCA405]/5 blur-[150px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">01</p>
            <h2 className="text-5xl lg:text-6xl font-black text-white mb-4 tracking-[-0.02em]">
              IDENTITY SYSTEM
            </h2>
            <p className="text-lg text-white/50 mb-12 max-w-3xl font-light">
              Three foundational pillars defining every visual decision
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[#DCA405]/20 transition-all">
                <div className="w-12 h-12 border-2 border-[#DCA405]/30 rounded mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Sophistication</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  Technical elegance. Design that commands attention through precision, not decoration.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[#DCA405]/20 transition-all">
                <div className="w-12 h-12 border-2 border-[#DCA405]/30 rounded mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Clarity</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  Complexity distilled. Dense information presented with surgical precision.
                </p>
              </div>

              <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/5 hover:border-[#DCA405]/20 transition-all">
                <div className="w-12 h-12 border-2 border-[#DCA405]/30 rounded mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Prosperity</h3>
                <p className="text-sm text-white/40 leading-relaxed font-light">
                  Gold as evidence, not luxury. Visual language reinforcing measurable outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 - Typography */}
        <section
          id="section-02"
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
              <p className="text-xs text-white/30 font-mono mt-2">Mono • 400-500 • Data/Code</p>
            </div>
          </div>
        </section>

        {/* 03 - Color Palette */}
        <section
          id="section-03"
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

        {/* 04 - Logo */}
        <section
          id="section-04"
          className="lg:col-span-6 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-lg p-8 border border-[#DCA405] text-[#040812]"
        >
          <p className="font-mono text-[10px] mb-3 tracking-[0.25em] opacity-60">04</p>
          <h2 className="text-4xl font-black mb-8 tracking-[-0.02em]">LOGO</h2>

          <div className="bg-[#040812] rounded-lg p-12 mb-6 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl font-black text-[#DCA405] mb-4" style={{ fontFamily: 'Playfair Display' }}>R</div>
              <p className="text-xl font-black text-white tracking-[0.3em]">RENTABILIZA</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-black/10 rounded-lg p-4">
              <p className="font-mono text-[10px] mb-1 opacity-60 tracking-wide">MIN WIDTH</p>
              <p className="text-lg font-bold">120px</p>
            </div>
            <div className="bg-black/10 rounded-lg p-4">
              <p className="font-mono text-[10px] mb-1 opacity-60 tracking-wide">SAFE SPACE</p>
              <p className="text-lg font-bold">1× height</p>
            </div>
          </div>
        </section>

        {/* 05 - Manifesto */}
        <section
          id="section-05"
          className="lg:col-span-6 bg-black rounded-lg p-8 border border-white/10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/5 to-transparent opacity-50" />
          <div className="relative z-10">
            <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">05</p>
            <h2 className="text-4xl font-black text-white mb-8 tracking-[-0.02em]">MANIFESTO</h2>

            <div className="space-y-6">
              <p className="text-2xl font-black text-[#DCA405] leading-tight tracking-tight">
                COMPLEXITY IS NOT<br/>
                A PREREQUISITE FOR RESULTS
              </p>

              <p className="text-base text-white/70 leading-relaxed font-light">
                Technology eliminates barriers.<br/>
                Data reveals truth.<br/>
                Systems create wealth.
              </p>

              <p className="text-sm text-white/40 font-mono border-l-2 border-[#DCA405] pl-4">
                The platform works.<br/>
                The outcomes are yours.
              </p>
            </div>
          </div>
        </section>

        {/* 06 - Symbols */}
        <section
          id="section-06"
          className="lg:col-span-4 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">06</p>
          <h2 className="text-3xl font-black text-white mb-6 tracking-[-0.02em]">SYMBOLS</h2>

          <div className="space-y-6">
            <div>
              <div className="w-16 h-16 border-2 border-[#DCA405]/30 rounded flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#DCA405" strokeWidth="2" strokeLinecap="square"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Growth Vector</h3>
              <p className="text-sm text-white/40 font-light">Sustained upward trajectory</p>
            </div>

            <div>
              <div className="w-16 h-16 border-2 border-[#DCA405]/30 rounded flex items-center justify-center mb-3">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="4" width="16" height="16" stroke="#DCA405" strokeWidth="2"/>
                  <path d="M4 12H20M12 4V20" stroke="#DCA405" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Protection Grid</h3>
              <p className="text-sm text-white/40 font-light">3% max loss per asset</p>
            </div>
          </div>
        </section>

        {/* 07 - Naming */}
        <section
          id="section-07"
          className="lg:col-span-4 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">07</p>
          <h2 className="text-3xl font-black text-white mb-6 tracking-[-0.02em]">NAMING</h2>

          <div className="space-y-3">
            <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
              <p className="text-2xl font-black text-[#DCA405] mb-1 tracking-tight">RENT</p>
              <p className="text-xs text-white/40 font-mono">Generate return</p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
              <p className="text-2xl font-black text-[#DCA405] mb-1 tracking-tight">ABIL</p>
              <p className="text-xs text-white/40 font-mono">Capability</p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-4 border border-white/5">
              <p className="text-2xl font-black text-[#DCA405] mb-1 tracking-tight">IZA</p>
              <p className="text-xs text-white/40 font-mono">Action • Transform</p>
            </div>
          </div>
        </section>

        {/* 08 - Positioning */}
        <section
          id="section-08"
          className="lg:col-span-4 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">08</p>
          <h2 className="text-3xl font-black text-white mb-6 tracking-[-0.02em]">POSITIONING</h2>

          <div className="space-y-3">
            <div className="bg-red-950/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-[10px] text-red-400 font-mono mb-2 tracking-wide">AGAINST</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">Complexity • Volatility • Empty promises</p>
            </div>

            <div className="bg-green-950/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-[10px] text-green-400 font-mono mb-2 tracking-wide">FOR</p>
              <p className="text-sm text-white/70 font-light leading-relaxed">Clarity • Results • Technology</p>
            </div>
          </div>
        </section>

        {/* 09 - Archetypes */}
        <section
          id="section-09"
          className="lg:col-span-12 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">09</p>
          <h2 className="text-5xl font-black text-white mb-8 tracking-[-0.02em]">ARCHETYPES</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-[#DCA405]/30">
              <p className="font-mono text-[10px] text-[#DCA405] mb-2 tracking-wide">PRIMARY • 60%</p>
              <h3 className="text-2xl font-black text-white mb-4">The Sage</h3>
              <p className="text-sm text-white/60 mb-4 font-light">
                Knowledge transforms reality. Data reveals invisible patterns.
              </p>
              <div className="bg-[#DCA405]/10 rounded-lg p-3">
                <p className="text-xs text-[#DCA405] font-mono">Wisdom • Precision • Insight</p>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="font-mono text-[10px] text-white/40 mb-2 tracking-wide">SECONDARY • 25%</p>
              <h3 className="text-2xl font-black text-white mb-4">The Ruler</h3>
              <p className="text-sm text-white/60 mb-4 font-light">
                Control generates prosperity. Systems create sustainable wealth.
              </p>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-white/40 font-mono">Control • Stability • Order</p>
              </div>
            </div>

            <div className="bg-white/[0.02] backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <p className="font-mono text-[10px] text-white/40 mb-2 tracking-wide">TERTIARY • 15%</p>
              <h3 className="text-2xl font-black text-white mb-4">The Creator</h3>
              <p className="text-sm text-white/60 mb-4 font-light">
                Innovation breaks barriers. Technology liberates.
              </p>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="text-xs text-white/40 font-mono">Innovation • Simplicity • Vision</p>
              </div>
            </div>
          </div>
        </section>

        {/* 10 - Evidence */}
        <section
          id="section-10"
          className="lg:col-span-6 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-lg p-8 border border-[#DCA405] text-[#040812]"
        >
          <p className="font-mono text-[10px] mb-3 tracking-[0.25em] opacity-60">10</p>
          <h2 className="text-4xl font-black mb-8 tracking-[-0.02em]">EVIDENCE</h2>

          <div className="space-y-4">
            <div className="bg-black/10 rounded-lg p-6">
              <p className="text-7xl font-black mb-2 tracking-tighter">34%</p>
              <p className="text-lg font-bold mb-1">Above market average</p>
              <p className="text-sm opacity-60 font-mono">12 months • Audited</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-black/10 rounded-lg p-4">
                <p className="text-4xl font-black mb-1">15.2K</p>
                <p className="text-xs font-mono opacity-60">Active investors</p>
              </div>
              <div className="bg-black/10 rounded-lg p-4">
                <p className="text-4xl font-black mb-1">48h</p>
                <p className="text-xs font-mono opacity-60">AI anticipation</p>
              </div>
            </div>
          </div>
        </section>

        {/* 11 - Narrative */}
        <section
          id="section-11"
          className="lg:col-span-6 bg-black rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">11</p>
          <h2 className="text-4xl font-black text-white mb-6 tracking-[-0.02em]">NARRATIVE</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 border-l-2 border-[#DCA405]/30 pl-4">
              <div className="w-8 h-8 border border-[#DCA405]/30 rounded flex-shrink-0 flex items-center justify-center">
                <p className="text-xs font-mono text-[#DCA405]">01</p>
              </div>
              <div>
                <p className="text-sm font-mono text-[#DCA405] mb-1">AWARENESS</p>
                <p className="text-sm text-white/60 font-light">Inflation erodes idle capital</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-2 border-[#DCA405]/30 pl-4">
              <div className="w-8 h-8 border border-[#DCA405]/30 rounded flex-shrink-0 flex items-center justify-center">
                <p className="text-xs font-mono text-[#DCA405]">02</p>
              </div>
              <div>
                <p className="text-sm font-mono text-[#DCA405] mb-1">DISCOVERY</p>
                <p className="text-sm text-white/60 font-light">Technology simplifies complexity</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-2 border-[#DCA405]/30 pl-4">
              <div className="w-8 h-8 border border-[#DCA405]/30 rounded flex-shrink-0 flex items-center justify-center">
                <p className="text-xs font-mono text-[#DCA405]">03</p>
              </div>
              <div>
                <p className="text-sm font-mono text-[#DCA405] mb-1">TRANSFORMATION</p>
                <p className="text-sm text-white/60 font-light">AI works continuously</p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-l-2 border-[#DCA405] pl-4">
              <div className="w-8 h-8 bg-[#DCA405] rounded flex-shrink-0 flex items-center justify-center">
                <p className="text-xs font-mono text-[#040812] font-bold">04</p>
              </div>
              <div>
                <p className="text-sm font-mono text-[#DCA405] mb-1">OUTCOME</p>
                <p className="text-sm text-white/60 font-light">Consistent capital growth</p>
              </div>
            </div>
          </div>
        </section>

        {/* 12 - Voices */}
        <section
          id="section-12"
          className="lg:col-span-8 bg-black rounded-lg p-8 border border-white/10"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">12</p>
          <h2 className="text-4xl font-black text-white mb-6 tracking-[-0.02em]">VOICES</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5 hover:border-[#DCA405]/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#DCA405]/20 border border-[#DCA405]/30 rounded-full flex items-center justify-center text-[#DCA405] font-mono text-xs font-bold">RC</div>
                <div>
                  <p className="text-white font-bold text-sm">Ricardo Costa</p>
                  <p className="text-white/30 text-xs font-mono">CEO, SaaS</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-3 font-light italic">
                "41% returns while scaling my company."
              </p>
              <div className="bg-[#DCA405]/10 border border-[#DCA405]/20 rounded px-2 py-1 inline-block">
                <p className="text-[#DCA405] text-xs font-mono font-bold">+41%</p>
              </div>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5 hover:border-[#DCA405]/20 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#DCA405]/20 border border-[#DCA405]/30 rounded-full flex items-center justify-center text-[#DCA405] font-mono text-xs font-bold">MA</div>
                <div>
                  <p className="text-white font-bold text-sm">Mariana Alves</p>
                  <p className="text-white/30 text-xs font-mono">Dir. Marketing</p>
                </div>
              </div>
              <p className="text-white/60 text-sm mb-3 font-light italic">
                "100% diversified portfolio automatically."
              </p>
              <div className="bg-[#DCA405]/10 border border-[#DCA405]/20 rounded px-2 py-1 inline-block">
                <p className="text-[#DCA405] text-xs font-mono font-bold">DIVERSIFIED</p>
              </div>
            </div>
          </div>
        </section>

        {/* 13 - Personality */}
        <section
          id="section-13"
          className="lg:col-span-4 bg-black rounded-lg p-8 border border-white/10"
        >
          <p className="font-mono text-[10px] text-[#DCA405] mb-3 tracking-[0.25em]">13</p>
          <h2 className="text-3xl font-black text-white mb-6 tracking-[-0.02em]">VOICE</h2>

          <div className="space-y-3">
            <div className="bg-green-950/10 border border-green-500/20 rounded-lg p-4">
              <p className="text-[10px] text-green-400 font-mono mb-2 tracking-wide">APPROVED</p>
              <div className="space-y-1 text-xs text-white/60 font-mono">
                <p>• Rentabilizar</p>
                <p>• Results</p>
                <p>• Data</p>
                <p>• System</p>
              </div>
            </div>

            <div className="bg-red-950/10 border border-red-500/20 rounded-lg p-4">
              <p className="text-[10px] text-red-400 font-mono mb-2 tracking-wide">BANNED</p>
              <div className="space-y-1 text-xs text-white/60 font-mono">
                <p>• Revolutionary</p>
                <p>• Magic</p>
                <p>• Hack</p>
                <p>• Secret</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <div className="mt-16 text-center">
        <div className="inline-block bg-black/50 rounded-lg px-6 py-4 border border-white/5">
          <p className="text-white/20 text-[10px] font-mono tracking-[0.2em]">RENTABILIZA.V2.2026</p>
        </div>
      </div>
    </div>
  )
}
