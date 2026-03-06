'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function MovimentoPage() {
  const values = [
    {
      name: 'Empoderamento',
      description: 'Devolver às pessoas o poder de investir com inteligência',
      color: '#DCA405'
    },
    {
      name: 'Profundidade',
      description: 'Análise técnica rigorosa e metodologia comprovada',
      color: '#DCA405'
    },
    {
      name: 'Autenticidade',
      description: 'Transparência radical em processos e resultados',
      color: '#DCA405'
    },
    {
      name: 'Clareza',
      description: 'Comunicação objetiva e dados concretos',
      color: '#DCA405'
    },
    {
      name: 'Paixão',
      description: 'Comprometimento genuíno com o sucesso do investidor',
      color: '#DCA405'
    },
    {
      name: 'Coragem',
      description: 'Visão contrarian que identifica valor onde outros veem risco',
      color: '#DCA405'
    }
  ]

  return (
    <div className="min-h-screen bg-[#040812] flex">

      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>

        {/* Menu */}
        <div className="py-4">
          <Link href="/" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            FOUNDATIONS
          </Link>
          <Link href="/guidelines" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            GUIDELINES
          </Link>
          <Link href="/movimento" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
            MOVIMENTO
          </Link>
          <Link href="/logo" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            LOGO
          </Link>
          <Link href="/icons" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            ICONS
          </Link>
          <Link href="/moodboard" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            MOODBOARD
          </Link>
          <Link href="/brand-strategy" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            BRAND STRATEGY
          </Link>
        </div>

        {/* Version */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
            VERSION 2.0
          </p>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">

          {/* Header */}
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              BRAND IDENTITY
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              Movimento
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Nosso manifesto, propósito e os valores que norteiam cada decisão estratégica.
            </p>
          </div>

          {/* Section: Manifesto */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Manifesto Rentabiliza</h2>

            <div className="bg-gradient-to-br from-[#DCA405]/20 via-[#DCA405]/10 to-transparent border border-[#DCA405]/30 rounded-2xl p-12 mb-8">
              <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                <p className="text-2xl font-serif italic text-white">
                  Acreditamos que investir não deveria ser um privilégio de poucos.
                </p>

                <p>
                  Durante anos, as melhores oportunidades do mercado imobiliário permaneceram invisíveis para a maioria dos investidores.
                  Leilões judiciais, arrematações estratégicas, imóveis com descontos significativos — tudo reservado para quem tinha acesso
                  privilegiado e conhecimento técnico especializado.
                </p>

                <p>
                  <strong className="text-[#DCA405]">Nós mudamos isso.</strong>
                </p>

                <p>
                  Identificamos imóveis com até 40% de desconto, realizamos análise jurídica completa, garantimos segurança em todo processo
                  e entregamos oportunidades reais de multiplicação de capital. Não vendemos sonhos — entregamos resultados concretos,
                  baseados em metodologia rigorosa e transparência radical.
                </p>

                <p className="text-xl font-serif italic text-white border-l-4 border-[#DCA405] pl-6 py-2">
                  "Você investe, nós fazemos render."
                </p>

                <p>
                  Este é nosso compromisso: empoderar investidores com acesso a oportunidades premium, transformar complexidade em clareza
                  e converter análise técnica em rentabilidade real. Somos guiados por valores inegociáveis e movidos pela paixão de ver
                  nossos clientes alcançarem independência financeira através de investimentos inteligentes.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Propósito */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Nosso Propósito</h2>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="w-16 h-16 bg-[#DCA405]/20 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-[#DCA405]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Por que existimos</h3>
                <p className="text-white/70 leading-relaxed">
                  Democratizar o acesso a investimentos imobiliários de alto retorno, removendo as barreiras de complexidade,
                  conhecimento técnico e acesso privilegiado que historicamente limitaram estas oportunidades a poucos.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="w-16 h-16 bg-red-500/20 rounded-lg mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-white mb-4">Nosso Inimigo</h3>
                <p className="text-white/70 leading-relaxed">
                  <strong className="text-[#DCA405]">Complexidade desnecessária</strong> que mantém investidores afastados de boas oportunidades.
                  <strong className="text-[#DCA405]"> Baixos retornos</strong> que não acompanham o crescimento patrimonial necessário.
                  <strong className="text-[#DCA405]"> Falta de transparência</strong> que gera insegurança e medo.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Core Values */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Valores Fundamentais</h2>
            <p className="text-white/60 mb-12 text-lg">
              Seis princípios inegociáveis que guiam cada decisão, processo e interação na Rentabiliza.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#DCA405]/50 hover:bg-[#DCA405]/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#DCA405] font-bold text-xl">{index + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#DCA405] transition-colors">
                        {value.name}
                      </h3>
                      <p className="text-white/70 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-xs font-mono text-white/40 tracking-wider">
                      VALOR #{(index + 1).toString().padStart(2, '0')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Como Valores Aparecem na Prática */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Valores em Ação</h2>

            <div className="space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DCA405] font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Empoderamento</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong className="text-[#DCA405]">Na prática:</strong> Compartilhamos nossa metodologia completa de análise,
                      educamos investidores sobre due diligence e revelamos processos que normalmente são "caixas-pretas".
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DCA405] font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Profundidade</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong className="text-[#DCA405]">Na prática:</strong> Análise de 95% dos riscos jurídicos, verificação de matrículas,
                      cálculo preciso de potencial de valorização e comparação com mercado tradicional em 3+ fontes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DCA405] font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Autenticidade</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong className="text-[#DCA405]">Na prática:</strong> Comunicamos riscos antes de oportunidades, mostramos casos reais
                      (sucessos e desafios), e evitamos promessas irreais ou linguagem de vendedor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DCA405] font-bold">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Clareza</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong className="text-[#DCA405]">Na prática:</strong> Dados objetivos (desconto de 40%, ROI estimado, prazo de revenda),
                      comunicação direta sem jargões desnecessários e explicações técnicas acessíveis.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DCA405] font-bold">5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Paixão</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong className="text-[#DCA405]">Na prática:</strong> Acompanhamento próximo durante todo processo, disponibilidade
                      para dúvidas, celebração conjunta de resultados e compromisso genuíno com sucesso do cliente.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="flex items-start gap-6">
                  <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-[#DCA405] font-bold">6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">Coragem</h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      <strong className="text-[#DCA405]">Na prática:</strong> Pensamento contrarian que identifica valor onde mercado vê risco,
                      análise independente que desafia senso comum e confiança em metodologia própria baseada em dados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Voice & Tone Examples */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Exemplos de Voz & Tom</h2>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-sm font-mono text-blue-400 tracking-wider mb-3">FORMAL</h3>
                <p className="text-white/80 italic">
                  "Análise técnica demonstra potencial de valorização de 34% em 12 meses."
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-xl p-6">
                <h3 className="text-sm font-mono text-[#DCA405] tracking-wider mb-3">CASUAL</h3>
                <p className="text-white/80 italic">
                  "Enquanto todo mundo paga caro, você compra com desconto."
                </p>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-xl p-6">
                <h3 className="text-sm font-mono text-red-400 tracking-wider mb-3">PROVOCATIVO</h3>
                <p className="text-white/80 italic">
                  "Por que você ainda deixa dinheiro na Selic?"
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
