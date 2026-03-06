'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function EffectsPage() {
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
              <Link href="/effects" className="block text-sm text-[#DCA405] font-medium py-2">Effects</Link>
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
              Effects
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Efeitos visuais e animações para adicionar movimento e hierarquia visual à interface.
            </p>
          </div>

          {/* Ticker Strip */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Ticker Strip</h2>
            <p className="text-white/60 mb-8">Faixa infinita de rolagem com métricas</p>

            <div className="bg-white/5 rounded-lg p-8 border border-white/10 overflow-hidden">
              <div className="relative">
                <div className="flex gap-12 animate-scroll">
                  {[...Array(2)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-12 shrink-0">
                      {[
                        { label: 'ROI MÉDIO', value: '18.5%', trend: 'up' },
                        { label: 'PATRIMÔNIO', value: 'R$ 142k', trend: 'stable' },
                        { label: 'RENDIMENTO', value: 'R$ 8.2k', trend: 'up' },
                        { label: 'VALORIZAÇÃO', value: '+12%', trend: 'up' },
                        { label: 'IMÓVEIS', value: '23', trend: 'stable' },
                        { label: 'CAP RATE', value: '7.2%', trend: 'up' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 shrink-0">
                          <div>
                            <div className="text-xs font-mono text-white/40">{item.label}</div>
                            <div className="text-xl font-bold text-white">{item.value}</div>
                          </div>
                          <div className={`text-sm ${
                            item.trend === 'up' ? 'text-[#10B981]' : 'text-white/40'
                          }`}>
                            {item.trend === 'up' && '↑'}
                            {item.trend === 'stable' && '—'}
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <style jsx>{`
                @keyframes scroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
                .animate-scroll {
                  animation: scroll 30s linear infinite;
                }
              `}</style>
            </div>
          </section>

          {/* Badge Variants */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Badge Variants</h2>
            <p className="text-white/60 mb-8">Variantes de badges com efeitos visuais</p>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Status Badges</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/20 border">
                    ATIVO
                  </Badge>
                  <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/20 border">
                    PENDENTE
                  </Badge>
                  <Badge className="bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20 border">
                    EM ANÁLISE
                  </Badge>
                  <Badge className="bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/20 border">
                    BLOQUEADO
                  </Badge>
                  <Badge className="bg-white/10 text-white border-white/20 border">
                    ARQUIVADO
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Glowing Badges</h3>
                <div className="flex flex-wrap gap-4">
                  <Badge className="bg-[#DCA405] text-black shadow-lg shadow-[#DCA405]/50 animate-pulse">
                    NOVO
                  </Badge>
                  <Badge className="bg-[#10B981] text-white shadow-lg shadow-[#10B981]/50">
                    APROVADO
                  </Badge>
                  <Badge className="bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/30">
                    PREMIUM
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Numbered Badges</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="inline-flex items-center gap-2">
                    <span className="text-white">Etapa</span>
                    <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/20 border font-bold">
                      1
                    </Badge>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-white">Etapa</span>
                    <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/20 border font-bold">
                      2
                    </Badge>
                  </div>
                  <div className="inline-flex items-center gap-2">
                    <span className="text-white">Etapa</span>
                    <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/20 border font-bold">
                      3
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Notification Badges</h3>
                <div className="flex flex-wrap gap-8">
                  <div className="relative">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] rounded-full text-white text-xs flex items-center justify-center font-bold">
                      3
                    </span>
                  </div>

                  <div className="relative">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#DCA405] rounded-full text-black text-xs flex items-center justify-center font-bold">
                      12
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Glow Effects */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Glow Effects</h2>
            <p className="text-white/60 mb-8">Efeitos de brilho e iluminação</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-4">Soft Glow</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="w-24 h-24 bg-[#DCA405] rounded-full shadow-2xl shadow-[#DCA405]/50 flex items-center justify-center">
                    <span className="text-black font-bold text-2xl">R$</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-4">Strong Glow</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="w-24 h-24 bg-[#10B981] rounded-full shadow-2xl shadow-[#10B981]/80 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-4">Border Glow</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="w-48 h-24 rounded-lg border-2 border-[#DCA405] shadow-lg shadow-[#DCA405]/30 flex items-center justify-center">
                    <span className="text-white font-mono">PREMIUM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-4">Text Glow</h3>
                <div className="flex items-center justify-center h-32">
                  <h1 className="text-4xl font-serif text-[#DCA405]" style={{ textShadow: '0 0 20px rgba(220, 164, 5, 0.5)' }}>
                    Rentabiliza
                  </h1>
                </div>
              </div>
            </div>
          </section>

          {/* Pulse Effects */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Pulse Effects</h2>
            <p className="text-white/60 mb-8">Animações de pulsação para chamar atenção</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-6">Pulse Scale</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="w-16 h-16 bg-[#EF4444] rounded-full animate-pulse flex items-center justify-center">
                    <span className="text-white font-bold">LIVE</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-6">Pulse Ring</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="relative">
                    <div className="w-16 h-16 bg-[#DCA405] rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 w-16 h-16 bg-[#DCA405] rounded-full animate-ping opacity-30"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <h3 className="text-lg font-medium text-white mb-6">Pulse Glow</h3>
                <div className="flex items-center justify-center h-32">
                  <div className="w-16 h-16 bg-[#10B981] rounded-full animate-pulse shadow-2xl shadow-[#10B981]/50 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">+</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hover Effects */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Hover Effects</h2>
            <p className="text-white/60 mb-8">Efeitos de interação ao passar o mouse</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:border-[#DCA405] hover:shadow-lg hover:shadow-[#DCA405]/20 transition-all duration-300 cursor-pointer">
                <h3 className="text-white font-medium mb-2">Border Highlight</h3>
                <p className="text-white/60 text-sm">Passe o mouse aqui</p>
              </div>

              <div className="bg-white/5 rounded-lg p-6 border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                <h3 className="text-white font-medium mb-2">Scale + Brightness</h3>
                <p className="text-white/60 text-sm">Passe o mouse aqui</p>
              </div>

              <div className="bg-gradient-to-r from-[#DCA405]/10 to-transparent rounded-lg p-6 border border-[#DCA405]/20 hover:from-[#DCA405]/20 hover:border-[#DCA405]/40 transition-all duration-300 cursor-pointer">
                <h3 className="text-white font-medium mb-2">Gradient Shift</h3>
                <p className="text-white/60 text-sm">Passe o mouse aqui</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
