import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Brand Book/01. Identidade Visual/Overview',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Introduction: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#040812] via-[#0A1326] to-[#0D1F3C]" />

        <div className="relative z-10 text-center px-12">
          <p className="text-sm font-medium text-accent mb-4 tracking-wider">RENTABILIZA</p>
          <h1 className="text-8xl font-bold text-white mb-6">
            Brand Book
          </h1>
          <p className="text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Diretrizes de identidade visual e design system para criar experiências
            consistentes e memoráveis
          </p>

          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-3">
              <div className="w-4 h-4 bg-[#040812] rounded" />
              <span className="text-sm text-white">Navy</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-3">
              <div className="w-4 h-4 bg-[#DCA405] rounded" />
              <span className="text-sm text-white">Gold</span>
            </div>
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-6 py-3">
              <div className="w-4 h-4 bg-white rounded" />
              <span className="text-sm text-white">White</span>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#0D1F3C]/30 rounded-full blur-3xl" />
      </section>

      {/* Brand Essence */}
      <section className="py-24 px-12 bg-card border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4">BRAND ESSENCE</p>
          <h2 className="text-5xl font-bold text-foreground mb-12">
            Sofisticação que <span className="text-accent">Gera Resultados</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Sofisticação</h3>
              <p className="text-muted-foreground">
                Design elegante e profissional que transmite confiança e credibilidade
                para investidores exigentes.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Clareza</h3>
              <p className="text-muted-foreground">
                Informações complexas apresentadas de forma simples e direta,
                facilitando a tomada de decisão.
              </p>
            </div>

            <div className="bg-background rounded-xl p-8 border border-white/10">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Prosperidade</h3>
              <p className="text-muted-foreground">
                Gold accent que simboliza conquistas, crescimento e resultados
                financeiros sólidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4">DESIGN PRINCIPLES</p>
          <h2 className="text-5xl font-bold text-foreground mb-12">
            Fundamentos do Design
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Principle 1 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent text-[#040812] rounded-xl flex items-center justify-center text-2xl font-bold">
                  01
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Consistência Visual</h3>
                <p className="text-muted-foreground mb-4">
                  Manter coerência em todos os pontos de contato através de cores,
                  tipografia e espaçamento consistentes.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Paleta de cores bem definida
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Hierarquia tipográfica clara
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Sistema de espaçamento padronizado
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 2 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent text-[#040812] rounded-xl flex items-center justify-center text-2xl font-bold">
                  02
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Acessibilidade</h3>
                <p className="text-muted-foreground mb-4">
                  Design inclusivo que garante que todos possam acessar e compreender
                  o conteúdo facilmente.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Contraste AAA em todas as combinações
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Tipografia legível em todos os tamanhos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Interfaces responsivas e adaptáveis
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 3 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent text-[#040812] rounded-xl flex items-center justify-center text-2xl font-bold">
                  03
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Hierarquia Clara</h3>
                <p className="text-muted-foreground mb-4">
                  Guiar o olhar do usuário através de hierarquia visual bem definida
                  e intencional.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Tamanhos de fonte progressivos
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Uso estratégico de cor para destaque
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Espaçamento que cria agrupamentos lógicos
                  </li>
                </ul>
              </div>
            </div>

            {/* Principle 4 */}
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent text-[#040812] rounded-xl flex items-center justify-center text-2xl font-bold">
                  04
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Modernidade Atemporal</h3>
                <p className="text-muted-foreground mb-4">
                  Design contemporâneo que permanece relevante e sofisticado
                  ao longo do tempo.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Elementos clássicos com toque moderno
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Evita tendências passageiras
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    Foco na essência e funcionalidade
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 px-12 bg-card border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-medium text-muted-foreground mb-4">ÍNDICE</p>
          <h2 className="text-5xl font-bold text-foreground mb-12">
            Explore o Brand Book
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="group bg-background rounded-xl p-6 border border-white/10 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-[#040812] rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Color Palette</h3>
              <p className="text-sm text-muted-foreground">
                Cores primárias, secundárias e sistema de acessibilidade
              </p>
            </a>

            <a
              href="#"
              className="group bg-background rounded-xl p-6 border border-white/10 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-[#040812] rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="text-2xl">Aa</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Typography</h3>
              <p className="text-sm text-muted-foreground">
                Famílias de fontes, type scale e hierarquia visual
              </p>
            </a>

            <a
              href="#"
              className="group bg-background rounded-xl p-6 border border-white/10 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-[#040812] rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Spacing & Grid</h3>
              <p className="text-sm text-muted-foreground">
                Sistema de espaçamento, grid e border radius
              </p>
            </a>

            <a
              href="#"
              className="group bg-background rounded-xl p-6 border border-white/10 hover:border-accent transition-colors"
            >
              <div className="w-12 h-12 bg-[#040812] rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="text-2xl">🧩</span>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Components</h3>
              <p className="text-sm text-muted-foreground">
                Biblioteca completa de 55+ componentes UI
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-12 px-12 bg-background border-t border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-foreground mb-1">Rentabiliza Brand Book</p>
            <p className="text-xs text-muted-foreground">Versão 1.0 • Atualizado em Março 2026</p>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">Feito com</p>
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-[#040812] rounded" />
              <div className="w-3 h-3 bg-[#DCA405] rounded" />
              <div className="w-3 h-3 bg-white rounded" />
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}
