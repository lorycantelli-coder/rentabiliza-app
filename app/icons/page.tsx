'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function IconsPage() {
  const iconSizes = [
    { size: '16px', usage: 'Inline text, dense UI' },
    { size: '24px', usage: 'Standard buttons, cards' },
    { size: '32px', usage: 'Feature highlights, headers' },
    { size: '48px', usage: 'Hero sections, empty states' }
  ]

  const iconCategories = [
    {
      name: 'Financeiro',
      icons: [
        { name: 'trending-up', desc: 'Crescimento' },
        { name: 'dollar-sign', desc: 'Monetário' },
        { name: 'pie-chart', desc: 'Alocação' },
        { name: 'bar-chart', desc: 'Performance' }
      ]
    },
    {
      name: 'Imóveis',
      icons: [
        { name: 'home', desc: 'Propriedade' },
        { name: 'building', desc: 'Comercial' },
        { name: 'map-pin', desc: 'Localização' },
        { name: 'key', desc: 'Acesso' }
      ]
    },
    {
      name: 'Ações',
      icons: [
        { name: 'search', desc: 'Buscar' },
        { name: 'filter', desc: 'Filtrar' },
        { name: 'download', desc: 'Baixar' },
        { name: 'share', desc: 'Compartilhar' }
      ]
    },
    {
      name: 'Status',
      icons: [
        { name: 'check-circle', desc: 'Sucesso' },
        { name: 'alert-circle', desc: 'Alerta' },
        { name: 'x-circle', desc: 'Erro' },
        { name: 'info', desc: 'Informação' }
      ]
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
          <Link href="/icons" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
            ICONS
          </Link>
          <Link href="/moodboard" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
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
              Sistema de Ícones
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Biblioteca de ícones consistente, escalável e otimizada para comunicação visual clara.
            </p>
          </div>

          {/* Section: Princípios de Design */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Princípios de Design</h2>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-white mb-2">Consistência</h3>
                <p className="text-white/60 text-sm">
                  Todos ícones seguem mesmo grid (24x24px base), stroke weight (2px) e estilo (outline)
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-white mb-2">Clareza</h3>
                <p className="text-white/60 text-sm">
                  Formas simples e reconhecíveis que funcionam em múltiplos tamanhos (16-48px)
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-serif text-white mb-2">Performance</h3>
                <p className="text-white/60 text-sm">
                  SVG otimizado, viewBox correto, paths simplificados para rendering rápido
                </p>
              </div>
            </div>
          </section>

          {/* Section: Grid System */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Sistema de Grid</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-12">
              <div className="grid grid-cols-4 gap-8">
                {iconSizes.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/5 border border-white/20 rounded-lg p-8 mb-4 flex items-center justify-center" style={{ height: '120px' }}>
                      <svg
                        className="text-[#DCA405]"
                        style={{ width: item.size, height: item.size }}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-white font-mono text-sm mb-1">{item.size}</p>
                    <p className="text-white/40 text-xs">{item.usage}</p>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-white/40 font-mono mb-1">BASE GRID</p>
                  <p className="text-white">24x24px viewBox</p>
                </div>
                <div>
                  <p className="text-white/40 font-mono mb-1">STROKE WEIGHT</p>
                  <p className="text-white">2px (standard)</p>
                </div>
                <div>
                  <p className="text-white/40 font-mono mb-1">CAP STYLE</p>
                  <p className="text-white">Round (strokeLinecap)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Biblioteca de Ícones */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Biblioteca de Ícones</h2>

            <div className="space-y-8">
              {iconCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h3 className="text-xl font-serif text-[#DCA405] mb-6">{category.name}</h3>
                  <div className="grid grid-cols-4 gap-4">
                    {category.icons.map((icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-[#DCA405]/50 hover:bg-[#DCA405]/5 transition-all cursor-pointer group"
                      >
                        <div className="flex flex-col items-center">
                          <svg className="w-8 h-8 text-white group-hover:text-[#DCA405] transition-colors mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                            {icon.name === 'trending-up' && <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />}
                            {icon.name === 'dollar-sign' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            {icon.name === 'pie-chart' && <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />}
                            {icon.name === 'bar-chart' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                            {icon.name === 'home' && <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                            {icon.name === 'building' && <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />}
                            {icon.name === 'map-pin' && <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />}
                            {icon.name === 'key' && <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />}
                            {icon.name === 'search' && <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />}
                            {icon.name === 'filter' && <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />}
                            {icon.name === 'download' && <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />}
                            {icon.name === 'share' && <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />}
                            {icon.name === 'check-circle' && <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            {icon.name === 'alert-circle' && <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            {icon.name === 'x-circle' && <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />}
                            {icon.name === 'info' && <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                          </svg>
                          <p className="text-white text-sm font-medium mb-1">{icon.name}</p>
                          <p className="text-white/40 text-xs">{icon.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Estados de Cor */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Estados de Cor</h2>

            <div className="grid grid-cols-5 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <svg className="w-8 h-8 text-white mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="text-white text-sm mb-1">Default</p>
                <code className="text-xs text-white/40">#FFFFFF</code>
              </div>

              <div className="bg-[#DCA405]/10 border border-[#DCA405]/30 rounded-lg p-6 text-center">
                <svg className="w-8 h-8 text-[#DCA405] mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="text-white text-sm mb-1">Primary</p>
                <code className="text-xs text-[#DCA405]">#DCA405</code>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-6 text-center">
                <svg className="w-8 h-8 text-emerald-400 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white text-sm mb-1">Success</p>
                <code className="text-xs text-emerald-400">#34D399</code>
              </div>

              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6 text-center">
                <svg className="w-8 h-8 text-red-400 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-white text-sm mb-1">Error</p>
                <code className="text-xs text-red-400">#F87171</code>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <svg className="w-8 h-8 text-white/20 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                <p className="text-white/40 text-sm mb-1">Disabled</p>
                <code className="text-xs text-white/20">opacity: 0.2</code>
              </div>
            </div>
          </section>

          {/* Section: Código de Uso */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Implementação</h2>

            <div className="bg-[#0a0f1a] border border-white/10 rounded-xl p-6">
              <p className="text-white/40 text-xs font-mono mb-4">EXEMPLO SVG (React/JSX)</p>
              <pre className="text-[#DCA405] font-mono text-sm overflow-x-auto">
{`<svg
  className="w-6 h-6 text-white"
  fill="none"
  stroke="currentColor"
  strokeWidth={2}
  viewBox="0 0 24 24"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
  />
</svg>`}
              </pre>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-sm mb-2">
                  <strong className="text-white">Dica:</strong> Use <code className="text-[#DCA405] font-mono">currentColor</code> no stroke para herdar cor do texto/classe.
                </p>
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Biblioteca:</strong> Heroicons (outline variant) ou Lucide Icons
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
