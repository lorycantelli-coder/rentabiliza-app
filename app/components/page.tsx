'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ComponentsPage() {
  const components = [
    {
      title: 'Buttons',
      path: '/buttons',
      description: 'Sistema completo de botões com variantes, tamanhos e estados',
      variants: '4 tipos, 3 tamanhos, 5 estados'
    },
    {
      title: 'Cards',
      path: '/cards',
      description: 'Cards para diferentes contextos: default, elevated, outlined',
      variants: '3 variantes, 2 elevações'
    },
    {
      title: 'Forms',
      path: '/forms',
      description: 'Inputs, textareas, selects, checkboxes, radio buttons e toggles',
      variants: '6 tipos de input'
    },
    {
      title: 'Feedback',
      path: '/feedback',
      description: 'Alerts, toasts, modals e notificações para comunicação com usuário',
      variants: '4 níveis de severidade'
    },
    {
      title: 'States',
      path: '/states',
      description: 'Loading spinners, progress bars, skeleton loaders e empty states',
      variants: '4 tipos de loading'
    },
    {
      title: 'Tables',
      path: '/tables',
      description: 'Tabelas de dados com sorting, filtros e paginação',
      variants: 'Standard, Compact, Data'
    },
    {
      title: 'Lists',
      path: '/lists',
      description: 'Listas com status, KPI cards, property lists e timelines',
      variants: '4 tipos de lista'
    },
    {
      title: 'Charts',
      path: '/charts',
      description: 'Gráficos de performance: bar, donut, line e métricas',
      variants: '4 tipos de gráfico'
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
          <div className="border-b border-white/5 pb-2 mb-2">
            <p className="px-6 py-2 text-[10px] font-mono text-white/40 tracking-[0.3em]">BRAND IDENTITY</p>
            <Link href="/guidelines" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Guidelines
            </Link>
            <Link href="/movimento" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Movimento
            </Link>
            <Link href="/logo" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Logo
            </Link>
            <Link href="/icons" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Icons
            </Link>
            <Link href="/moodboard" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Moodboard
            </Link>
            <Link href="/brand-strategy" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Brand Strategy
            </Link>
          </div>

          <div>
            <p className="px-6 py-2 text-[10px] font-mono text-white/40 tracking-[0.3em]">COMPONENTS</p>
            <Link href="/components" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
              Overview
            </Link>
            <Link href="/buttons" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Buttons
            </Link>
            <Link href="/cards" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Cards
            </Link>
            <Link href="/forms" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Forms
            </Link>
            <Link href="/feedback" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Feedback
            </Link>
            <Link href="/states" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              States
            </Link>
            <Link href="/tables" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Tables
            </Link>
            <Link href="/lists" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Lists
            </Link>
          </div>
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
              COMPONENTS
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              Component Library
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Biblioteca completa de componentes UI para construção rápida e consistente de interfaces.
            </p>
          </div>

          {/* Section: Princípios */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Princípios de Design</h2>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-[#DCA405]/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-[#DCA405] font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Consistência</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Todos os componentes seguem o mesmo sistema de design: cores, tipografia, espaçamento e comportamento.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-[#DCA405]/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-[#DCA405] font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Acessibilidade</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Contraste WCAG AA, navegação por teclado, ARIA labels e estados visuais claros para todos os usuários.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="w-12 h-12 bg-[#DCA405]/20 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-[#DCA405] font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Performance</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Componentes otimizados, CSS modular, carregamento lazy e animações performáticas via GPU.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Componentes */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Componentes Disponíveis</h2>

            <div className="grid grid-cols-2 gap-6">
              {components.map((component, index) => (
                <Link
                  key={index}
                  href={component.path}
                  className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#DCA405]/50 hover:bg-[#DCA405]/5 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-serif text-white group-hover:text-[#DCA405] transition-colors">
                      {component.title}
                    </h3>
                    <svg className="w-6 h-6 text-white/40 group-hover:text-[#DCA405] transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {component.description}
                  </p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-mono text-[#DCA405]">
                      {component.variants}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section: Sistema de Cores */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Sistema de Cores</h2>

            <div className="grid grid-cols-5 gap-4">
              <div className="text-center">
                <div className="w-full h-24 bg-[#DCA405] rounded-lg mb-3"></div>
                <p className="text-white text-sm font-medium mb-1">Primary</p>
                <code className="text-xs text-white/60">#DCA405</code>
              </div>

              <div className="text-center">
                <div className="w-full h-24 bg-emerald-500 rounded-lg mb-3"></div>
                <p className="text-white text-sm font-medium mb-1">Success</p>
                <code className="text-xs text-white/60">#10B981</code>
              </div>

              <div className="text-center">
                <div className="w-full h-24 bg-red-500 rounded-lg mb-3"></div>
                <p className="text-white text-sm font-medium mb-1">Error</p>
                <code className="text-xs text-white/60">#EF4444</code>
              </div>

              <div className="text-center">
                <div className="w-full h-24 bg-yellow-500 rounded-lg mb-3"></div>
                <p className="text-white text-sm font-medium mb-1">Warning</p>
                <code className="text-xs text-white/60">#F59E0B</code>
              </div>

              <div className="text-center">
                <div className="w-full h-24 bg-blue-500 rounded-lg mb-3"></div>
                <p className="text-white text-sm font-medium mb-1">Info</p>
                <code className="text-xs text-white/60">#3B82F6</code>
              </div>
            </div>
          </section>

          {/* Section: Espaçamento */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Sistema de Espaçamento</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="space-y-4">
                {[8, 16, 24, 32, 48, 64].map((space) => (
                  <div key={space} className="flex items-center gap-6">
                    <div className="w-16 text-right">
                      <code className="text-[#DCA405] font-mono text-sm">{space}px</code>
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                      <div className="bg-[#DCA405]" style={{ width: `${space}px`, height: '24px' }}></div>
                      <span className="text-white/40 text-xs font-mono">
                        = {space / 4}rem
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Regra:</strong> Todos os espaçamentos devem ser múltiplos de 8px para manter grid consistente.
                  Use <code className="text-[#DCA405] font-mono">gap-2</code> (8px), <code className="text-[#DCA405] font-mono">gap-4</code> (16px),
                  <code className="text-[#DCA405] font-mono">gap-6</code> (24px), etc.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
