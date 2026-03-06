'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function ChartsPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">
      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <span className="text-[#DCA405] font-serif text-2xl font-bold tracking-tight">Rentabiliza</span>
          </Link>

          {/* BRAND IDENTITY */}
          <div className="mb-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-4 uppercase">Brand Identity</h3>
            <div className="space-y-1">
              <Link href="/guidelines" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Guidelines</Link>
              <Link href="/movimento" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Movimento</Link>
              <Link href="/logo" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Logo</Link>
              <Link href="/icons" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Icons</Link>
              <Link href="/moodboard" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Moodboard</Link>
              <Link href="/brand-strategy" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Brand Strategy</Link>
            </div>
          </div>

          {/* COMPONENTS */}
          <div className="mb-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-4 uppercase">Components</h3>
            <div className="space-y-1">
              <Link href="/components" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Overview</Link>
              <Link href="/buttons" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Buttons</Link>
              <Link href="/cards" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Cards</Link>
              <Link href="/forms" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Forms</Link>
              <Link href="/feedback" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Feedback</Link>
              <Link href="/states" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">States</Link>
              <Link href="/tables" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Tables</Link>
              <Link href="/lists" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Lists</Link>
              <Link href="/charts" className="block text-sm text-[#DCA405] font-medium py-2">Charts</Link>
              <Link href="/sections" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Sections</Link>
              <Link href="/advanced" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Advanced</Link>
              <Link href="/effects" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Effects</Link>
              <Link href="/patterns" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Patterns</Link>
              <Link href="/templates" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Templates</Link>
              <Link href="/motion" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Motion</Link>
              <Link href="/seo" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">SEO</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <div className="text-[10px] font-mono tracking-[0.2em] text-white/30">
            VERSION 2.0
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              COMPONENTS
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              Charts
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Sistema de visualização de dados para métricas de ROI, performance de investimentos e dashboards de análise.
            </p>
          </div>

          {/* Bar Chart */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Bar Chart</h2>
            <p className="text-white/60 mb-8">Comparação de investimentos mensais</p>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <div className="flex items-end justify-between h-64 gap-4">
                {[
                  { month: 'Jan', value: 85, label: 'R$ 12.500' },
                  { month: 'Fev', value: 92, label: 'R$ 13.800' },
                  { month: 'Mar', value: 78, label: 'R$ 11.200' },
                  { month: 'Abr', value: 95, label: 'R$ 14.200' },
                  { month: 'Mai', value: 88, label: 'R$ 13.100' },
                  { month: 'Jun', value: 100, label: 'R$ 15.000' }
                ].map((item) => (
                  <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                    <div className="text-xs font-mono text-white/40">{item.label}</div>
                    <div
                      className="w-full bg-gradient-to-t from-[#DCA405] to-[#DCA405]/60 rounded-t transition-all hover:from-[#DCA405]/80 hover:to-[#DCA405]/40"
                      style={{ height: `${item.value}%` }}
                    />
                    <div className="text-sm font-medium text-white">{item.month}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Donut Chart */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Donut Chart</h2>
            <p className="text-white/60 mb-8">Distribuição de portfólio</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1e293b" strokeWidth="20" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#DCA405" strokeWidth="20" strokeDasharray="126 251" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#10B981" strokeWidth="20" strokeDasharray="75 251" strokeDashoffset="-126" strokeLinecap="round" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#3B82F6" strokeWidth="20" strokeDasharray="50 251" strokeDashoffset="-201" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">R$ 45k</div>
                      <div className="text-sm text-white/40 font-mono">Total</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#DCA405]"></div>
                  <div className="flex-1">
                    <div className="text-white font-medium">Imóveis</div>
                    <div className="text-sm text-white/40 font-mono">50% - R$ 22.5k</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#10B981]"></div>
                  <div className="flex-1">
                    <div className="text-white font-medium">Fundos</div>
                    <div className="text-sm text-white/40 font-mono">30% - R$ 13.5k</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
                  <div className="flex-1">
                    <div className="text-white font-medium">Ações</div>
                    <div className="text-sm text-white/40 font-mono">20% - R$ 9k</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Line Chart */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Line Chart</h2>
            <p className="text-white/60 mb-8">Performance temporal (12 meses)</p>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <svg viewBox="0 0 600 200" className="w-full h-64">
                {/* Grid */}
                {[0, 50, 100, 150, 200].map((y) => (
                  <line key={y} x1="0" y1={y} x2="600" y2={y} stroke="#1e293b" strokeWidth="1" />
                ))}

                {/* Line */}
                <polyline
                  points="0,150 50,130 100,145 150,115 200,120 250,100 300,95 350,85 400,90 450,70 500,65 550,50 600,45"
                  fill="none"
                  stroke="#DCA405"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Gradient fill */}
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#DCA405" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#DCA405" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polygon
                  points="0,150 50,130 100,145 150,115 200,120 250,100 300,95 350,85 400,90 450,70 500,65 550,50 600,45 600,200 0,200"
                  fill="url(#lineGradient)"
                />

                {/* Points */}
                {[
                  [0, 150], [50, 130], [100, 145], [150, 115], [200, 120], [250, 100],
                  [300, 95], [350, 85], [400, 90], [450, 70], [500, 65], [550, 50], [600, 45]
                ].map(([x, y], i) => (
                  <circle key={i} cx={x} cy={y} r="4" fill="#DCA405" className="hover:r-6 transition-all cursor-pointer" />
                ))}

                {/* Labels */}
                <text x="0" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Jan</text>
                <text x="100" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Mar</text>
                <text x="200" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Mai</text>
                <text x="300" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Jul</text>
                <text x="400" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Set</text>
                <text x="500" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Nov</text>
                <text x="600" y="195" fill="#94A3B8" fontSize="12" textAnchor="middle">Dez</text>
              </svg>
            </div>
          </section>

          {/* Metric Cards */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Metric Cards</h2>
            <p className="text-white/60 mb-8">Indicadores chave de performance</p>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-sm font-mono text-white/40 mb-2">ROI MÉDIO</div>
                <div className="text-4xl font-bold text-[#DCA405] mb-2">18.5%</div>
                <div className="flex items-center gap-2 text-sm text-[#10B981]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>+2.3% vs mês anterior</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-sm font-mono text-white/40 mb-2">RENDIMENTO MENSAL</div>
                <div className="text-4xl font-bold text-white mb-2">R$ 8.200</div>
                <div className="flex items-center gap-2 text-sm text-[#10B981]">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <span>+12% vs mês anterior</span>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="text-sm font-mono text-white/40 mb-2">PATRIMÔNIO TOTAL</div>
                <div className="text-4xl font-bold text-white mb-2">R$ 142k</div>
                <div className="flex items-center gap-2 text-sm text-white/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  <span>Estável</span>
                </div>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Uso e Variantes</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Bar Chart</div>
                <p className="text-white/80">Ideal para comparar valores discretos (meses, categorias, produtos)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Donut Chart</div>
                <p className="text-white/80">Perfeito para mostrar distribuição percentual (portfólio, categorias)</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Line Chart</div>
                <p className="text-white/80">Melhor escolha para mostrar tendências ao longo do tempo</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Metric Cards</div>
                <p className="text-white/80">Destaque para KPIs importantes com indicadores de variação</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
