'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function VFXPage() {
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
              <Link href="/vfx" className="block text-sm text-[#DCA405] font-medium py-2">VFX</Link>
              <Link href="/editorial" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Editorial</Link>
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
              EDITORIAL
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              VFX
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Efeitos visuais cinematográficos: film grain, blur, glow e blend modes para adicionar profundidade e atmosfera premium.
            </p>
          </div>

          {/* Film Grain */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Film Grain</h2>
            <p className="text-white/60 mb-8">Textura cinematográfica para adicionar caráter premium</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/30 to-transparent"></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-white font-medium">Sem Grain</span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/30 to-transparent"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-white font-medium">Grain Suave</span>
                </div>
              </div>

              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/30 to-transparent"></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.12'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px'
                  }}
                ></div>
                <div className="relative z-10 h-full flex items-center justify-center">
                  <span className="text-white font-medium">Grain Forte</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-black rounded-lg p-6 border border-white/10 font-mono text-sm">
              <pre className="text-white/80 overflow-x-auto">
                <code>{`.film-grain {
  position: relative;
}
.film-grain::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,...");
  opacity: 0.05;  /* Suave: 0.05 | Forte: 0.12 */
  pointer-events: none;
}`}</code>
              </pre>
            </div>
          </section>

          {/* Blur Effects */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Blur Effects</h2>
            <p className="text-white/60 mb-8">Desfoque para profundidade de campo e hierarquia visual</p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Backdrop Blur</h3>
                <div className="relative h-48 rounded-lg overflow-hidden border border-white/10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(220, 164, 5, 0.3) 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/20 to-[#10B981]/10"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 backdrop-blur-md rounded-lg p-8 border border-white/20">
                      <h4 className="text-white font-medium mb-2">Modal com Blur</h4>
                      <p className="text-white/60 text-sm">Backdrop blur cria profundidade</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Gaussian Blur</h3>
                <div className="relative h-48 rounded-lg overflow-hidden border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405]/30 to-transparent blur-sm"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/60 rounded-lg p-6">
                      <h4 className="text-white font-medium mb-2">Background Desfocado</h4>
                      <p className="text-white/60 text-sm">blur-sm: 4px | blur-md: 12px</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Radial Blur (simulado)</h3>
                <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 bg-white/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#DCA405] rounded-full w-24 h-24 blur-2xl opacity-50"></div>
                      <div className="relative z-10 bg-[#DCA405] rounded-full w-16 h-16 flex items-center justify-center">
                        <span className="text-black font-bold">FOCO</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Motion Blur (horizontal)</h3>
                <div className="relative h-48 rounded-lg overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#DCA405] h-16 blur-sm opacity-50 transform scale-x-150"></div>
                    <div className="relative z-10 bg-[#DCA405] h-12 w-32 flex items-center justify-center">
                      <span className="text-black font-bold">MOTION</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-black rounded-lg p-6 border border-white/10 font-mono text-sm">
              <pre className="text-white/80 overflow-x-auto">
                <code>{`.backdrop-blur-md {
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

/* Blur levels */
blur-sm:  blur(4px)
blur-md:  blur(12px)
blur-lg:  blur(16px)
blur-xl:  blur(24px)
blur-2xl: blur(40px)`}</code>
              </pre>
            </div>
          </section>

          {/* Glow Effects */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Glow Effects</h2>
            <p className="text-white/60 mb-8">Efeitos de brilho e iluminação premium</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex items-center justify-center h-48">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#DCA405] rounded-full blur-2xl opacity-50 animate-pulse"></div>
                  <div className="relative z-10 bg-[#DCA405] rounded-full w-24 h-24 flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">R$</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex items-center justify-center h-48">
                <h2
                  className="text-4xl font-serif text-[#DCA405]"
                  style={{
                    textShadow: `0 0 20px rgba(220, 164, 5, 0.6),
                                 0 0 40px rgba(220, 164, 5, 0.4),
                                 0 0 60px rgba(220, 164, 5, 0.2)`
                  }}
                >
                  Rentabiliza
                </h2>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex items-center justify-center h-48">
                <div
                  className="bg-gradient-to-r from-[#DCA405] via-[#10B981] to-[#3B82F6] rounded-lg p-6"
                  style={{
                    boxShadow: `0 0 30px rgba(220, 164, 5, 0.4),
                               0 0 60px rgba(16, 185, 129, 0.3),
                               0 0 90px rgba(59, 130, 246, 0.2)`
                  }}
                >
                  <span className="text-black font-bold">Gradient Glow</span>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-black rounded-lg p-6 border border-white/10 font-mono text-sm">
              <pre className="text-white/80 overflow-x-auto">
                <code>{`/* Soft Glow */
.soft-glow {
  box-shadow: 0 0 20px rgba(220, 164, 5, 0.5);
}

/* Strong Glow */
.strong-glow {
  box-shadow: 0 0 30px rgba(220, 164, 5, 0.8);
}

/* Multi-layer Glow */
.multi-glow {
  box-shadow:
    0 0 20px rgba(220, 164, 5, 0.6),
    0 0 40px rgba(220, 164, 5, 0.4),
    0 0 60px rgba(220, 164, 5, 0.2);
}`}</code>
              </pre>
            </div>
          </section>

          {/* Blend Modes */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Blend Modes</h2>
            <p className="text-white/60 mb-8">Modos de mesclagem para composições complexas</p>

            <div className="grid grid-cols-4 gap-6">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405] to-[#DCA405]/60"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#10B981] to-transparent mix-blend-screen"></div>
                <div className="absolute bottom-2 left-2 text-xs font-mono text-white/80">screen</div>
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405] to-[#DCA405]/60"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#10B981] to-transparent mix-blend-multiply"></div>
                <div className="absolute bottom-2 left-2 text-xs font-mono text-white/80">multiply</div>
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405] to-[#DCA405]/60"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#3B82F6] to-transparent mix-blend-overlay"></div>
                <div className="absolute bottom-2 left-2 text-xs font-mono text-white/80">overlay</div>
              </div>

              <div className="relative aspect-square rounded-lg overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405] to-[#DCA405]/60"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-[#EF4444] to-transparent mix-blend-soft-light"></div>
                <div className="absolute bottom-2 left-2 text-xs font-mono text-white/80">soft-light</div>
              </div>
            </div>

            <div className="mt-8 bg-black rounded-lg p-6 border border-white/10 font-mono text-sm">
              <pre className="text-white/80 overflow-x-auto">
                <code>{`/* Blend modes mais usados */
mix-blend-screen      /* Clareia - ideal para luzes */
mix-blend-multiply    /* Escurece - ideal para sombras */
mix-blend-overlay     /* Contraste - intensifica cores */
mix-blend-soft-light  /* Suave - iluminação difusa */
mix-blend-hard-light  /* Forte - iluminação intensa */
mix-blend-difference  /* Inverte cores - efeito artístico */`}</code>
              </pre>
            </div>
          </section>

          {/* Usage Examples */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Quando Usar</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Film Grain</div>
                <p className="text-white/80">Use em hero sections, backgrounds premium e imagens de alta resolução para adicionar caráter cinematográfico</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Backdrop Blur</div>
                <p className="text-white/80">Ideal para modals, dropdowns e overlays que precisam de contexto do fundo</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Glow Effects</div>
                <p className="text-white/80">Use em CTAs premium, elementos de destaque e badges importantes. Não abuse para manter hierarquia</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Blend Modes</div>
                <p className="text-white/80">Para composições complexas de gradientes e overlays. Teste performance em dispositivos móveis</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
