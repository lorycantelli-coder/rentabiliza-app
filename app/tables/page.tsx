'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function TablesPage() {
  const investments = [
    { id: '001', property: 'Cobertura Duplex', location: 'Ipanema, RJ', value: 1500000, roi: 34, status: 'ativo' },
    { id: '002', property: 'Comercial Prime', location: 'Vila Olímpia, SP', value: 420000, roi: 28, status: 'ativo' },
    { id: '003', property: 'Apt Garden', location: 'Botafogo, RJ', value: 422500, roi: 41, status: 'vendido' }
  ]

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
          <Link href="/tables" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">Tables</Link>
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
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">Tables</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Tabelas de dados com sorting, filtros e formatação para exibição de informações estruturadas.
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Standard Table</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 text-sm font-mono text-white/60">ID</th>
                    <th className="text-left p-4 text-sm font-mono text-white/60">Imóvel</th>
                    <th className="text-left p-4 text-sm font-mono text-white/60">Localização</th>
                    <th className="text-right p-4 text-sm font-mono text-white/60">Valor</th>
                    <th className="text-right p-4 text-sm font-mono text-white/60">ROI %</th>
                    <th className="text-center p-4 text-sm font-mono text-white/60">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.map((inv) => (
                    <tr key={inv.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4 text-white/60 font-mono text-sm">{inv.id}</td>
                      <td className="p-4 text-white font-medium">{inv.property}</td>
                      <td className="p-4 text-white/70">{inv.location}</td>
                      <td className="p-4 text-right text-[#DCA405] font-medium">
                        R$ {inv.value.toLocaleString('pt-BR')}
                      </td>
                      <td className="p-4 text-right text-emerald-400 font-medium">
                        +{inv.roi}%
                      </td>
                      <td className="p-4 text-center">
                        <Badge className={inv.status === 'ativo' ? 'bg-emerald-500/20 text-emerald-400 border-0' : 'bg-white/10 text-white/60 border-0'}>
                          {inv.status}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Compact Metrics</h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <p className="text-white/60 text-sm mb-4">Portfolio Total</p>
                <table className="w-full text-sm">
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white/70">Investido</td>
                      <td className="py-2 text-right text-white font-medium">R$ 2.34M</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white/70">Valorizado</td>
                      <td className="py-2 text-right text-emerald-400 font-medium">R$ 3.12M</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white/70">ROI Total</td>
                      <td className="py-2 text-right text-[#DCA405] font-bold">+33%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6 col-span-2">
                <p className="text-white/60 text-sm mb-4">Performance Mensal</p>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="py-2 text-left text-white/60 font-mono">Mês</th>
                      <th className="py-2 text-right text-white/60 font-mono">Entrada</th>
                      <th className="py-2 text-right text-white/60 font-mono">Retorno</th>
                      <th className="py-2 text-right text-white/60 font-mono">ROI</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white/70">Jan 2026</td>
                      <td className="py-2 text-right text-white">R$ 0</td>
                      <td className="py-2 text-right text-emerald-400">R$ 18.5k</td>
                      <td className="py-2 text-right text-[#DCA405] font-medium">+2.1%</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 text-white/70">Fev 2026</td>
                      <td className="py-2 text-right text-white">R$ 420k</td>
                      <td className="py-2 text-right text-emerald-400">R$ 22.3k</td>
                      <td className="py-2 text-right text-[#DCA405] font-medium">+2.5%</td>
                    </tr>
                    <tr>
                      <td className="py-2 text-white/70">Mar 2026</td>
                      <td className="py-2 text-right text-white">R$ 0</td>
                      <td className="py-2 text-right text-emerald-400">R$ 26.1k</td>
                      <td className="py-2 text-right text-[#DCA405] font-medium">+2.9%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
