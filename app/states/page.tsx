'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function StatesPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>
        <div className="py-4">
          <p className="px-6 py-2 text-[10px] font-mono text-white/40 tracking-[0.3em]">COMPONENTS</p>
          <Link href="/components" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Overview</Link>
          <Link href="/buttons" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Buttons</Link>
          <Link href="/cards" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Cards</Link>
          <Link href="/forms" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Forms</Link>
          <Link href="/feedback" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Feedback</Link>
          <Link href="/states" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">States</Link>
          <Link href="/tables" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Tables</Link>
          <Link href="/lists" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Lists</Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">VERSION 2.0</p>
        </div>
      </nav>

      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">COMPONENTS</Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">Loading States</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Spinners, progress bars, skeleton loaders e empty states para feedback de carregamento.
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Spinners</h2>
            <div className="grid grid-cols-4 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center">
                <svg className="w-10 h-10 animate-spin text-[#DCA405] mb-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-white/60 text-sm">Default</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-[#DCA405]/20 border-t-[#DCA405] rounded-full animate-spin mb-4"></div>
                <p className="text-white/60 text-sm">Circular</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center">
                <div className="flex gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#DCA405] rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-[#DCA405] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-[#DCA405] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
                <p className="text-white/60 text-sm">Dots</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8 flex flex-col items-center justify-center">
                <div className="w-10 h-10 border-4 border-transparent border-l-[#DCA405] border-t-[#DCA405] rounded-full animate-spin mb-4"></div>
                <p className="text-white/60 text-sm">Half Circle</p>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Progress Bars</h2>
            <div className="space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Análise de documentos</span>
                  <span className="text-[#DCA405] text-sm font-medium">75%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#DCA405] rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Upload de documentos</span>
                  <span className="text-emerald-400 text-sm font-medium">Completo</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white text-sm">Processando pagamento</span>
                  <span className="text-blue-400 text-sm font-medium">45%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-400 to-[#DCA405] rounded-full animate-pulse" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Skeleton Loaders</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="animate-pulse space-y-4">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
                <div className="h-32 bg-white/10 rounded"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white/10 rounded"></div>
                  <div className="h-20 bg-white/10 rounded"></div>
                  <div className="h-20 bg-white/10 rounded"></div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Empty States</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-16 text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white/20" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-white mb-3">Nenhum Investimento Ainda</h3>
              <p className="text-white/60 mb-6 max-w-md mx-auto">
                Você ainda não possui investimentos ativos. Explore oportunidades disponíveis e comece a investir.
              </p>
              <button className="px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors">
                Ver Oportunidades
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
