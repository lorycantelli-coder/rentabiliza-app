'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function EditorialPage() {
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
              <Link href="/advanced" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Advanced</Link>
              <Link href="/effects" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Effects</Link>
              <Link href="/patterns" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Patterns</Link>
              <Link href="/templates" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Templates</Link>
              <Link href="/motion" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Motion</Link>
              <Link href="/seo" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">SEO</Link>
            </div>
          </div>

          {/* EDITORIAL */}
          <div className="mb-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-4 uppercase">Editorial</h3>
            <div className="space-y-1">
              <Link href="/vfx" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">VFX</Link>
              <Link href="/editorial" className="block text-sm text-[#DCA405] font-medium py-2">Editorial</Link>
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
          {/* Hero */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <div className="text-[#DCA405] font-serif text-6xl font-bold mb-4 tracking-tight">
                Rentabiliza
              </div>
              <div className="text-2xl text-white/60 font-light">
                Brand Book 2.0
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-[#DCA405] to-transparent mb-12"></div>

            <p className="text-xl text-white/60 leading-relaxed text-center max-w-3xl mx-auto">
              Versão condensada do sistema de design Rentabiliza. Uma plataforma premium de gestão de investimentos imobiliários com identidade visual sofisticada e componentes cinematográficos.
            </p>
          </div>

          {/* Brand Essence */}
          <section className="mb-24">
            <Badge variant="outline" className="mb-6 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              BRAND ESSENCE
            </Badge>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-serif text-white mb-4">Missão</h3>
                <p className="text-white/60 leading-relaxed">
                  Democratizar investimentos imobiliários de alto retorno através de tecnologia e análise preditiva
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-serif text-white mb-4">Visão</h3>
                <p className="text-white/60 leading-relaxed">
                  Ser a plataforma líder em gestão patrimonial imobiliária na América Latina até 2028
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-2xl font-serif text-white mb-4">Valores</h3>
                <p className="text-white/60 leading-relaxed">
                  Transparência, Excelência, Inovação, Integridade, Resultados, Empatia
                </p>
              </div>
            </div>
          </section>

          {/* Visual Identity */}
          <section className="mb-24">
            <Badge variant="outline" className="mb-6 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              VISUAL IDENTITY
            </Badge>

            <div className="grid grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif text-white mb-6">Cores Primárias</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-[#DCA405] border border-white/10"></div>
                    <div>
                      <div className="text-white font-mono mb-1">#DCA405</div>
                      <div className="text-white/60 text-sm">Gold Premium</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-[#040812] border border-white/10"></div>
                    <div>
                      <div className="text-white font-mono mb-1">#040812</div>
                      <div className="text-white/60 text-sm">Navy Deep</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-lg bg-white border border-white/10"></div>
                    <div>
                      <div className="text-white font-mono mb-1">#FFFFFF</div>
                      <div className="text-white/60 text-sm">Pure White</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-serif text-white mb-6">Typography</h3>
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-serif text-[#DCA405] mb-2">Playfair Display</div>
                    <div className="text-white/60 text-sm">Títulos e headlines - Serif clássica premium</div>
                  </div>
                  <div>
                    <div className="text-2xl text-white mb-2">Outfit</div>
                    <div className="text-white/60 text-sm">Corpo e UI - Sans moderna e legível</div>
                  </div>
                  <div>
                    <div className="text-xl font-mono text-white/60 mb-2">Roboto Mono</div>
                    <div className="text-white/60 text-sm">Dados e código - Monospace técnica</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Component System */}
          <section className="mb-24">
            <Badge variant="outline" className="mb-6 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              COMPONENT SYSTEM
            </Badge>

            <div className="grid grid-cols-4 gap-6">
              {[
                { title: 'Buttons', count: '4 variantes', url: '/buttons' },
                { title: 'Cards', count: '5 tipos', url: '/cards' },
                { title: 'Forms', count: 'Completo', url: '/forms' },
                { title: 'Feedback', count: '3 níveis', url: '/feedback' },
                { title: 'Charts', count: '4 tipos', url: '/charts' },
                { title: 'Tables', count: '3 layouts', url: '/tables' },
                { title: 'Effects', count: 'Premium', url: '/effects' },
                { title: 'Patterns', count: 'Grid + Gradientes', url: '/patterns' }
              ].map((component, i) => (
                <Link
                  key={i}
                  href={component.url}
                  className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 hover:bg-white/10 transition-all group"
                >
                  <h4 className="text-white font-medium mb-2 group-hover:text-[#DCA405] transition-colors">
                    {component.title}
                  </h4>
                  <div className="text-sm text-white/40">{component.count}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* Design Principles */}
          <section className="mb-24">
            <Badge variant="outline" className="mb-6 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              DESIGN PRINCIPLES
            </Badge>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#DCA405] font-bold text-xl">1</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Premium & Profissional</h3>
                <p className="text-white/60 text-sm">
                  Cada elemento reflete sofisticação e expertise financeira
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#DCA405] font-bold text-xl">2</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Clareza de Dados</h3>
                <p className="text-white/60 text-sm">
                  Informações financeiras apresentadas com máxima legibilidade
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#DCA405] font-bold text-xl">3</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Confiança Visual</h3>
                <p className="text-white/60 text-sm">
                  Design cinematográfico que inspira segurança e credibilidade
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#DCA405] font-bold text-xl">4</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Hierarquia Clara</h3>
                <p className="text-white/60 text-sm">
                  Contraste e espaçamento guiam o olhar para o que importa
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#DCA405] font-bold text-xl">5</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Movimento Sutil</h3>
                <p className="text-white/60 text-sm">
                  Animações e transições elegantes sem distrações
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-[#DCA405] font-bold text-xl">6</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Performance First</h3>
                <p className="text-white/60 text-sm">
                  Otimização para velocidade e fluidez em todos dispositivos
                </p>
              </div>
            </div>
          </section>

          {/* Quick Reference */}
          <section className="mb-24">
            <Badge variant="outline" className="mb-6 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              QUICK REFERENCE
            </Badge>

            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="p-8">
                  <h3 className="text-lg font-medium text-white mb-4">Spacing System</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-white/60">Base: <span className="text-white">8px</span></div>
                    <div className="text-white/60">Scale: <span className="text-white">8, 16, 24, 32, 48, 64, 96</span></div>
                    <div className="text-white/60">Sections: <span className="text-white">96px (mb-24)</span></div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-lg font-medium text-white mb-4">Border Radius</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-white/60">Small: <span className="text-white">4px (rounded)</span></div>
                    <div className="text-white/60">Medium: <span className="text-white">8px (rounded-lg)</span></div>
                    <div className="text-white/60">Large: <span className="text-white">12px (rounded-xl)</span></div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-lg font-medium text-white mb-4">Opacity Levels</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-white/60">Disabled: <span className="text-white">40% (opacity-40)</span></div>
                    <div className="text-white/60">Secondary: <span className="text-white">60% (opacity-60)</span></div>
                    <div className="text-white/60">Hover: <span className="text-white">80% (opacity-80)</span></div>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-lg font-medium text-white mb-4">Transitions</h3>
                  <div className="space-y-2 font-mono text-sm">
                    <div className="text-white/60">Micro: <span className="text-white">150ms ease-in-out</span></div>
                    <div className="text-white/60">Standard: <span className="text-white">300ms ease-in-out</span></div>
                    <div className="text-white/60">Complex: <span className="text-white">500ms ease-out</span></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <section>
            <div className="text-center">
              <div className="h-px bg-gradient-to-r from-transparent via-[#DCA405] to-transparent mb-12"></div>

              <div className="text-[#DCA405] font-serif text-4xl font-bold mb-4">
                Rentabiliza Brand Book
              </div>
              <div className="text-white/60 mb-8">
                Version 2.0 - Março 2026
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
                <div>
                  <div className="text-3xl font-bold text-[#DCA405] mb-1">25</div>
                  <div className="text-sm text-white/40">Páginas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DCA405] mb-1">50+</div>
                  <div className="text-sm text-white/40">Componentes</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-[#DCA405] mb-1">100%</div>
                  <div className="text-sm text-white/40">Premium</div>
                </div>
              </div>

              <p className="text-white/40 text-sm">
                Desenvolvido com Claude Code e Next.js 15
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
