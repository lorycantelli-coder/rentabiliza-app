'use client'

import { DataMetric } from '@/components/ui/data-metric'

export default function CasosSucessoPage() {
  const testimonials = [
    {
      name: "Ricardo Costa",
      role: "CEO, TechCorp",
      company: "Empresa de tecnologia com 200 funcionários",
      result: "+42% em 8 meses",
      quote: "Não tenho tempo de acompanhar mercado. A IA da Rentabiliza faz isso por mim. Resultados auditados, sem ruído emocional.",
      avatar: "RC",
      investment: "R$ 2.5M",
      period: "8 meses",
    },
    {
      name: "Ana Paula Lima",
      role: "Médica Cirurgiã",
      company: "Hospital São Lucas",
      result: "+38% em 12 meses",
      quote: "Sempre investi em fundos tradicionais e ficava na média do mercado. Com a Rentabiliza, estou 38% acima. A diferença? IA preditiva.",
      avatar: "AP",
      investment: "R$ 850K",
      period: "12 meses",
    },
    {
      name: "Carlos Mendes",
      role: "Diretor Comercial",
      company: "Multinacional de Varejo",
      result: "+45% em 6 meses",
      quote: "Antecipação de 48h faz toda diferença. Enquanto outros reagem ao noticiário, eu já estou posicionado. Performance impressionante.",
      avatar: "CM",
      investment: "R$ 1.8M",
      period: "6 meses",
    },
    {
      name: "Fernanda Alves",
      role: "Empreendedora",
      company: "Fundadora, EcoStyle",
      result: "+51% em 10 meses",
      quote: "Vendi minha empresa e precisava fazer o dinheiro render. Rentabiliza foi a melhor decisão: 51% acima do CDI em menos de 1 ano.",
      avatar: "FA",
      investment: "R$ 4.2M",
      period: "10 meses",
    },
  ]

  const caseStudies = [
    {
      title: "Executivo de Tech Triplica Portfolio em 18 Meses",
      industry: "Tecnologia",
      challenge: "Portfolio estagnado em fundos tradicionais, sem tempo para estudar mercado.",
      solution: "Migração completa para estratégia IA preditiva da Rentabiliza com rebalanceamento trimestral.",
      results: [
        "208% de retorno em 18 meses",
        "Zero intervenção manual necessária",
        "Max drawdown de apenas 4.2%",
      ],
      metrics: {
        investment: "R$ 1.5M",
        return: "R$ 3.1M",
        period: "18 meses",
      },
    },
    {
      title: "Médica Supera Fundos de Private Banking",
      industry: "Saúde",
      challenge: "Alta taxa de administração em private banking, retornos medíocres.",
      solution: "100% do patrimônio gerido por IA com fee flat de R$ 497/mês.",
      results: [
        "156% de retorno em 12 meses",
        "Economia de R$ 180K em fees",
        "Outperformance de 34% vs banco anterior",
      ],
      metrics: {
        investment: "R$ 2.8M",
        return: "R$ 4.4M",
        period: "12 meses",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-[#040812]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden gradient-hero">
        <div className="absolute inset-0 gradient-subtle-glow opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-label text-[#DCA405] px-4 py-2 bg-[#DCA405]/10 rounded-full border border-[#DCA405]/20 inline-block mb-6">
              CASOS DE SUCESSO
            </span>

            <h1 className="text-display-xl text-white mb-6">
              Resultados <span className="text-[#DCA405]">Auditados.</span> Não Promessas.
            </h1>

            <p className="text-body-l text-white/60 max-w-3xl mx-auto">
              Executivos, médicos, empreendedores. Perfis diferentes, mesma estratégia: IA preditiva
              gerando retornos consistentemente acima do mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Aggregate Results */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">RESULTADOS CONSOLIDADOS</p>
            <h2 className="text-display-h2 text-white">Performance Agregada 2024</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <DataMetric
              value="34%"
              description="Acima do benchmark"
              variant="default"
              className="items-center"
            />
            <DataMetric
              value="89%"
              description="Taxa de sucesso"
              variant="default"
              className="items-center"
            />
            <DataMetric
              value="3.2%"
              description="Max drawdown médio"
              variant="default"
              className="items-center"
            />
            <DataMetric
              value="15.2K"
              description="Investidores ativos"
              variant="default"
              className="items-center"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">DEPOIMENTOS</p>
            <h2 className="text-display-h2 text-white">O Que Dizem Nossos Investidores</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-black/30 border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-full flex items-center justify-center text-[#040812] font-bold text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-display-h5 text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#DCA405] font-mono">{testimonial.role}</p>
                    <p className="text-xs text-white/40 mt-1">{testimonial.company}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-mono font-bold text-[#DCA405]">{testimonial.result}</div>
                    <p className="text-xs text-white/40">{testimonial.period}</p>
                  </div>
                </div>

                <p className="text-body-m text-white/80 mb-4 italic">"{testimonial.quote}"</p>

                <div className="flex gap-4 text-xs text-white/30 font-mono">
                  <span>Investimento: {testimonial.investment}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">ESTUDOS DE CASO</p>
            <h2 className="text-display-h2 text-white">Análises Detalhadas</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <span className="text-xs text-[#DCA405] font-mono mb-2 block">{study.industry}</span>
                    <h3 className="text-display-h4 text-white mb-4">{study.title}</h3>
                  </div>
                  <div className="text-4xl font-mono font-bold text-[#DCA405]/20">{String(index + 1).padStart(2, '0')}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-wide">DESAFIO</h4>
                    <p className="text-body-s text-white/60">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-2 tracking-wide">SOLUÇÃO</h4>
                    <p className="text-body-s text-white/60">{study.solution}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white mb-3 tracking-wide">RESULTADOS</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#DCA405] mt-1">✓</span>
                        <span className="text-body-s text-white/80">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-8 pt-6 border-t border-white/5">
                  <div>
                    <p className="text-xs text-white/30 font-mono mb-1">INVESTIMENTO</p>
                    <p className="text-lg font-bold text-white">{study.metrics.investment}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-mono mb-1">RETORNO</p>
                    <p className="text-lg font-bold text-[#DCA405]">{study.metrics.return}</p>
                  </div>
                  <div>
                    <p className="text-xs text-white/30 font-mono mb-1">PERÍODO</p>
                    <p className="text-lg font-bold text-white">{study.metrics.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#DCA405] to-[#F5C542]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-h1 text-[#040812] mb-6">
            Próximo Caso de Sucesso? O Seu.
          </h2>
          <p className="text-body-l text-[#040812]/70 mb-8 max-w-2xl mx-auto">
            Junte-se a executivos que já construíram patrimônio sem virar especialistas financeiros.
          </p>
          <a
            href="/contato"
            className="inline-block bg-[#040812] text-[#DCA405] px-12 py-6 rounded-xl font-bold text-lg hover:bg-[#0A1326] transition-all shadow-2xl"
          >
            COMEÇAR AGORA →
          </a>
        </div>
      </section>
    </div>
  )
}
