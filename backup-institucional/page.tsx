'use client'

import { Button } from '@/components/ui/button'
import { DataMetric } from '@/components/ui/data-metric'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#040812]">

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        <div className="absolute inset-0 gradient-subtle-glow opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">

            {/* Badge */}
            <div className="inline-block">
              <span className="text-label text-[#DCA405] px-4 py-2 bg-[#DCA405]/10 rounded-full border border-[#DCA405]/20">
                IA PREDITIVA PARA INVESTIMENTOS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display-xl text-white">
              <span className="font-mono text-[#DCA405]">34%</span> Acima do Mercado.{" "}
              <span className="block mt-4">Resultados Auditados.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-body-l text-white/60 max-w-3xl mx-auto">
              IA antecipa padrões <span className="font-mono text-[#DCA405]">48h antes</span> do mercado reagir.
              Investimentos inteligentes para executivos que não têm tempo de virar especialistas.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/rentabiliza">
                <Button
                  size="lg"
                  className="bg-[#DCA405] text-[#040812] px-8 py-6 rounded-xl font-bold text-lg hover:bg-[#F5C542] transition-all shadow-[0_4px_20px_rgba(220,164,5,0.3)]"
                >
                  VER DEMONSTRAÇÃO
                </Button>
              </Link>

              <Link href="/brand-book">
                <Button
                  size="lg"
                  className="bg-white/10 text-white border border-white/20 px-8 py-6 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
                >
                  EXPLORAR BRAND BOOK
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="pt-12">
              <p className="text-xs text-white/30 font-mono tracking-wide mb-4">CONFIADO POR</p>
              <div className="flex gap-8 justify-center items-center flex-wrap">
                <DataMetric value="15.2K" description="Investidores" variant="default" className="items-center" />
                <DataMetric value="R$ 890M" description="Sob gestão" variant="default" className="items-center" />
                <DataMetric value="48h" description="Antecipação" variant="default" className="items-center" />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-[#DCA405]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Proof Points */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">PROOF POINTS</p>
            <h2 className="text-display-h2 text-white">Dados, Não Promessas</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-[#DCA405] mb-3">34%</div>
              <p className="text-sm text-white/40 font-mono">Acima do mercado (12 meses)</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-[#DCA405] mb-3">15.2K</div>
              <p className="text-sm text-white/40 font-mono">Investidores ativos</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-[#DCA405] mb-3">48h</div>
              <p className="text-sm text-white/40 font-mono">Antecipação IA</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-[#DCA405] mb-3">3%</div>
              <p className="text-sm text-white/40 font-mono">Max loss por ativo</p>
            </div>

            <div className="text-center">
              <div className="text-6xl font-mono font-bold text-[#DCA405] mb-3">R$497</div>
              <p className="text-sm text-white/40 font-mono">Flat fee mensal</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">COMO FUNCIONA</p>
            <h2 className="text-display-h2 text-white">IA Preditiva em 3 Passos</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/30 border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all">
              <div className="text-4xl font-mono font-bold text-[#DCA405] mb-4">01</div>
              <h3 className="text-display-h4 text-white mb-3">Análise Automática</h3>
              <p className="text-body-m text-white/60">
                IA analisa 10.000+ ativos diariamente, identificando padrões invisíveis ao olho humano.
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all">
              <div className="text-4xl font-mono font-bold text-[#DCA405] mb-4">02</div>
              <h3 className="text-display-h4 text-white mb-3">Antecipação 48h</h3>
              <p className="text-body-m text-white/60">
                Algoritmo preditivo identifica movimentos <span className="font-mono text-[#DCA405]">48h antes</span> do mercado reagir.
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all">
              <div className="text-4xl font-mono font-bold text-[#DCA405] mb-4">03</div>
              <h3 className="text-display-h4 text-white mb-3">Execução Automática</h3>
              <p className="text-body-m text-white/60">
                Rebalanceamento trimestral automático. Você só monitora resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-br from-[#DCA405] to-[#F5C542]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-display-h1 text-[#040812] mb-6">
              A IA trabalha. Os resultados são seus.
            </h2>
            <p className="text-body-l text-[#040812]/70 mb-8">
              Junte-se a 15.200 executivos que já constroem patrimônio sem virar especialistas financeiros.
            </p>
            <Link href="/rentabiliza">
              <Button
                size="lg"
                className="bg-[#040812] text-[#DCA405] px-12 py-6 rounded-xl font-bold text-lg hover:bg-[#0A1326] transition-all shadow-2xl"
              >
                COMEÇAR AGORA →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <p className="text-xl font-black text-white tracking-[0.3em]" style={{ fontFamily: 'Playfair Display' }}>
                RENTABILIZA
              </p>
              <p className="text-xs text-white/30 font-mono mt-2">IA Preditiva para Investimentos</p>
            </div>

            <div className="flex gap-8">
              <Link href="/brand-book" className="text-sm text-white/60 hover:text-[#DCA405] transition-colors">
                Brand Book
              </Link>
              <Link href="/rentabiliza" className="text-sm text-white/60 hover:text-[#DCA405] transition-colors">
                Leilões
              </Link>
              <Link href="/brandbook/guidelines" className="text-sm text-white/60 hover:text-[#DCA405] transition-colors">
                Guidelines
              </Link>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-white/20 font-mono">
              © 2026 Rentabiliza. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

    </div>
  )
}
