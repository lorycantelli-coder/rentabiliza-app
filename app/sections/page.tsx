'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SectionsPage() {
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
              <Link href="/sections" className="block text-sm text-[#DCA405] font-medium py-2">Sections</Link>
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
              Sections
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Componentes de seção para construção de landing pages, homepages e páginas institucionais.
            </p>
          </div>

          {/* Hero Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Hero Section</h2>
            <p className="text-white/60 mb-8">Seção principal de abertura com headline e CTA</p>

            <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent rounded-lg p-16 border border-[#DCA405]/20">
              <div className="max-w-3xl">
                <Badge variant="outline" className="mb-6 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
                  LANÇAMENTO 2026
                </Badge>
                <h1 className="text-6xl font-serif text-white mb-6 tracking-tight leading-tight">
                  Rentabilize seu Patrimônio com Inteligência
                </h1>
                <p className="text-xl text-white/60 mb-8 leading-relaxed">
                  Plataforma premium de gestão de investimentos imobiliários. ROI médio de 18% ao ano com análise preditiva de mercado.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#DCA405] hover:bg-[#DCA405]/80 text-black font-medium px-8 py-6 text-lg">
                    Começar Agora
                  </Button>
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 px-8 py-6 text-lg">
                    Ver Demonstração
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Features Grid</h2>
            <p className="text-white/60 mb-8">Grade de features com ícones e descrições</p>

            <div className="grid grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Análise Preditiva</h3>
                <p className="text-white/60 leading-relaxed">
                  IA treinada com 10 anos de dados do mercado imobiliário brasileiro para prever tendências.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">Segurança Premium</h3>
                <p className="text-white/60 leading-relaxed">
                  Criptografia de ponta a ponta e certificação ISO 27001 para proteção total dos seus dados.
                </p>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10 hover:border-[#DCA405]/30 transition-all">
                <div className="w-12 h-12 bg-[#DCA405]/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-3">ROI Comprovado</h3>
                <p className="text-white/60 leading-relaxed">
                  Média de 18.5% de retorno anual para clientes com portfólio acima de R$ 100k.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">CTA Section</h2>
            <p className="text-white/60 mb-8">Call-to-action destacado</p>

            <div className="bg-gradient-to-r from-[#DCA405]/20 via-[#DCA405]/10 to-transparent rounded-lg p-16 border border-[#DCA405]/30">
              <div className="max-w-3xl">
                <h2 className="text-4xl font-serif text-white mb-4 tracking-tight">
                  Pronto para Rentabilizar?
                </h2>
                <p className="text-lg text-white/60 mb-8 leading-relaxed">
                  Junte-se a mais de 2.500 investidores que já alcançaram independência financeira através da nossa plataforma.
                </p>
                <div className="flex gap-4">
                  <Button className="bg-[#DCA405] hover:bg-[#DCA405]/80 text-black font-medium px-8 py-6 text-lg">
                    Criar Conta Gratuita
                  </Button>
                  <div className="flex items-center gap-2 text-white/60">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">Sem cartão de crédito</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Testimonials</h2>
            <p className="text-white/60 mb-8">Depoimentos de clientes</p>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#DCA405]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "Rentabiliza transformou minha forma de investir. Em 2 anos, dobrei meu patrimônio imobiliário com a análise preditiva deles."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCA405]/10 flex items-center justify-center">
                    <span className="text-[#DCA405] font-bold text-lg">MR</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Marina Rodrigues</div>
                    <div className="text-sm text-white/40">CEO, Construtora Horizonte</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-8 border border-white/10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#DCA405]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">
                  "A plataforma é intuitiva e os insights são precisos. Consegui 22% de ROI no primeiro ano."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#DCA405]/10 flex items-center justify-center">
                    <span className="text-[#DCA405] font-bold text-lg">FS</span>
                  </div>
                  <div>
                    <div className="text-white font-medium">Felipe Santos</div>
                    <div className="text-sm text-white/40">Investidor Independente</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Stats Section</h2>
            <p className="text-white/60 mb-8">Seção de estatísticas e números</p>

            <div className="bg-white/5 rounded-lg p-12 border border-white/10">
              <div className="grid grid-cols-4 gap-12">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#DCA405] mb-2">2.5k+</div>
                  <div className="text-white/60">Clientes Ativos</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#DCA405] mb-2">R$ 420M</div>
                  <div className="text-white/60">Patrimônio Gerido</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#DCA405] mb-2">18.5%</div>
                  <div className="text-white/60">ROI Médio Anual</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#DCA405] mb-2">98%</div>
                  <div className="text-white/60">Satisfação</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
