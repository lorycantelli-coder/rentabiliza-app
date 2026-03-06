'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ButtonsPage() {
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
            <Link href="/components" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
              Overview
            </Link>
            <Link href="/buttons" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
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
              Buttons
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Sistema completo de botões com variantes, tamanhos e estados para todas as interações.
            </p>
          </div>

          {/* Section: Variantes */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Variantes</h2>

            <div className="space-y-8">
              {/* Primary */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-6">Primary (Gold)</h3>
                <div className="flex items-center gap-4 mb-6">
                  <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors">
                    Investir Agora
                  </button>
                  <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors flex items-center gap-2">
                    <span>Ver Oportunidades</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Uso:</strong> CTAs principais, ações primárias, conversão
                </p>
              </div>

              {/* Secondary */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-6">Secondary</h3>
                <div className="flex items-center gap-4 mb-6">
                  <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                    Saiba Mais
                  </button>
                  <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Baixar Relatório</span>
                  </button>
                </div>
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Uso:</strong> Ações secundárias, navegação, downloads
                </p>
              </div>

              {/* Ghost */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-6">Ghost</h3>
                <div className="flex items-center gap-4 mb-6">
                  <button className="px-6 py-3 text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                    Cancelar
                  </button>
                  <button className="px-6 py-3 text-[#DCA405] font-medium rounded-lg hover:bg-[#DCA405]/10 transition-colors">
                    Editar
                  </button>
                </div>
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Uso:</strong> Ações terciárias, cancelar, editar
                </p>
              </div>

              {/* Destructive */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-6">Destructive</h3>
                <div className="flex items-center gap-4 mb-6">
                  <button className="px-6 py-3 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 transition-colors">
                    Excluir Conta
                  </button>
                  <button className="px-6 py-3 bg-red-500/20 text-red-400 font-medium rounded-lg hover:bg-red-500/30 transition-colors border border-red-500/30">
                    Remover Investimento
                  </button>
                </div>
                <p className="text-white/60 text-sm">
                  <strong className="text-white">Uso:</strong> Ações destrutivas, deletar, remover
                </p>
              </div>
            </div>
          </section>

          {/* Section: Tamanhos */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Tamanhos</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-end gap-4">
                <div className="text-center">
                  <button className="px-4 py-2 bg-[#DCA405] text-black text-sm font-medium rounded-lg hover:bg-[#F5C542] transition-colors mb-3">
                    Small
                  </button>
                  <p className="text-white/40 text-xs font-mono">sm</p>
                </div>

                <div className="text-center">
                  <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors mb-3">
                    Medium
                  </button>
                  <p className="text-white/40 text-xs font-mono">md (default)</p>
                </div>

                <div className="text-center">
                  <button className="px-8 py-4 bg-[#DCA405] text-black text-lg font-medium rounded-lg hover:bg-[#F5C542] transition-colors mb-3">
                    Large
                  </button>
                  <p className="text-white/40 text-xs font-mono">lg</p>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-white/40 font-mono mb-1">SMALL</p>
                  <code className="text-[#DCA405]">px-4 py-2 text-sm</code>
                </div>
                <div>
                  <p className="text-white/40 font-mono mb-1">MEDIUM</p>
                  <code className="text-[#DCA405]">px-6 py-3</code>
                </div>
                <div>
                  <p className="text-white/40 font-mono mb-1">LARGE</p>
                  <code className="text-[#DCA405]">px-8 py-4 text-lg</code>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Estados */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Estados</h2>

            <div className="grid grid-cols-2 gap-6">
              {/* Default */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-white/60 text-sm mb-4 font-mono">DEFAULT</p>
                <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg">
                  Investir Agora
                </button>
              </div>

              {/* Hover */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-white/60 text-sm mb-4 font-mono">HOVER</p>
                <button className="px-6 py-3 bg-[#F5C542] text-black font-medium rounded-lg">
                  Investir Agora
                </button>
              </div>

              {/* Active */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-white/60 text-sm mb-4 font-mono">ACTIVE (pressed)</p>
                <button className="px-6 py-3 bg-[#B8920A] text-black font-medium rounded-lg scale-95">
                  Investir Agora
                </button>
              </div>

              {/* Disabled */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <p className="text-white/60 text-sm mb-4 font-mono">DISABLED</p>
                <button className="px-6 py-3 bg-white/10 text-white/30 font-medium rounded-lg cursor-not-allowed" disabled>
                  Investir Agora
                </button>
              </div>

              {/* Loading */}
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 col-span-2">
                <p className="text-white/60 text-sm mb-4 font-mono">LOADING</p>
                <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg flex items-center gap-3 cursor-wait">
                  <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processando...</span>
                </button>
              </div>
            </div>
          </section>

          {/* Section: Com Ícones */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Com Ícones</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <span>Ver Performance</span>
                </button>

                <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>Download PDF</span>
                </button>

                <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20 flex items-center gap-2">
                  <span>Compartilhar</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>

                <button className="p-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* Section: Código */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Implementação</h2>

            <div className="bg-[#0a0f1a] border border-white/10 rounded-xl p-6">
              <p className="text-white/40 text-xs font-mono mb-4">EXEMPLO (React/Tailwind)</p>
              <pre className="text-[#DCA405] font-mono text-sm overflow-x-auto">
{`// Primary Button
<button className="px-6 py-3 bg-[#DCA405] text-black
  font-medium rounded-lg hover:bg-[#F5C542]
  transition-colors disabled:opacity-50">
  Investir Agora
</button>

// Secondary Button
<button className="px-6 py-3 bg-white/10 text-white
  font-medium rounded-lg hover:bg-white/20
  transition-colors border border-white/20">
  Saiba Mais
</button>

// Ghost Button
<button className="px-6 py-3 text-white font-medium
  rounded-lg hover:bg-white/10 transition-colors">
  Cancelar
</button>`}
              </pre>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
