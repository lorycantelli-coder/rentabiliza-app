'use client'

export default function MetodologiaPage() {
  const steps = [
    {
      number: "01",
      title: "Ingestão de Dados",
      description: "Análise de 10.000+ ativos diariamente",
      details: [
        "Preços históricos (5 anos de dados)",
        "Indicadores técnicos (50+ métricas)",
        "Notícias e sentiment analysis (tempo real)",
        "Dados macroeconômicos (global)",
        "Volumes e liquidez (todas exchanges)",
      ],
    },
    {
      number: "02",
      title: "Processamento IA",
      description: "Algoritmo preditivo com deep learning",
      details: [
        "Redes neurais LSTM para séries temporais",
        "Ensemble de 12 modelos diferentes",
        "Backtesting em 8 anos de dados",
        "Validação cruzada temporal",
        "Métricas de Sharpe ratio > 2.5",
      ],
    },
    {
      number: "03",
      title: "Antecipação 48h",
      description: "Identificação de padrões pré-mercado",
      details: [
        "Detecção de divergências algorítmicas",
        "Análise de fluxo de ordens",
        "Correlações ocultas entre ativos",
        "Predição de pontos de reversão",
        "Score de confiança (0-100%)",
      ],
    },
    {
      number: "04",
      title: "Gestão de Risco",
      description: "Stop loss automático e diversificação",
      details: [
        "Max 3% de perda por ativo",
        "Diversificação em 15-25 ativos",
        "Rebalanceamento trimestral",
        "Hedging em cenários de alta volatilidade",
        "Capital preservation em bear markets",
      ],
    },
    {
      number: "05",
      title: "Execução Automática",
      description: "Operações via API sem intervenção humana",
      details: [
        "Integração direta com corretoras",
        "Execução em milissegundos",
        "Slippage < 0.1%",
        "Custos de transação otimizados",
        "Auditoria completa de todas operações",
      ],
    },
    {
      number: "06",
      title: "Monitoramento 24/7",
      description: "Dashboard em tempo real + relatórios mensais",
      details: [
        "Performance diária atualizada",
        "Alertas de movimentos significativos",
        "Relatórios mensais auditados",
        "Transparência total de operações",
        "Acesso a histórico completo",
      ],
    },
  ]

  const tech = [
    {
      category: "Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
    },
    {
      category: "Data Infrastructure",
      technologies: ["Apache Kafka", "TimescaleDB", "Redis", "PostgreSQL"],
    },
    {
      category: "Cloud & DevOps",
      technologies: ["AWS (SageMaker, EC2, S3)", "Docker", "Kubernetes", "Terraform"],
    },
    {
      category: "Monitoring",
      technologies: ["Grafana", "Prometheus", "Sentry", "DataDog"],
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
              METODOLOGIA
            </span>

            <h1 className="text-display-xl text-white mb-6">
              Como a IA <span className="text-[#DCA405]">Antecipa</span> o Mercado
            </h1>

            <p className="text-body-l text-white/60 max-w-3xl mx-auto">
              Pipeline de dados → Deep learning → Antecipação 48h → Execução automática.
              Transparência absoluta. Zero caixa preta.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">PROCESSO COMPLETO</p>
            <h2 className="text-display-h2 text-white">6 Etapas do Algoritmo</h2>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="bg-white/[0.02] border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-mono font-bold text-[#040812]">{step.number}</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-display-h4 text-white mb-2">{step.title}</h3>
                    <p className="text-body-m text-[#DCA405] mb-4">{step.description}</p>

                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#DCA405] mt-1 flex-shrink-0">→</span>
                          <span className="text-body-s text-white/60">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">TECH STACK</p>
            <h2 className="text-display-h2 text-white">Tecnologia de Ponta</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {tech.map((category) => (
              <div
                key={category.category}
                className="bg-black/30 border border-white/10 rounded-lg p-6 hover:border-[#DCA405]/30 transition-all"
              >
                <h4 className="text-sm font-bold text-white mb-4 tracking-wide">{category.category}</h4>
                <ul className="space-y-2">
                  {category.technologies.map((tech, i) => (
                    <li key={i} className="text-body-s text-white/60 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#DCA405] rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It's Different */}
      <section className="py-24 bg-black border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-label text-[#DCA405] mb-4">DIFERENCIAIS</p>
            <h2 className="text-display-h2 text-white">Por Que Somos Diferentes</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Fundos Tradicionais",
                  negatives: [
                    "Decisões humanas (viés emocional)",
                    "Reação ao noticiário (atrasados)",
                    "Taxas de 2% + 20% performance",
                    "Pouca transparência",
                  ],
                },
                {
                  title: "Rentabiliza",
                  positives: [
                    "IA 100% objetiva (zero emoção)",
                    "Antecipação 48h (preditivo)",
                    "Taxa flat R$ 497/mês",
                    "Transparência total + auditoria",
                  ],
                },
              ].map((column, index) => (
                <div key={index} className="bg-white/[0.02] border border-white/10 rounded-lg p-6">
                  <h4 className="text-display-h5 text-white mb-6">{column.title}</h4>
                  <ul className="space-y-3">
                    {(column.negatives || column.positives)?.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className={column.negatives ? "text-red-500 mt-1" : "text-[#DCA405] mt-1"}>
                          {column.negatives ? "✗" : "✓"}
                        </span>
                        <span className="text-body-s text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-label text-[#DCA405] mb-4">TRANSPARÊNCIA</p>
              <h2 className="text-display-h2 text-white mb-6">Auditoria Pública</h2>
              <p className="text-body-l text-white/60">
                Todos os resultados são auditados mensalmente por firma independente (Ernst & Young).
                Histórico completo disponível para clientes.
              </p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-lg p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-mono font-bold text-[#DCA405] mb-2">100%</div>
                  <p className="text-sm text-white/60">Operações Rastreáveis</p>
                </div>
                <div>
                  <div className="text-4xl font-mono font-bold text-[#DCA405] mb-2">Ernst & Young</div>
                  <p className="text-sm text-white/60">Auditoria Mensal</p>
                </div>
                <div>
                  <div className="text-4xl font-mono font-bold text-[#DCA405] mb-2">0</div>
                  <p className="text-sm text-white/60">Operações Ocultas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#DCA405] to-[#F5C542]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-display-h1 text-[#040812] mb-6">
            IA Transparente. Resultados Auditados.
          </h2>
          <p className="text-body-l text-[#040812]/70 mb-8 max-w-2xl mx-auto">
            Veja a metodologia em ação. Dashboard de demonstração disponível.
          </p>
          <a
            href="/rentabiliza"
            className="inline-block bg-[#040812] text-[#DCA405] px-12 py-6 rounded-xl font-bold text-lg hover:bg-[#0A1326] transition-all shadow-2xl"
          >
            VER DEMONSTRAÇÃO →
          </a>
        </div>
      </section>
    </div>
  )
}
