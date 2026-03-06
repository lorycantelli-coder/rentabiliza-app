'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function BrandStrategyPage() {
  const values = [
    { name: 'Empoderamento', desc: 'Devolver às pessoas o poder de investir com inteligência' },
    { name: 'Profundidade', desc: 'Análise técnica rigorosa e metodologia comprovada' },
    { name: 'Autenticidade', desc: 'Transparência radical em processos e resultados' },
    { name: 'Clareza', desc: 'Comunicação objetiva e dados concretos' },
    { name: 'Paixão', desc: 'Comprometimento genuíno com o sucesso do investidor' },
    { name: 'Coragem', desc: 'Visão contrarian que identifica valor onde outros veem risco' }
  ]

  const targetAudiences = [
    {
      name: 'Investidor para Revenda',
      capital: 'R$ 300k+',
      horizon: '6-18 meses',
      pain: 'Frustração com margens pequenas no mercado tradicional'
    },
    {
      name: 'Investidor para Renda Passiva',
      capital: 'R$ 300k+',
      horizon: '5+ anos',
      pain: 'Insatisfação com rendimentos baixos (0,3-0,5% a.m.)'
    },
    {
      name: 'Investidor Diversificador',
      capital: 'R$ 300k+',
      horizon: '3+ anos',
      pain: 'Preocupação com instabilidade econômica'
    },
    {
      name: 'Empresário Consolidado',
      capital: 'Alto patrimônio',
      horizon: 'Longo prazo',
      pain: 'Capital concentrado na empresa'
    },
    {
      name: 'Executivo C-Level',
      capital: 'Bônus significativos',
      horizon: 'Aposentadoria',
      pain: 'Acumula capital mas sem tempo para gerenciar'
    },
    {
      name: 'Investidor Iniciante',
      capital: 'Primeiro investimento',
      horizon: 'Variável',
      pain: 'Medo de perder dinheiro por inexperiência'
    }
  ]

  const differentiators = [
    { name: 'Foco Específico', desc: 'Revenda e potencial de valorização' },
    { name: 'Abordagem Completa', desc: 'Do processo de identificação até a revenda' },
    { name: 'Rede Estratégica', desc: 'Corretores parceiros para facilitar a revenda' },
    { name: 'Transparência', desc: 'Objetividade na comunicação de resultados potenciais' }
  ]

  const voiceAttributes = [
    { name: 'Sofisticado', desc: 'Linguagem técnica e financeira precisa' },
    { name: 'Transparente', desc: 'Honestidade radical sobre processos e riscos' },
    { name: 'Contrarian', desc: 'Pensamento independente que desafia o senso comum' },
    { name: 'Educativo', desc: 'Compartilha conhecimento para empoderar investidores' },
    { name: 'Confiante', desc: 'Assertivo sem arrogância, baseado em dados' }
  ]

  return (
    <div className="min-h-screen bg-[#040812] flex">

      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>

        <div className="py-4">
          <Link href="/" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            FOUNDATIONS
          </Link>
          <Link href="/guidelines" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            GUIDELINES
          </Link>
          <Link href="/movimento" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
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
          <Link href="/brand-strategy" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
            BRAND STRATEGY
          </Link>
        </div>

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
              Brand Strategy
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Nossa estratégia de marca completa: missão, visão, valores, posicionamento e públicos-alvo.
            </p>
          </div>

          {/* Section: Mission & Vision */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Missão & Visão</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-xl p-8">
                <h3 className="text-sm font-mono text-[#DCA405] tracking-[0.3em] mb-4">MISSÃO</h3>
                <p className="text-lg text-white leading-relaxed">
                  Identificamos, analisamos e arrematamos imóveis com até 40% de desconto,
                  garantindo segurança jurídica completa em todo o processo de aquisição via leilão.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-sm font-mono text-white/60 tracking-[0.3em] mb-4">VISÃO</h3>
                <p className="text-lg text-white leading-relaxed">
                  Ser a referência nacional em investimentos imobiliários via leilões,
                  democratizando o acesso a oportunidades de alto retorno com segurança e transparência.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Positioning */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Posicionamento</h2>

            <div className="bg-gradient-to-br from-[#DCA405]/20 via-[#DCA405]/10 to-transparent border border-[#DCA405]/30 rounded-2xl p-12 text-center">
              <p className="text-4xl font-serif text-white italic leading-relaxed">
                "Você investe, nós fazemos render."
              </p>
              <p className="text-white/60 mt-6 max-w-2xl mx-auto">
                Este posicionamento resume nossa proposta de valor: empoderar investidores com acesso a
                oportunidades premium de investimento imobiliário através de leilões estratégicos.
              </p>
            </div>
          </section>

          {/* Section: Core Values */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Valores Fundamentais</h2>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-serif text-white mb-2">{value.name}</h3>
                  <p className="text-white/60 text-sm">{value.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Diferenciação Competitiva */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Diferenciais Competitivos</h2>

            <div className="grid grid-cols-2 gap-6">
              {differentiators.map((diff, index) => (
                <div key={index} className="group bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[#DCA405]/50 hover:bg-[#DCA405]/5 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#DCA405]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-[#DCA405] font-bold text-lg">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-serif text-white mb-2 group-hover:text-[#DCA405] transition-colors">
                        {diff.name}
                      </h3>
                      <p className="text-white/60 text-sm">{diff.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Públicos-Alvo */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Públicos-Alvo Primários</h2>

            <div className="grid grid-cols-3 gap-4">
              {targetAudiences.map((audience, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <h3 className="text-lg font-serif text-white mb-4">{audience.name}</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-white/40 font-mono text-xs mb-1">CAPITAL</p>
                      <p className="text-white/70">{audience.capital}</p>
                    </div>
                    <div>
                      <p className="text-white/40 font-mono text-xs mb-1">HORIZONTE</p>
                      <p className="text-white/70">{audience.horizon}</p>
                    </div>
                    <div>
                      <p className="text-white/40 font-mono text-xs mb-1">DOR PRINCIPAL</p>
                      <p className="text-white/70">{audience.pain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Voice & Tone */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Voice & Tone</h2>

            <div className="mb-8">
              <h3 className="text-xl font-serif text-white mb-6">Atributos da Voz</h3>
              <div className="grid grid-cols-5 gap-4">
                {voiceAttributes.map((attr, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
                    <p className="text-[#DCA405] font-medium mb-2">{attr.name}</p>
                    <p className="text-white/60 text-xs">{attr.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-white mb-6">Exemplos de Tom</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-6">
                  <p className="text-xs font-mono text-blue-400 tracking-wider mb-3">FORMAL</p>
                  <p className="text-white/80 italic text-sm">
                    "Análise técnica demonstra potencial de valorização de 34% em 12 meses."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-lg p-6">
                  <p className="text-xs font-mono text-[#DCA405] tracking-wider mb-3">CASUAL</p>
                  <p className="text-white/80 italic text-sm">
                    "Enquanto todo mundo paga caro, você compra com desconto."
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20 rounded-lg p-6">
                  <p className="text-xs font-mono text-red-400 tracking-wider mb-3">PROVOCATIVO</p>
                  <p className="text-white/80 italic text-sm">
                    "Por que você ainda deixa dinheiro na Selic?"
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Proof Points */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Proof Points</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-xl p-8">
                <div className="text-5xl font-serif text-[#DCA405] mb-2">40%</div>
                <p className="text-white font-medium mb-1">Desconto Potencial</p>
                <p className="text-white/60 text-sm">Imóveis até 40% abaixo do valor de mercado</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="text-5xl font-serif text-white mb-2">100%</div>
                <p className="text-white font-medium mb-1">Segurança Jurídica</p>
                <p className="text-white/60 text-sm">Análise completa que elimina 95% dos riscos</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="text-5xl font-serif text-white mb-2">300k+</div>
                <p className="text-white font-medium mb-1">Ticket Médio</p>
                <p className="text-white/60 text-sm">Investimentos a partir de R$ 300 mil</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <div className="text-5xl font-serif text-white mb-2">6-18</div>
                <p className="text-white font-medium mb-1">Meses para ROI</p>
                <p className="text-white/60 text-sm">Retorno esperado em revenda rápida</p>
              </div>
            </div>
          </section>

          {/* Section: Inimigo / Anti-Brand */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Inimigo da Marca</h2>

            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-serif text-white mb-6">O que combatemos</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-lg">✕</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Complexidade Desnecessária</p>
                    <p className="text-white/60 text-sm">
                      Processos obscuros que mantêm investidores afastados de boas oportunidades
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-lg">✕</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Baixos Retornos Conservadores</p>
                    <p className="text-white/60 text-sm">
                      Investimentos tradicionais com margens pequenas que não acompanham crescimento patrimonial
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-400 text-lg">✕</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Falta de Transparência</p>
                    <p className="text-white/60 text-sm">
                      Gestores que escondem melhores estratégias e processos pouco claros
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
