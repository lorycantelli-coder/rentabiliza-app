'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function BrandStrategyPage() {
  return (
    <div className="min-h-screen bg-[#040812] text-white">
      {/* Header */}
      <div className="border-b border-white/10 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/brandbook" className="text-white/40 hover:text-white transition-colors font-mono text-sm">
              ← BRAND
            </Link>
            <div className="w-px h-6 bg-white/10" />
            <p className="font-mono text-sm text-white/60">STRATEGY</p>
            <div className="w-px h-6 bg-white/10" />
            <p className="font-mono text-sm text-[#DCA405]">V1.0</p>
          </div>
          <Badge className="bg-[#DCA405] text-[#040812] border-0 font-mono text-[10px] tracking-[0.2em]">
            LIGHT EDITION
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-8 py-16">
        {/* Title */}
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black text-white mb-20 leading-[0.9] tracking-[-0.02em]">
          Brand Strategy
        </h1>

        {/* 01 - Mission & Vision */}
        <section className="mb-20">
          <p className="font-mono text-[10px] text-[#DCA405] mb-4 tracking-[0.25em]">01</p>
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Mission & Vision</h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm font-mono text-white/40 mb-3 tracking-wide">WHY WE EXIST</p>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                Democratizar investimentos de alto desempenho através de tecnologia preditiva,
                transformando complexidade financeira em decisões simples e resultados mensuráveis
                para quem tem vida além do mercado financeiro.
              </p>
            </div>

            <div>
              <p className="text-sm font-mono text-white/40 mb-3 tracking-wide">WHERE WE'RE GOING</p>
              <p className="text-xl text-white/90 leading-relaxed font-light">
                Um mundo onde qualquer executivo ou empreendedor pode construir patrimônio sólido
                sem precisar se tornar um especialista financeiro — onde a tecnologia trabalha 24/7
                e você foca no que realmente importa.
              </p>
            </div>
          </div>
        </section>

        {/* 02 - Core Values */}
        <section className="mb-20">
          <p className="font-mono text-[10px] text-[#DCA405] mb-4 tracking-[0.25em]">02</p>
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Results Over Promises</h3>
              <p className="text-sm text-white/60 font-light">
                34% acima do mercado não é promessa, é dado auditado. Proof beats promise, sempre.
              </p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Radical Transparency</h3>
              <p className="text-sm text-white/60 font-light">
                Fees visíveis, performance auditada, risco explícito. Sem letras miúdas ou pegadinhas.
              </p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Simplicity Without Sacrifice</h3>
              <p className="text-sm text-white/60 font-light">
                Interface simples não significa tecnologia simplória. IA processa complexidade, você vê clareza.
              </p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Data-Driven Decisions</h3>
              <p className="text-sm text-white/60 font-light">
                Zero palpites. Toda decisão é rastreável a dados, padrões históricos e probabilidades calculadas.
              </p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Long-Term Thinking</h3>
              <p className="text-sm text-white/60 font-light">
                Construção de patrimônio, não especulação. Horizonte de 5-10 anos, não semanas.
              </p>
            </div>

            <div className="bg-white/[0.02] rounded-lg p-6 border border-white/10 hover:border-[#DCA405]/30 transition-all">
              <h3 className="text-lg font-bold text-white mb-2">Skin in the Game</h3>
              <p className="text-sm text-white/60 font-light">
                Nosso modelo de sucesso está atrelado ao seu. Não ganhamos se você não ganha.
              </p>
            </div>
          </div>
        </section>

        {/* 03 - Brand Voice */}
        <section className="mb-20">
          <p className="font-mono text-[10px] text-[#DCA405] mb-4 tracking-[0.25em]">03</p>
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Brand Voice</h2>

          <div className="space-y-6">
            <div className="border-l-2 border-[#DCA405] pl-6">
              <h3 className="text-lg font-bold text-white mb-2">Direct</h3>
              <p className="text-sm text-white/60 mb-3 font-light">
                Frases curtas. Sem enrolação. Zero jargão desnecessário.
              </p>
              <p className="text-sm font-mono text-[#DCA405]">
                "34% acima do mercado em 12 meses"
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-lg font-bold text-white mb-2">Technical</h3>
              <p className="text-sm text-white/60 mb-3 font-light">
                Dados específicos, não generalizações. Métricas precisas, não "muito bom".
              </p>
              <p className="text-sm font-mono text-white/70">
                "IA identifica padrões 48h antes do mercado reagir"
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-lg font-bold text-white mb-2">Confident</h3>
              <p className="text-sm text-white/60 mb-3 font-light">
                Afirmações sem hedge words. "Diversifica automaticamente", não "pode diversificar".
              </p>
              <p className="text-sm font-mono text-white/70">
                "Você nunca perde mais que 3% em um único ativo"
              </p>
            </div>

            <div className="border-l-2 border-white/20 pl-6">
              <h3 className="text-lg font-bold text-white mb-2">Human</h3>
              <p className="text-sm text-white/60 mb-3 font-light">
                Tom conversacional, sem academicismo financeiro. Falamos como gente, não como robôs.
              </p>
              <p className="text-sm font-mono text-white/70">
                "Enquanto você dorme, a IA trabalha"
              </p>
            </div>
          </div>
        </section>

        {/* 04 - Positioning */}
        <section className="mb-20">
          <p className="font-mono text-[10px] text-[#DCA405] mb-4 tracking-[0.25em]">04</p>
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Positioning</h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-mono text-white/40 mb-3 tracking-wide">POSITIONING STATEMENT</p>
              <p className="text-lg text-white/90 leading-relaxed font-light">
                Ao contrário de corretoras tradicionais que lucram com transações e assessores que
                cobram percentual fixo independente de resultado, <strong className="text-[#DCA405]">Rentabiliza
                usa IA preditiva para maximizar rentabilidade</strong> enquanto cobra apenas pelo valor
                gerado — alinhando nosso sucesso ao seu.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5">
                <p className="text-xs font-mono text-[#DCA405] mb-2 tracking-wide">CATEGORY</p>
                <p className="text-base text-white font-medium">
                  Plataforma de Investimentos com IA Preditiva
                </p>
              </div>

              <div className="bg-white/[0.02] rounded-lg p-6 border border-white/5">
                <p className="text-xs font-mono text-[#DCA405] mb-2 tracking-wide">TARGET</p>
                <p className="text-base text-white font-medium">
                  Executivos e empreendedores (30-55 anos, R$ 100K-1M investível)
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent rounded-lg p-6 border border-[#DCA405]/30">
              <p className="text-xs font-mono text-[#DCA405] mb-3 tracking-wide">DIFFERENTIATOR</p>
              <div className="space-y-2 text-sm text-white/80">
                <p>• IA preditiva identifica oportunidades 48h antes do mercado</p>
                <p>• Diversificação automática sem esforço manual</p>
                <p>• Gestão de risco 3% (nunca perde mais que isso por ativo)</p>
                <p>• Resultados auditados: 34% acima do mercado em 12 meses</p>
              </div>
            </div>
          </div>
        </section>

        {/* 05 - Competitive Landscape */}
        <section className="mb-20">
          <p className="font-mono text-[10px] text-[#DCA405] mb-4 tracking-[0.25em]">05</p>
          <h2 className="text-3xl font-black text-white mb-8 tracking-tight">Competitive Landscape</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-4 px-4 text-sm font-mono text-white/40">CRITERIA</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-[#DCA405]">Rentabiliza</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-white/60">Corretora Tradicional</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-white/60">Assessor Financeiro</th>
                  <th className="text-left py-4 px-4 text-sm font-medium text-white/60">DIY / Sozinho</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/60 font-mono text-xs">Time to Value</td>
                  <td className="py-4 px-4 text-white">3 cliques, resultados em 48h</td>
                  <td className="py-4 px-4 text-white/40">Semanas de pesquisa manual</td>
                  <td className="py-4 px-4 text-white/40">1-2 meses para portfólio</td>
                  <td className="py-4 px-4 text-white/40">Meses/anos de aprendizado</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/60 font-mono text-xs">Cost Model</td>
                  <td className="py-4 px-4 text-white">R$ 497/mês flat</td>
                  <td className="py-4 px-4 text-white/40">% por transação</td>
                  <td className="py-4 px-4 text-white/40">1-2% do patrimônio/ano</td>
                  <td className="py-4 px-4 text-white/40">Grátis (mas seu tempo vale?)</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/60 font-mono text-xs">AI Usage</td>
                  <td className="py-4 px-4 text-white">IA preditiva nativa</td>
                  <td className="py-4 px-4 text-white/40">Nenhuma ou básica</td>
                  <td className="py-4 px-4 text-white/40">Dependente do assessor</td>
                  <td className="py-4 px-4 text-white/40">Você que se vire</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/60 font-mono text-xs">Risk Management</td>
                  <td className="py-4 px-4 text-white">3% max loss automático</td>
                  <td className="py-4 px-4 text-white/40">Manual (você decide)</td>
                  <td className="py-4 px-4 text-white/40">Conservador demais</td>
                  <td className="py-4 px-4 text-white/40">YOLO ou paralisia</td>
                </tr>

                <tr className="border-b border-white/10">
                  <td className="py-4 px-4 text-white/60 font-mono text-xs">Ongoing Support</td>
                  <td className="py-4 px-4 text-white">24/7 IA + suporte humano</td>
                  <td className="py-4 px-4 text-white/40">Horário comercial</td>
                  <td className="py-4 px-4 text-white/40">Reuniões trimestrais</td>
                  <td className="py-4 px-4 text-white/40">Google + fóruns</td>
                </tr>

                <tr>
                  <td className="py-4 px-4 text-white/60 font-mono text-xs">Proven Results</td>
                  <td className="py-4 px-4 text-white font-bold">34% above market</td>
                  <td className="py-4 px-4 text-white/40">Variável</td>
                  <td className="py-4 px-4 text-white/40">8-12% típico</td>
                  <td className="py-4 px-4 text-white/40">-20% a +50% (loteria)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Back Link */}
        <div className="pt-12 border-t border-white/10">
          <Link
            href="/brandbook"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-[#DCA405] transition-colors font-mono"
          >
            ← Back to Brandbook
          </Link>
        </div>
      </div>
    </div>
  )
}
