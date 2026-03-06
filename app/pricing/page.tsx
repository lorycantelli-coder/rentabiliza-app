'use client'

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      price: "R$ 497",
      period: "/mês",
      description: "Ideal para começar com IA preditiva",
      features: [
        "Até R$ 500K sob gestão",
        "Algoritmo preditivo completo",
        "Antecipação 48h",
        "Rebalanceamento trimestral",
        "Dashboard em tempo real",
        "Relatórios mensais",
        "Suporte por email",
      ],
      cta: "COMEÇAR AGORA",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "R$ 997",
      period: "/mês",
      description: "Para investidores mais agressivos",
      features: [
        "Até R$ 2M sob gestão",
        "Todos recursos do Starter",
        "Algoritmo advanced (12 modelos)",
        "Rebalanceamento mensal",
        "Acesso a estratégias alternativas",
        "Análise de risco personalizada",
        "Suporte prioritário (WhatsApp)",
        "Consultoria trimestral (1h)",
      ],
      cta: "ASSINAR PROFESSIONAL",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Para family offices e investidores institucionais",
      features: [
        "Ilimitado sob gestão",
        "Todos recursos do Professional",
        "Algoritmo customizado",
        "Rebalanceamento semanal",
        "Hedge strategies exclusivas",
        "Gestor dedicado",
        "Suporte 24/7",
        "Consultoria mensal ilimitada",
        "API para integração",
      ],
      cta: "FALAR COM VENDAS",
      highlighted: false,
    },
  ]

  const comparison = [
    {
      category: "Fundos Tradicionais",
      setup: "Taxa de entrada: 1-2%",
      management: "Taxa de gestão: 2% a.a.",
      performance: "Performance fee: 20%",
      total: "~R$ 24K/ano (em R$ 1M)",
    },
    {
      category: "Rentabiliza Starter",
      setup: "R$ 0",
      management: "R$ 497/mês fixo",
      performance: "R$ 0",
      total: "R$ 5.964/ano",
    },
  ]

  const faqs = [
    {
      question: "Qual o investimento mínimo?",
      answer: "R$ 100.000 para o plano Starter. Não há máximo.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer: "Sim. Cancelamento sem multa com 30 dias de aviso prévio.",
    },
    {
      question: "Como funciona o rebalanceamento?",
      answer: "Automático. Você não faz nada. O algoritmo ajusta posições conforme periodicidade do plano.",
    },
    {
      question: "Vocês garantem os 34% de retorno?",
      answer: "Não. 34% foi a performance agregada em 2024. Passado não garante futuro. Investimentos têm risco.",
    },
    {
      question: "Posso sacar meu dinheiro?",
      answer: "Sim. Resgate em até 5 dias úteis (D+5).",
    },
    {
      question: "Há taxa de performance?",
      answer: "Não. Fee flat mensal. Não cobramos % sobre ganhos.",
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
              PRICING
            </span>

            <h1 className="text-display-xl text-white mb-6">
              <span className="text-[#DCA405]">Fee Flat.</span> Sem Surpresas.
            </h1>

            <p className="text-body-l text-white/60 max-w-3xl mx-auto">
              Transparência absoluta. Você paga uma taxa mensal fixa, não importa o quanto ganhe.
              Nosso sucesso é seu sucesso.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-lg p-8 ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-[#DCA405] to-[#F5C542] border-2 border-[#DCA405] scale-105 shadow-2xl'
                    : 'bg-white/[0.02] border border-white/10 hover:border-[#DCA405]/30'
                } transition-all`}
              >
                {plan.highlighted && (
                  <div className="text-xs font-bold text-[#040812] mb-4 text-center px-3 py-1 bg-[#040812]/10 rounded-full inline-block">
                    MAIS POPULAR
                  </div>
                )}

                <h3 className={`text-display-h4 ${plan.highlighted ? 'text-[#040812]' : 'text-white'} mb-2`}>
                  {plan.name}
                </h3>

                <div className="mb-4">
                  <span className={`text-5xl font-mono font-bold ${plan.highlighted ? 'text-[#040812]' : 'text-[#DCA405]'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.highlighted ? 'text-[#040812]/60' : 'text-white/40'}`}>
                    {plan.period}
                  </span>
                </div>

                <p className={`text-body-s ${plan.highlighted ? 'text-[#040812]/70' : 'text-white/60'} mb-6`}>
                  {plan.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className={plan.highlighted ? 'text-[#040812] mt-1' : 'text-[#DCA405] mt-1'}>✓</span>
                      <span className={`text-body-s ${plan.highlighted ? 'text-[#040812]/90' : 'text-white/80'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contato"
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                    plan.highlighted
                      ? 'bg-[#040812] text-[#DCA405] hover:bg-[#0A1326]'
                      : 'bg-[#DCA405] text-[#040812] hover:bg-[#F5C542]'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">COMPARAÇÃO</p>
            <h2 className="text-display-h2 text-white">Fundos Tradicionais vs Rentabiliza</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-black/30 border border-white/10 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-6 text-sm font-bold text-white tracking-wide">CATEGORIA</th>
                    <th className="text-left p-6 text-sm font-bold text-white tracking-wide">TAXA ENTRADA</th>
                    <th className="text-left p-6 text-sm font-bold text-white tracking-wide">GESTÃO ANUAL</th>
                    <th className="text-left p-6 text-sm font-bold text-white tracking-wide">PERFORMANCE</th>
                    <th className="text-left p-6 text-sm font-bold text-[#DCA405] tracking-wide">TOTAL/ANO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="p-6 text-body-m text-white">{row.category}</td>
                      <td className="p-6 text-body-s text-white/60">{row.setup}</td>
                      <td className="p-6 text-body-s text-white/60">{row.management}</td>
                      <td className="p-6 text-body-s text-white/60">{row.performance}</td>
                      <td className="p-6 text-body-m text-[#DCA405] font-bold">{row.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-[#DCA405]/10 border border-[#DCA405]/20 rounded-lg">
              <p className="text-body-m text-white/80">
                <span className="font-bold text-[#DCA405]">Economia de R$ 18K/ano</span> com o plano Starter
                vs fundos tradicionais (em portfolio de R$ 1M). E ainda com performance superior.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">FAQs</p>
            <h2 className="text-display-h2 text-white">Perguntas Frequentes</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 rounded-lg p-6 hover:border-[#DCA405]/30 transition-all"
              >
                <h4 className="text-display-h5 text-white mb-3">{faq.question}</h4>
                <p className="text-body-m text-white/60">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block p-4 bg-[#DCA405]/10 border border-[#DCA405]/20 rounded-full mb-6">
              <svg className="w-12 h-12 text-[#DCA405]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h2 className="text-display-h2 text-white mb-6">Garantia de 30 Dias</h2>
            <p className="text-body-l text-white/60 mb-8">
              Teste o algoritmo por 30 dias. Se não estiver satisfeito, cancelamento sem multa
              e reembolso proporcional.
            </p>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-mono font-bold text-[#DCA405] mb-2">30</div>
                <p className="text-sm text-white/60">Dias de Teste</p>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-[#DCA405] mb-2">0</div>
                <p className="text-sm text-white/60">Multa Cancelamento</p>
              </div>
              <div>
                <div className="text-3xl font-mono font-bold text-[#DCA405] mb-2">100%</div>
                <p className="text-sm text-white/60">Reembolso Proporcional</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#DCA405] to-[#F5C542]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-h1 text-[#040812] mb-6">
            Pronto para 34% Acima do Mercado?
          </h2>
          <p className="text-body-l text-[#040812]/70 mb-8 max-w-2xl mx-auto">
            Junte-se a 15.200 investidores. 30 dias de garantia. Cancelamento sem multa.
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
