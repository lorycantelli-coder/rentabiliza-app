'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function PatternsPage() {
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
              <Link href="/patterns" className="block text-sm text-[#DCA405] font-medium py-2">Patterns</Link>
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
              Patterns
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Padrões visuais de fundo: grids de pontos, gradientes e texturas para criar profundidade.
            </p>
          </div>

          {/* Dot Grid Patterns */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Dot Grid</h2>
            <p className="text-white/60 mb-8">Grade de pontos em diferentes densidades</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <div className="p-6 h-64 relative" style={{
                  backgroundImage: `radial-gradient(circle, rgba(220, 164, 5, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }}>
                  <div className="relative z-10">
                    <h3 className="text-white font-medium mb-2">Default Grid</h3>
                    <p className="text-white/60 text-sm">20px espaçamento</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <div className="p-6 h-64 relative" style={{
                  backgroundImage: `radial-gradient(circle, rgba(220, 164, 5, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}>
                  <div className="relative z-10">
                    <h3 className="text-white font-medium mb-2">Sparse Grid</h3>
                    <p className="text-white/60 text-sm">30px espaçamento</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <div className="p-6 h-64 relative" style={{
                  backgroundImage: `radial-gradient(circle, rgba(220, 164, 5, 0.3) 1px, transparent 1px)`,
                  backgroundSize: '10px 10px'
                }}>
                  <div className="relative z-10">
                    <h3 className="text-white font-medium mb-2">Dense Grid</h3>
                    <p className="text-white/60 text-sm">10px espaçamento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <div className="p-6 h-48 relative" style={{
                  backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.2) 1.5px, transparent 1.5px)`,
                  backgroundSize: '25px 25px'
                }}>
                  <div className="relative z-10">
                    <h3 className="text-white font-medium mb-2">Success Variant</h3>
                    <p className="text-white/60 text-sm">Grid verde para seções de sucesso</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
                <div className="p-6 h-48 relative" style={{
                  backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.2) 1.5px, transparent 1.5px)`,
                  backgroundSize: '25px 25px'
                }}>
                  <div className="relative z-10">
                    <h3 className="text-white font-medium mb-2">Info Variant</h3>
                    <p className="text-white/60 text-sm">Grid azul para seções informativas</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Gradients */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Gradients</h2>
            <p className="text-white/60 mb-8">Gradientes da marca para backgrounds e overlays</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Primary Gradients</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="h-48 rounded-lg bg-gradient-to-r from-[#DCA405] to-[#DCA405]/60 flex items-center justify-center border border-[#DCA405]/20">
                    <span className="text-black font-mono text-sm">Left to Right</span>
                  </div>
                  <div className="h-48 rounded-lg bg-gradient-to-br from-[#DCA405] to-transparent flex items-center justify-center border border-[#DCA405]/20">
                    <span className="text-white font-mono text-sm">Diagonal Fade</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Radial Gradients</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="h-48 rounded-lg bg-gradient-radial from-[#DCA405]/30 via-[#DCA405]/10 to-transparent flex items-center justify-center border border-white/10">
                    <span className="text-white font-mono text-sm">Center Glow</span>
                  </div>
                  <div className="h-48 rounded-lg bg-gradient-radial from-[#10B981]/20 via-transparent to-transparent flex items-center justify-center border border-white/10">
                    <span className="text-white font-mono text-sm">Success Glow</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Multi-Stop Gradients</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div
                    className="h-48 rounded-lg flex items-center justify-center border border-white/10"
                    style={{
                      background: 'linear-gradient(135deg, rgba(220, 164, 5, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(59, 130, 246, 0.2) 100%)'
                    }}
                  >
                    <span className="text-white font-mono text-sm">Brand Spectrum</span>
                  </div>
                  <div
                    className="h-48 rounded-lg flex items-center justify-center border border-white/10"
                    style={{
                      background: 'linear-gradient(180deg, rgba(220, 164, 5, 0.2) 0%, rgba(4, 8, 18, 0) 100%)'
                    }}
                  >
                    <span className="text-white font-mono text-sm">Top Fade</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Overlay Gradients</h3>
                <div className="grid grid-cols-2 gap-8">
                  <div className="relative h-48 rounded-lg overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-white/5"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="relative z-10 h-full flex items-end p-6">
                      <span className="text-white font-mono text-sm">Bottom Overlay</span>
                    </div>
                  </div>
                  <div className="relative h-48 rounded-lg overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-white/5"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <span className="text-white font-mono text-sm">Edge Vignette</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Combined Patterns */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Combined Patterns</h2>
            <p className="text-white/60 mb-8">Combinação de grid + gradiente</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="relative h-64 rounded-lg overflow-hidden border border-white/10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(220, 164, 5, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/10 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-white mb-2">Hero Section</h3>
                    <p className="text-white/60">Grid + Gradiente diagonal</p>
                  </div>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden border border-white/10">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.15) 1.5px, transparent 1.5px)`,
                    backgroundSize: '25px 25px'
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-radial from-[#10B981]/20 via-transparent to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center p-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-white mb-2">Success Card</h3>
                    <p className="text-white/60">Grid + Gradiente radial</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Usage Guide */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Uso e Boas Práticas</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Dot Grid - Default</div>
                <p className="text-white/80 mb-3">Use em backgrounds gerais para adicionar textura sutil sem distrair.</p>
                <code className="text-xs font-mono text-[#DCA405] bg-black/30 px-2 py-1 rounded">
                  backgroundSize: 20px 20px
                </code>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Gradientes Primários</div>
                <p className="text-white/80 mb-3">Use em CTAs e seções de destaque para criar hierarquia visual.</p>
                <code className="text-xs font-mono text-[#DCA405] bg-black/30 px-2 py-1 rounded">
                  from-[#DCA405] to-[#DCA405]/60
                </code>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Overlay Gradients</div>
                <p className="text-white/80 mb-3">Use sobre imagens para garantir contraste de texto.</p>
                <code className="text-xs font-mono text-[#DCA405] bg-black/30 px-2 py-1 rounded">
                  from-black/80 to-transparent
                </code>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Combinações</div>
                <p className="text-white/80">Combine grid + gradiente para criar profundidade. Mantenha opacidades baixas (10-30%) para não sobrecarregar.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
