'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function CardsPage() {
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
            <Link href="/guidelines" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Guidelines</Link>
            <Link href="/movimento" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Movimento</Link>
            <Link href="/logo" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Logo</Link>
            <Link href="/icons" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Icons</Link>
            <Link href="/moodboard" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Moodboard</Link>
            <Link href="/brand-strategy" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Brand Strategy</Link>
          </div>

          <div>
            <p className="px-6 py-2 text-[10px] font-mono text-white/40 tracking-[0.3em]">COMPONENTS</p>
            <Link href="/components" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Overview</Link>
            <Link href="/buttons" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Buttons</Link>
            <Link href="/cards" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">Cards</Link>
            <Link href="/forms" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Forms</Link>
            <Link href="/feedback" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Feedback</Link>
            <Link href="/states" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">States</Link>
            <Link href="/tables" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Tables</Link>
            <Link href="/lists" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Lists</Link>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">VERSION 2.0</p>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">

          {/* Header */}
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">COMPONENTS</Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">Cards</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Containers versáteis para agrupar conteúdo relacionado com hierarquia visual clara.
            </p>
          </div>

          {/* Section: Variantes */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Variantes</h2>

            <div className="grid grid-cols-3 gap-6">
              {/* Default */}
              <div>
                <p className="text-white/60 text-sm mb-4 font-mono">DEFAULT</p>
                <div className="bg-white/5 rounded-xl p-6">
                  <h3 className="text-lg font-serif text-white mb-2">Property Card</h3>
                  <p className="text-white/60 text-sm mb-4">Apartamento 2 quartos no Leblon</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#DCA405] font-bold">R$ 850.000</span>
                    <span className="text-white/40 text-sm">40% off</span>
                  </div>
                </div>
              </div>

              {/* Elevated */}
              <div>
                <p className="text-white/60 text-sm mb-4 font-mono">ELEVATED</p>
                <div className="bg-white/5 rounded-xl p-6 border border-white/10 shadow-lg">
                  <h3 className="text-lg font-serif text-white mb-2">Investment Card</h3>
                  <p className="text-white/60 text-sm mb-4">ROI Mensal: 2.3%</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-400 font-bold">+R$ 19.500</span>
                    <span className="text-white/40 text-sm">este mês</span>
                  </div>
                </div>
              </div>

              {/* Outlined */}
              <div>
                <p className="text-white/60 text-sm mb-4 font-mono">OUTLINED</p>
                <div className="bg-transparent rounded-xl p-6 border-2 border-[#DCA405]/30">
                  <h3 className="text-lg font-serif text-white mb-2">Featured Deal</h3>
                  <p className="text-white/60 text-sm mb-4">Oportunidade premium destacada</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#DCA405] font-bold">Exclusivo</span>
                    <span className="text-white/40 text-sm">24h</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Property Cards */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Property Cards</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-[#DCA405]/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-[#DCA405]/20 to-transparent"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-serif text-white">Cobertura Duplex</h3>
                    <Badge className="bg-[#DCA405] text-black border-0 text-xs">40% OFF</Badge>
                  </div>
                  <p className="text-white/60 text-sm mb-4">3 quartos, 2 vagas - Ipanema, RJ</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-white/40 text-xs mb-1">Valor de mercado</p>
                      <p className="text-white line-through text-sm">R$ 2.500.000</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-xs mb-1">Preço leilão</p>
                      <p className="text-[#DCA405] text-2xl font-bold">R$ 1.500.000</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden group hover:border-[#DCA405]/50 transition-all">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-serif text-white">Comercial Prime</h3>
                    <Badge className="bg-emerald-500 text-white border-0 text-xs">NEGOCIÁVEL</Badge>
                  </div>
                  <p className="text-white/60 text-sm mb-4">Sala 80m² - Vila Olímpia, SP</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <p className="text-white/40 text-xs mb-1">Valor estimado</p>
                      <p className="text-white line-through text-sm">R$ 680.000</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-xs mb-1">Lance inicial</p>
                      <p className="text-[#DCA405] text-2xl font-bold">R$ 420.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Metric Cards */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Metric Cards</h2>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-xl p-6">
                <p className="text-white/60 text-sm mb-2">ROI Médio</p>
                <p className="text-4xl font-serif text-[#DCA405] mb-1">34%</p>
                <p className="text-emerald-400 text-sm flex items-center gap-1">
                  <span>+12%</span>
                  <span className="text-white/40">vs último mês</span>
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white/60 text-sm mb-2">Total Investido</p>
                <p className="text-4xl font-serif text-white mb-1">R$ 4.2M</p>
                <p className="text-white/60 text-sm">Across 12 properties</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white/60 text-sm mb-2">Retorno Mensal</p>
                <p className="text-4xl font-serif text-emerald-400 mb-1">R$ 98k</p>
                <p className="text-emerald-400 text-sm flex items-center gap-1">
                  <span>+R$ 8k</span>
                  <span className="text-white/40">este mês</span>
                </p>
              </div>
            </div>
          </section>

          {/* Section: With Actions */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Cards com Ações</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-serif text-white mb-2">Apartamento Garden</h3>
                    <p className="text-white/60 text-sm">2 quartos, 1 vaga - Botafogo, RJ</p>
                  </div>
                  <Badge className="bg-[#DCA405] text-black border-0">35% OFF</Badge>
                </div>
              </div>

              <div className="p-6 border-b border-white/10">
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-white/40 mb-1">Área</p>
                    <p className="text-white font-medium">85m²</p>
                  </div>
                  <div>
                    <p className="text-white/40 mb-1">Valor mercado</p>
                    <p className="text-white font-medium line-through">R$ 650.000</p>
                  </div>
                  <div>
                    <p className="text-white/40 mb-1">Lance mínimo</p>
                    <p className="text-[#DCA405] font-bold text-lg">R$ 422.500</p>
                  </div>
                </div>
              </div>

              <div className="p-6 flex gap-3">
                <button className="flex-1 px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors">
                  Ver Detalhes
                </button>
                <button className="px-6 py-3 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20">
                  Salvar
                </button>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
