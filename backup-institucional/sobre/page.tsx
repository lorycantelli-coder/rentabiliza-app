'use client'

import { DataMetric } from '@/components/ui/data-metric'

export default function SobrePage() {
  const team = [
    {
      name: "Dr. Rafael Costa",
      role: "CEO & Co-founder",
      bio: "PhD em Machine Learning pela Stanford. Ex-quantitative trader no JP Morgan.",
    },
    {
      name: "Mariana Silva",
      role: "CTO",
      bio: "Engenheira de IA com 12 anos de experiência em sistemas preditivos de alta frequência.",
    },
    {
      name: "Lucas Fernandes",
      role: "Head of Data Science",
      bio: "Ex-Google Brain. Especialista em deep learning aplicado a mercados financeiros.",
    },
    {
      name: "Ana Carolina Lima",
      role: "Head of Product",
      bio: "15 anos em fintech. Liderou produtos em XP Investimentos e Nubank.",
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
              SOBRE NÓS
            </span>

            <h1 className="text-display-xl text-white mb-6">
              IA Preditiva <span className="text-[#DCA405]">Não é Ficção.</span> É Ciência.
            </h1>

            <p className="text-body-l text-white/60 max-w-3xl mx-auto">
              Fundada em 2022 por ex-quants de Stanford e Google Brain, a Rentabiliza democratiza
              acesso a algoritmos preditivos antes restritos a fundos bilionários.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="text-4xl font-mono font-bold text-[#DCA405] mb-4">01</div>
              <h3 className="text-display-h4 text-white mb-3">Missão</h3>
              <p className="text-body-m text-white/60">
                Democratizar IA preditiva de nível institucional para investidores individuais,
                eliminando viés humano e decisões emocionais.
              </p>
            </div>

            <div>
              <div className="text-4xl font-mono font-bold text-[#DCA405] mb-4">02</div>
              <h3 className="text-display-h4 text-white mb-3">Visão</h3>
              <p className="text-body-m text-white/60">
                Ser a plataforma líder de investimentos orientados por IA na América Latina,
                com 100.000 investidores até 2027.
              </p>
            </div>

            <div>
              <div className="text-4xl font-mono font-bold text-[#DCA405] mb-4">03</div>
              <h3 className="text-display-h4 text-white mb-3">Valores</h3>
              <p className="text-body-m text-white/60">
                Transparência absoluta, auditoria pública de resultados, e obsessão por
                performance acima de tudo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">NOSSA TRAJETÓRIA</p>
            <h2 className="text-display-h2 text-white">Crescimento Exponencial</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <DataMetric
              value="15.2K"
              description="Investidores Ativos"
              variant="default"
              className="items-center"
            />
            <DataMetric
              value="R$ 890M"
              description="Sob Gestão"
              variant="default"
              className="items-center"
            />
            <DataMetric
              value="34%"
              description="Acima Mercado (12m)"
              variant="default"
              className="items-center"
            />
            <DataMetric
              value="2022"
              description="Fundação"
              variant="default"
              className="items-center"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">TIME DE ELITE</p>
            <h2 className="text-display-h2 text-white">Liderados por PhDs e Ex-Big Tech</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white/[0.02] border border-white/10 rounded-lg p-6 hover:border-[#DCA405]/30 transition-all"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-full mb-4"></div>
                <h4 className="text-display-h5 text-white mb-1">{member.name}</h4>
                <p className="text-sm text-[#DCA405] font-mono mb-3">{member.role}</p>
                <p className="text-body-s text-white/40">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">NOSSA HISTÓRIA</p>
            <h2 className="text-display-h2 text-white">De Garage Startup a Líder</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                year: "2022",
                title: "Fundação",
                description: "Rafael e Mariana lançam MVP com 50 beta testers. Primeiro algoritmo preditivo operacional."
              },
              {
                year: "2023",
                title: "Série A - R$ 12M",
                description: "Captação liderada por fundo de VC especializado em fintech. Expansão do time de data science."
              },
              {
                year: "2024",
                title: "15K Investidores",
                description: "Marca de 15.000 investidores atingida. Lançamento de algoritmo v2.0 com 48h de antecipação."
              },
              {
                year: "2025",
                title: "R$ 890M AUM",
                description: "Ativos sob gestão ultrapassam R$ 890 milhões. Performance 34% acima do benchmark."
              },
            ].map((milestone, index) => (
              <div key={milestone.year} className="flex gap-8">
                <div className="flex-shrink-0 w-24">
                  <div className="text-4xl font-mono font-bold text-[#DCA405]">{milestone.year}</div>
                </div>
                <div className="flex-1 pb-8 border-l-2 border-[#DCA405]/20 pl-8">
                  <h4 className="text-display-h4 text-white mb-2">{milestone.title}</h4>
                  <p className="text-body-m text-white/60">{milestone.description}</p>
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
            Junte-se a 15.200 Investidores Inteligentes
          </h2>
          <p className="text-body-l text-[#040812]/70 mb-8 max-w-2xl mx-auto">
            A IA trabalha 24/7. Você só monitora resultados.
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
