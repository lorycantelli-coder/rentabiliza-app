'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useState } from 'react'

export default function AdvancedPage() {
  const [activeTab, setActiveTab] = useState(0)
  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null)

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
              <Link href="/charts" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Charts</Link>
              <Link href="/sections" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Sections</Link>
              <Link href="/advanced" className="block text-sm text-[#DCA405] font-medium py-2">Advanced</Link>
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
              Advanced
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Componentes interativos avançados para interfaces complexas: tabs, accordions, tooltips e popovers.
            </p>
          </div>

          {/* Tabs */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Tabs</h2>
            <p className="text-white/60 mb-8">Navegação por abas com conteúdo dinâmico</p>

            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <div className="flex border-b border-white/10">
                {['Visão Geral', 'Performance', 'Transações'].map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveTab(i)}
                    className={`flex-1 px-6 py-4 text-sm font-medium transition-all ${
                      activeTab === i
                        ? 'text-[#DCA405] border-b-2 border-[#DCA405] bg-white/5'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="p-8">
                {activeTab === 0 && (
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4">Dashboard Principal</h3>
                    <p className="text-white/60 mb-6">
                      Acompanhe suas métricas principais em tempo real.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-sm font-mono text-white/40 mb-1">ROI</div>
                        <div className="text-2xl font-bold text-[#DCA405]">18.5%</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-sm font-mono text-white/40 mb-1">Rendimento</div>
                        <div className="text-2xl font-bold text-white">R$ 8.2k</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-sm font-mono text-white/40 mb-1">Patrimônio</div>
                        <div className="text-2xl font-bold text-white">R$ 142k</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4">Análise de Performance</h3>
                    <p className="text-white/60 mb-6">
                      Gráficos detalhados de performance ao longo do tempo.
                    </p>
                    <div className="h-32 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                      <span className="text-white/40 font-mono text-sm">Gráfico de Performance</span>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div>
                    <h3 className="text-2xl font-serif text-white mb-4">Histórico de Transações</h3>
                    <p className="text-white/60 mb-6">
                      Todas as suas movimentações financeiras.
                    </p>
                    <div className="space-y-3">
                      {['Compra - Imóvel Centro', 'Venda - Apto Zona Sul', 'Aluguel - Loja Comercial'].map((item, i) => (
                        <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10 flex justify-between items-center">
                          <span className="text-white">{item}</span>
                          <span className="text-white/40 font-mono text-sm">R$ {(Math.random() * 50 + 10).toFixed(1)}k</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Accordion */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Accordion</h2>
            <p className="text-white/60 mb-8">Seções expansíveis para conteúdo colapsável</p>

            <div className="space-y-3">
              {[
                {
                  title: 'Como funciona a análise preditiva?',
                  content: 'Nossa IA analisa mais de 10 anos de dados do mercado imobiliário brasileiro, incluindo valorização por região, tendências econômicas e padrões de demanda para prever oportunidades de investimento.'
                },
                {
                  title: 'Qual o investimento mínimo?',
                  content: 'Recomendamos um patrimônio inicial de R$ 50.000 para diversificação adequada, mas aceitamos investidores a partir de R$ 10.000 com portfólios focados.'
                },
                {
                  title: 'Quais são as taxas?',
                  content: 'Cobramos 1.5% ao ano sobre o patrimônio gerido + 20% de performance fee sobre lucros acima de 12% ao ano. Sem custos ocultos.'
                }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                  <button
                    onClick={() => setExpandedAccordion(expandedAccordion === i ? null : i)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-all"
                  >
                    <span className="text-white font-medium">{item.title}</span>
                    <svg
                      className={`w-5 h-5 text-[#DCA405] transition-transform ${expandedAccordion === i ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedAccordion === i && (
                    <div className="px-6 py-4 border-t border-white/10 text-white/60">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Tooltips */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Tooltips</h2>
            <p className="text-white/60 mb-8">Dicas contextuais ao passar o mouse</p>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <div className="flex gap-4 items-center">
                <span className="text-white">ROI médio:</span>
                <div className="group relative">
                  <span className="text-[#DCA405] font-bold cursor-help border-b border-dashed border-[#DCA405]">
                    18.5%
                  </span>
                  <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/20 rounded-lg text-sm text-white/80 whitespace-nowrap z-10">
                    Return on Investment (Retorno sobre Investimento)
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                  </div>
                </div>

                <span className="text-white ml-8">CAP Rate:</span>
                <div className="group relative">
                  <span className="text-[#DCA405] font-bold cursor-help border-b border-dashed border-[#DCA405]">
                    7.2%
                  </span>
                  <div className="hidden group-hover:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-black border border-white/20 rounded-lg text-sm text-white/80 whitespace-nowrap z-10">
                    Capitalization Rate (Taxa de Capitalização)
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-sm text-white/40">
                Passe o mouse sobre os valores para ver descrições
              </div>
            </div>
          </section>

          {/* Popovers */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Popovers</h2>
            <p className="text-white/60 mb-8">Painéis contextuais com conteúdo rico</p>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <div className="flex gap-6">
                <div className="group relative">
                  <button className="px-6 py-3 bg-[#DCA405] hover:bg-[#DCA405]/80 text-black font-medium rounded-lg transition-all">
                    Ver Detalhes
                  </button>
                  <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-80 bg-black border border-white/20 rounded-lg p-6 z-10 shadow-2xl">
                    <h3 className="text-lg font-serif text-white mb-3">Imóvel - Centro Histórico</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Valor:</span>
                        <span className="text-white font-mono">R$ 850.000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">ROI previsto:</span>
                        <span className="text-[#10B981] font-mono">+22%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">CAP Rate:</span>
                        <span className="text-white font-mono">8.5%</span>
                      </div>
                    </div>
                    <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white text-sm rounded transition-all">
                      Ver Análise Completa
                    </button>
                    <div className="absolute bottom-full left-8 -mb-1 border-4 border-transparent border-b-black"></div>
                  </div>
                </div>

                <div className="group relative">
                  <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all border border-white/20">
                    Comparar Imóveis
                  </button>
                  <div className="hidden group-hover:block absolute top-full left-0 mt-2 w-96 bg-black border border-white/20 rounded-lg p-6 z-10 shadow-2xl">
                    <h3 className="text-lg font-serif text-white mb-4">Comparação Rápida</h3>
                    <div className="space-y-3">
                      <div className="bg-white/5 rounded p-3 border border-white/10">
                        <div className="font-medium text-white mb-1">Imóvel A - Centro</div>
                        <div className="text-sm text-[#10B981] font-mono">ROI: +22% | CAP: 8.5%</div>
                      </div>
                      <div className="bg-white/5 rounded p-3 border border-white/10">
                        <div className="font-medium text-white mb-1">Imóvel B - Zona Sul</div>
                        <div className="text-sm text-[#DCA405] font-mono">ROI: +18% | CAP: 7.2%</div>
                      </div>
                    </div>
                    <div className="absolute bottom-full left-8 -mb-1 border-4 border-transparent border-b-black"></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-sm text-white/40">
                Passe o mouse sobre os botões para ver os popovers
              </div>
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Uso e Boas Práticas</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Tabs</div>
                <p className="text-white/80">Use para organizar conteúdo relacionado em categorias. Máximo 5 abas para não sobrecarregar.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Accordion</div>
                <p className="text-white/80">Ideal para FAQs e conteúdo longo que precisa ser escaneável. Mantenha títulos curtos e descritivos.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Tooltips</div>
                <p className="text-white/80">Para definições curtas e contexto adicional. Máximo 1-2 linhas de texto.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Popovers</div>
                <p className="text-white/80">Para conteúdo rico e interativo. Pode conter múltiplos elementos como imagens, listas e botões.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
