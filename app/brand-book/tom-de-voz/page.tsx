import Link from 'next/link'

export default function TomDeVozPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-white/10 bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
          <Link href="/brand-book" className="text-sm text-accent hover:text-accent/80">
            ← Voltar ao índice
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-24">
          <p className="text-sm font-medium text-muted-foreground mb-2">04. TOM DE VOZ</p>
          <h1 className="text-7xl font-bold text-foreground mb-6">
            Comunicação <span className="text-accent">Inteligente</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Como a Rentabiliza se comunica: confiante, clara e orientada a resultados.
          </p>
        </div>

        {/* Personalidade */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Personalidade da Marca</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Somos</h3>
              <div className="space-y-4">
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✓ Confiantes</h4>
                  <p className="text-sm text-muted-foreground">
                    Transmitimos segurança e expertise sem arrogância
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✓ Claros</h4>
                  <p className="text-sm text-muted-foreground">
                    Explicamos o complexo de forma simples e direta
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✓ Orientados a Resultados</h4>
                  <p className="text-sm text-muted-foreground">
                    Focamos em dados concretos e ROI mensurável
                  </p>
                </div>
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✓ Profissionais</h4>
                  <p className="text-sm text-muted-foreground">
                    Mantemos alto padrão sem ser distantes ou frios
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-foreground mb-4">Não Somos</h3>
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✕ Arrogantes</h4>
                  <p className="text-sm text-muted-foreground">
                    Nunca somos condescendentes ou presunçosos
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✕ Técnicos Demais</h4>
                  <p className="text-sm text-muted-foreground">
                    Evitamos jargão desnecessário e complexidade artificial
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✕ Promocionais</h4>
                  <p className="text-sm text-muted-foreground">
                    Não fazemos promessas vazias ou exageros
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                  <h4 className="text-lg font-bold text-foreground mb-2">✕ Genéricos</h4>
                  <p className="text-sm text-muted-foreground">
                    Sempre específicos, nunca vagos ou imprecisos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vocabulário */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Vocabulário</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-accent mb-6">✓ Use</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Estratégia', 'Resultados', 'ROI', 'Performance', 'Inteligente',
                  'Crescimento', 'Patrimônio', 'Rentabilidade', 'Análise', 'Data-driven',
                  'Comprovado', 'Otimizado', 'Eficiente', 'Sólido', 'Consistente'
                ].map((word) => (
                  <div key={word} className="bg-accent/10 border border-accent/30 rounded px-3 py-2 text-center">
                    <p className="text-sm font-medium text-foreground">{word}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-red-500 mb-6">✕ Evite</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Revolucionário', 'Incrível', 'Fantástico', 'Milagroso', 'Garantido',
                  'Fácil', 'Rápido', 'Grátis', 'Imperdível', 'Único',
                  'Excepcional', 'Espetacular', 'Mágico', 'Perfeito', 'Exclusivo'
                ].map((word) => (
                  <div key={word} className="bg-red-500/10 border border-red-500/30 rounded px-3 py-2 text-center opacity-75">
                    <p className="text-sm font-medium text-muted-foreground line-through">{word}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Exemplos de Copy */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Exemplos de Copy</h2>

          <div className="space-y-8">
            {/* Headline */}
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <p className="text-sm text-muted-foreground mb-3">HEADLINE</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <p className="text-xs text-green-500 mb-2">✓ BOM</p>
                  <h3 className="text-2xl font-bold text-foreground">
                    Construa patrimônio com estratégias comprovadas de investimento
                  </h3>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 opacity-75">
                  <p className="text-xs text-red-500 mb-2">✕ RUIM</p>
                  <h3 className="text-2xl font-bold text-foreground">
                    A solução revolucionária que vai mudar sua vida financeira!
                  </h3>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <p className="text-sm text-muted-foreground mb-3">CALL TO ACTION</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <p className="text-xs text-green-500 mb-2">✓ BOM</p>
                  <button className="bg-white text-[#040812] px-6 py-3 rounded-xl font-bold w-full">
                    Ver Estratégias Disponíveis
                  </button>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 opacity-75">
                  <p className="text-xs text-red-500 mb-2">✕ RUIM</p>
                  <button className="bg-white text-[#040812] px-6 py-3 rounded-xl font-bold w-full">
                    Clique Aqui Agora!
                  </button>
                </div>
              </div>
            </div>

            {/* Body Copy */}
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <p className="text-sm text-muted-foreground mb-3">BODY COPY</p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <p className="text-xs text-green-500 mb-3">✓ BOM</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Nossa metodologia de investimento já gerou mais de R$ 100M em retornos para
                    nossos clientes, com ROI médio de 18.5% ao ano. Baseamos todas as decisões
                    em análise rigorosa de dados e tendências de mercado.
                  </p>
                </div>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 opacity-75">
                  <p className="text-xs text-red-500 mb-3">✕ RUIM</p>
                  <p className="text-sm text-foreground leading-relaxed">
                    Somos a empresa mais incrível do mercado! Nosso método revolucionário vai
                    fazer você ganhar muito dinheiro de forma fácil e rápida. Não perca essa
                    oportunidade única!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <Link
            href="/brand-book/componentes"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Seção anterior: Componentes UI
          </Link>
          <Link
            href="/brand-book/aplicacoes"
            className="text-accent hover:text-accent/80"
          >
            Próxima seção: Aplicações →
          </Link>
        </div>
      </div>
    </div>
  )
}
