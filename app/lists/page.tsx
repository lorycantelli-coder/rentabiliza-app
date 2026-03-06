'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ListsPage() {
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
          <Link href="/states" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">States</Link>
          <Link href="/tables" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Tables</Link>
          <Link href="/lists" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">Lists</Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">VERSION 2.0</p>
        </div>
      </nav>

      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">COMPONENTS</Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">Lists</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Listas com status, KPI cards, property lists e timelines para exibição organizada de informações.
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">List Items com Status</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl divide-y divide-white/5">
              <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Documentação Aprovada</h3>
                    <p className="text-white/60 text-sm">Análise concluída em 05/03/2026</p>
                  </div>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-0">Completo</Badge>
              </div>

              <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#DCA405] animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Processando Pagamento</h3>
                    <p className="text-white/60 text-sm">Aguardando confirmação bancária</p>
                  </div>
                </div>
                <Badge className="bg-[#DCA405]/20 text-[#DCA405] border-0">Em Andamento</Badge>
              </div>

              <div className="p-6 flex items-center justify-between hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Agendamento de Vistoria</h3>
                    <p className="text-white/60 text-sm">Pendente - aguardando ação</p>
                  </div>
                </div>
                <Badge className="bg-white/10 text-white/60 border-0">Pendente</Badge>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">KPI Cards</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-white/60 text-sm mb-1">ROI Médio</p>
                    <p className="text-4xl font-serif text-[#DCA405]">34%</p>
                  </div>
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-[#DCA405]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <p className="text-emerald-400 text-sm">+12% vs mês anterior</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Total Investido</p>
                    <p className="text-4xl font-serif text-white">R$ 4.2M</p>
                  </div>
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-white/60 text-sm">12 propriedades</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-white/60 text-sm mb-1">Retorno Mensal</p>
                    <p className="text-4xl font-serif text-emerald-400">R$ 98k</p>
                  </div>
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-emerald-400 text-sm">+R$ 8k este mês</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Timeline</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-[#DCA405] rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">1</span>
                    </div>
                    <div className="w-px h-full bg-white/10 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-white/40 text-sm mb-1">06 Mar 2026, 10:30</p>
                    <h3 className="text-white font-medium mb-2">Lance Registrado</h3>
                    <p className="text-white/60 text-sm">Seu lance de R$ 850.000 foi confirmado no sistema.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div className="w-px h-full bg-white/10 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-8">
                    <p className="text-white/40 text-sm mb-1">05 Mar 2026, 14:20</p>
                    <h3 className="text-white font-medium mb-2">Documentação Aprovada</h3>
                    <p className="text-white/60 text-sm">Todos os documentos foram verificados e aprovados.</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/40 text-sm mb-1">04 Mar 2026, 09:15</p>
                    <h3 className="text-white font-medium mb-2">Cadastro Iniciado</h3>
                    <p className="text-white/60 text-sm">Processo de cadastro foi iniciado com sucesso.</p>
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
