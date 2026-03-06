'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function MoodboardPage() {
  const references = [
    {
      title: 'Sofisticação Financeira',
      description: 'Elegância dark, minimalismo premium, contraste dramático',
      keywords: ['Navy blue', 'Gold accents', 'Clean typography', 'Luxury feel']
    },
    {
      title: 'Tech Premium',
      description: 'Interfaces modernas, data visualization, dashboards sofisticados',
      keywords: ['Dark UI', 'Glassmorphism', 'Subtle animations', 'Grid systems']
    },
    {
      title: 'Real Estate Luxury',
      description: 'Fotografia arquitetônica, espaços premium, materiais nobres',
      keywords: ['Wide formats', 'Natural light', 'Textures', 'Perspective']
    },
    {
      title: 'Editorial Finance',
      description: 'Bloomberg, FT, WSJ — seriedade, dados, autoridade',
      keywords: ['Serif headlines', 'Data charts', 'Dense information', 'Professional']
    }
  ]

  const colorPalette = [
    { name: 'Navy Deep', hex: '#040812', usage: 'Fundo principal' },
    { name: 'Gold Premium', hex: '#DCA405', usage: 'CTAs e highlights' },
    { name: 'White Pure', hex: '#FFFFFF', usage: 'Textos principais' },
    { name: 'Gray Mist', hex: '#94A3B8', usage: 'Textos secundários' },
    { name: 'Navy Lighter', hex: '#0F172A', usage: 'Cards e elevação' }
  ]

  const inspirations = [
    {
      category: 'Brands',
      items: ['Stripe', 'Linear', 'Vercel', 'Goldman Sachs', 'BlackRock']
    },
    {
      category: 'Designers',
      items: ['Tobias van Schneider', 'Paco Coursey', 'Emil Kowalski']
    },
    {
      category: 'Patterns',
      items: ['Dot grids', 'Gradient overlays', 'Blur effects', 'Film grain']
    }
  ]

  return (
    <div className="min-h-screen bg-[#040812] flex">

      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>

        <div className="py-4">
          <Link href="/" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            FOUNDATIONS
          </Link>
          <Link href="/guidelines" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            GUIDELINES
          </Link>
          <Link href="/movimento" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            MOVIMENTO
          </Link>
          <Link href="/logo" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            LOGO
          </Link>
          <Link href="/icons" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            ICONS
          </Link>
          <Link href="/moodboard" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
            MOODBOARD
          </Link>
          <Link href="/brand-strategy" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            BRAND STRATEGY
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
            VERSION 2.0
          </p>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">

          {/* Header */}
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              BRAND IDENTITY
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              Moodboard
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Referências visuais, influências e inspirações que definem o território estético da Rentabiliza.
            </p>
          </div>

          {/* Section: Direções Visuais */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Direções Visuais</h2>

            <div className="grid grid-cols-2 gap-6">
              {references.map((ref, index) => (
                <div key={index} className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#DCA405]/50 hover:bg-[#DCA405]/5 transition-all">
                  <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-[#DCA405] transition-colors">
                    {ref.title}
                  </h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {ref.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {ref.keywords.map((keyword, kIndex) => (
                      <span
                        key={kIndex}
                        className="text-xs font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Paleta Visual */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Paleta Visual</h2>

            <div className="space-y-4">
              {colorPalette.map((color, index) => (
                <div key={index} className="flex items-center gap-6 bg-white/5 border border-white/10 rounded-xl p-6">
                  <div
                    className="w-24 h-24 rounded-lg border-2 border-white/20"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif text-white mb-1">{color.name}</h3>
                    <code className="text-[#DCA405] font-mono text-sm">{color.hex}</code>
                    <p className="text-white/60 text-sm mt-2">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Texturas e Efeitos */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Texturas & Efeitos</h2>

            <div className="grid grid-cols-3 gap-6">
              {/* Dot Grid */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#040812] h-48">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                  }}
                ></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Dot Grid</p>
                  <p className="text-white/40 text-xs">Backgrounds sutis</p>
                </div>
              </div>

              {/* Gradient Overlay */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-[#040812] h-48">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/20 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Gold Gradient</p>
                  <p className="text-white/40 text-xs">Hero sections</p>
                </div>
              </div>

              {/* Blur Glass */}
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 h-48">
                <div className="absolute inset-0 backdrop-blur-sm bg-white/5"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium">Glassmorphism</p>
                  <p className="text-white/40 text-xs">Cards elevados</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Typography Style */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Hierarquia Tipográfica</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-12 space-y-8">
              <div>
                <p className="text-xs font-mono text-white/40 mb-2">DISPLAY / HERO</p>
                <h1 className="text-6xl font-serif text-white tracking-tight">
                  Invista com Inteligência
                </h1>
              </div>

              <div>
                <p className="text-xs font-mono text-white/40 mb-2">HEADING 1</p>
                <h2 className="text-4xl font-serif text-white">
                  Oportunidades Premium em Leilões
                </h2>
              </div>

              <div>
                <p className="text-xs font-mono text-white/40 mb-2">HEADING 2</p>
                <h3 className="text-2xl font-sans text-white font-medium">
                  Análise Técnica Completa
                </h3>
              </div>

              <div>
                <p className="text-xs font-mono text-white/40 mb-2">BODY / PARAGRAPH</p>
                <p className="text-lg text-white/70 leading-relaxed">
                  Identificamos imóveis com até 40% de desconto, realizamos análise jurídica rigorosa
                  e garantimos segurança em todo processo de aquisição.
                </p>
              </div>

              <div>
                <p className="text-xs font-mono text-white/40 mb-2">CAPTION / METADATA</p>
                <p className="text-sm font-mono text-white/50 tracking-wider">
                  ÚLTIMA ATUALIZAÇÃO: 06 MAR 2026 • ROI MÉDIO: 34%
                </p>
              </div>
            </div>
          </section>

          {/* Section: Influências */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Influências</h2>

            <div className="grid grid-cols-3 gap-6">
              {inspirations.map((insp, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-8">
                  <h3 className="text-lg font-mono text-[#DCA405] tracking-wider mb-6">{insp.category}</h3>
                  <ul className="space-y-3">
                    {insp.items.map((item, iIndex) => (
                      <li key={iIndex} className="text-white/70 text-sm flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#DCA405] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Design Principles Recap */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Princípios Visuais Aplicados</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">Contraste Dramático</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  Fundos escuros (#040812) criam profundidade e permitem que elementos gold (#DCA405) e textos brancos
                  se destaquem com máximo impacto visual.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#040812] border border-white/20 rounded"></div>
                  <div className="text-white/40 text-2xl">+</div>
                  <div className="w-12 h-12 bg-[#DCA405] rounded"></div>
                  <div className="text-white/40 text-2xl">=</div>
                  <div className="text-white text-sm font-medium">Sofisticação Premium</div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">Minimalismo Funcional</h3>
                <p className="text-white/60 leading-relaxed mb-4">
                  Cada elemento tem propósito. Removemos o desnecessário para focar em clareza de informação
                  e facilitar decisões rápidas e confiantes.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Elementos decorativos</span>
                    <span className="text-red-400">Mínimos</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Informação crítica</span>
                    <span className="text-emerald-400">Máxima</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">White space</span>
                    <span className="text-[#DCA405]">Generoso</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
