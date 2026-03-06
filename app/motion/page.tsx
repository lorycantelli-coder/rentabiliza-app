'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { useState } from 'react'

export default function MotionPage() {
  const [fadeVisible, setFadeVisible] = useState(true)
  const [slideVisible, setSlideVisible] = useState(true)

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
              <Link href="/motion" className="block text-sm text-[#DCA405] font-medium py-2">Motion</Link>
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
              Motion
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Sistema de animações e transições para criar interfaces fluidas e agradáveis.
            </p>
          </div>

          {/* Timing Functions */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Timing Functions</h2>
            <p className="text-white/60 mb-8">Curvas de animação para diferentes tipos de movimento</p>

            <div className="space-y-6">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">Ease-in-out (padrão)</h3>
                    <code className="text-xs font-mono text-[#DCA405]">transition-all duration-300</code>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#DCA405] rounded-full animate-slide-ease"></div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">Linear</h3>
                    <code className="text-xs font-mono text-[#DCA405]">transition-all duration-300 ease-linear</code>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#10B981] rounded-full animate-slide-linear"></div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-white font-medium mb-1">Spring (bounce)</h3>
                    <code className="text-xs font-mono text-[#DCA405]">transition-all duration-500 ease-out</code>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#3B82F6] rounded-full animate-slide-bounce"></div>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes slide-ease {
                0%, 100% { width: 0%; }
                50% { width: 100%; }
              }
              @keyframes slide-linear {
                0%, 100% { width: 0%; }
                50% { width: 100%; }
              }
              @keyframes slide-bounce {
                0%, 100% { width: 0%; }
                50% { width: 100%; }
              }
              .animate-slide-ease {
                animation: slide-ease 3s ease-in-out infinite;
              }
              .animate-slide-linear {
                animation: slide-linear 3s linear infinite;
              }
              .animate-slide-bounce {
                animation: slide-bounce 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
              }
            `}</style>
          </section>

          {/* Entrance Animations */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Entrance Animations</h2>
            <p className="text-white/60 mb-8">Animações de entrada para elementos</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-white font-medium mb-4">Fade In</h3>
                <button
                  onClick={() => {
                    setFadeVisible(false)
                    setTimeout(() => setFadeVisible(true), 100)
                  }}
                  className="mb-4 px-4 py-2 bg-[#DCA405] hover:bg-[#DCA405]/80 text-black text-sm rounded"
                >
                  Replay
                </button>
                {fadeVisible && (
                  <div className="bg-white/10 rounded p-4 animate-fade-in">
                    <p className="text-white text-sm">Conteúdo aparece gradualmente</p>
                  </div>
                )}
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-white font-medium mb-4">Slide Up</h3>
                <button
                  onClick={() => {
                    setSlideVisible(false)
                    setTimeout(() => setSlideVisible(true), 100)
                  }}
                  className="mb-4 px-4 py-2 bg-[#DCA405] hover:bg-[#DCA405]/80 text-black text-sm rounded"
                >
                  Replay
                </button>
                {slideVisible && (
                  <div className="bg-white/10 rounded p-4 animate-slide-up">
                    <p className="text-white text-sm">Conteúdo desliza de baixo para cima</p>
                  </div>
                )}
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-white font-medium mb-4">Scale In</h3>
                <div className="bg-white/10 rounded p-4 animate-scale-in">
                  <p className="text-white text-sm">Conteúdo escala de pequeno para normal</p>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-white font-medium mb-4">Slide Right</h3>
                <div className="bg-white/10 rounded p-4 animate-slide-right">
                  <p className="text-white text-sm">Conteúdo desliza da esquerda</p>
                </div>
              </div>
            </div>

            <style jsx>{`
              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              @keyframes slide-up {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
              }
              @keyframes scale-in {
                from { opacity: 0; transform: scale(0.9); }
                to { opacity: 1; transform: scale(1); }
              }
              @keyframes slide-right {
                from { opacity: 0; transform: translateX(-20px); }
                to { opacity: 1; transform: translateX(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.5s ease-out;
              }
              .animate-slide-up {
                animation: slide-up 0.5s ease-out;
              }
              .animate-scale-in {
                animation: scale-in 0.5s ease-out;
              }
              .animate-slide-right {
                animation: slide-right 0.5s ease-out;
              }
            `}</style>
          </section>

          {/* Hover Transitions */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Hover Transitions</h2>
            <p className="text-white/60 mb-8">Transições de estado ao passar o mouse</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#DCA405] hover:shadow-lg hover:shadow-[#DCA405]/20 transition-all duration-300 cursor-pointer">
                <h3 className="text-white font-medium mb-2">Border + Shadow</h3>
                <p className="text-white/60 text-sm">300ms ease-in-out</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-white font-medium mb-2">Scale + Brightness</h3>
                <p className="text-white/60 text-sm">300ms ease-in-out</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-pointer">
                <h3 className="text-white font-medium mb-2">Lift Effect</h3>
                <p className="text-white/60 text-sm">300ms ease-in-out</p>
              </div>
            </div>
          </section>

          {/* Loading Animations */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Loading Animations</h2>
            <p className="text-white/60 mb-8">Indicadores de carregamento</p>

            <div className="grid grid-cols-4 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex flex-col items-center gap-4">
                <div className="w-8 h-8 border-4 border-white/20 border-t-[#DCA405] rounded-full animate-spin"></div>
                <span className="text-white/60 text-sm">Spinner</span>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-[#DCA405] rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    ></div>
                  ))}
                </div>
                <span className="text-white/60 text-sm">Dots</span>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex flex-col items-center gap-4">
                <div className="w-16 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-[#DCA405] rounded-full animate-progress"></div>
                </div>
                <span className="text-white/60 text-sm">Progress</span>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 flex flex-col items-center gap-4">
                <div className="w-8 h-8 bg-[#DCA405] rounded animate-ping"></div>
                <span className="text-white/60 text-sm">Ping</span>
              </div>
            </div>

            <style jsx>{`
              @keyframes progress {
                0% { width: 0%; transform: translateX(0); }
                50% { width: 100%; transform: translateX(0); }
                100% { width: 0%; transform: translateX(100%); }
              }
              .animate-progress {
                animation: progress 1.5s ease-in-out infinite;
              }
            `}</style>
          </section>

          {/* Scroll Animations */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Scroll Animations</h2>
            <p className="text-white/60 mb-8">Animações baseadas em scroll</p>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10">
              <div className="space-y-8">
                <div className="bg-white/10 rounded p-4 opacity-0 translate-y-4 animate-fade-in-scroll" style={{ animationDelay: '0s', animationFillMode: 'forwards' }}>
                  <h3 className="text-white font-medium mb-2">Item 1</h3>
                  <p className="text-white/60 text-sm">Aparece ao rolar a página</p>
                </div>

                <div className="bg-white/10 rounded p-4 opacity-0 translate-y-4 animate-fade-in-scroll" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                  <h3 className="text-white font-medium mb-2">Item 2</h3>
                  <p className="text-white/60 text-sm">Aparece com delay de 200ms</p>
                </div>

                <div className="bg-white/10 rounded p-4 opacity-0 translate-y-4 animate-fade-in-scroll" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                  <h3 className="text-white font-medium mb-2">Item 3</h3>
                  <p className="text-white/60 text-sm">Aparece com delay de 400ms</p>
                </div>
              </div>

              <style jsx>{`
                @keyframes fade-in-scroll {
                  to {
                    opacity: 1;
                    transform: translateY(0);
                  }
                }
                .animate-fade-in-scroll {
                  animation: fade-in-scroll 0.6s ease-out;
                }
              `}</style>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Boas Práticas</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Duração</div>
                <p className="text-white/80">Use 150-300ms para micro-interações, 300-500ms para transições médias, 500ms+ apenas para animações especiais</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Timing Function</div>
                <p className="text-white/80">Prefira ease-in-out para a maioria das transições. Use ease-out para entrances e ease-in para exits</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Performance</div>
                <p className="text-white/80">Anime apenas transform e opacity quando possível para manter 60fps. Evite animar width, height, margin</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Acessibilidade</div>
                <p className="text-white/80">Respeite prefers-reduced-motion para usuários sensíveis a movimento. Reduza ou desabilite animações quando ativado</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
