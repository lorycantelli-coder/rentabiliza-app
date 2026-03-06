import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Brand Book/01. Identidade Visual/Typography',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Overview: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Typography</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Combinação elegante de Playfair Display para títulos (sofisticação e autoridade) e Inter para corpo de texto (clareza e legibilidade).
        </p>
      </div>

      {/* Font Families */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Font Families</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Playfair Display */}
          <div className="bg-card rounded-xl p-8 border border-white/10">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Playfair Display
              </h3>
              <p className="text-sm text-muted-foreground">Display / Headlines</p>
            </div>

            <div className="space-y-4">
              <div style={{ fontFamily: 'Playfair Display, serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Regular 400</p>
                <p className="text-3xl text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Semibold 600</p>
                <p className="text-3xl font-semibold text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Bold 700</p>
                <p className="text-3xl font-bold text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Italic 400</p>
                <p className="text-3xl italic text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Uso:</p>
              <ul className="text-sm text-foreground space-y-1">
                <li>• H1, H2, H3, H4, H5, H6</li>
                <li>• Títulos de seções</li>
                <li>• CTAs principais</li>
                <li>• Destaques editoriais</li>
              </ul>
            </div>
          </div>

          {/* Inter */}
          <div className="bg-card rounded-xl p-8 border border-white/10">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                Inter
              </h3>
              <p className="text-sm text-muted-foreground">Body / UI Elements</p>
            </div>

            <div className="space-y-4">
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Light 300</p>
                <p className="text-3xl font-light text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Regular 400</p>
                <p className="text-3xl text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Medium 500</p>
                <p className="text-3xl font-medium text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif' }}>
                <p className="text-xs text-muted-foreground mb-1">Bold 700</p>
                <p className="text-3xl font-bold text-foreground">AaBbCcDdEeFf 0123456789</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-2">Uso:</p>
              <ul className="text-sm text-foreground space-y-1">
                <li>• Parágrafos e corpo de texto</li>
                <li>• Botões e labels</li>
                <li>• Formulários e inputs</li>
                <li>• Navegação e menus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Type Scale */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Type Scale</h2>

        <div className="space-y-6">
          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">H1 / Display</p>
              <p className="text-xs font-mono text-muted-foreground">72px / 4.5rem</p>
            </div>
            <h1 className="text-7xl font-bold">Invista com Inteligência</h1>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">H2</p>
              <p className="text-xs font-mono text-muted-foreground">60px / 3.75rem</p>
            </div>
            <h2 className="text-6xl font-bold">Retorno Garantido</h2>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">H3</p>
              <p className="text-xs font-mono text-muted-foreground">48px / 3rem</p>
            </div>
            <h3 className="text-5xl font-bold">Patrimônio Crescente</h3>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">H4</p>
              <p className="text-xs font-mono text-muted-foreground">36px / 2.25rem</p>
            </div>
            <h4 className="text-4xl font-bold">Estratégias Comprovadas</h4>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">H5</p>
              <p className="text-xs font-mono text-muted-foreground">24px / 1.5rem</p>
            </div>
            <h5 className="text-2xl font-bold">Resultados Mensuráveis</h5>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">H6</p>
              <p className="text-xs font-mono text-muted-foreground">20px / 1.25rem</p>
            </div>
            <h6 className="text-xl font-bold">Análise de Mercado</h6>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">Body Large</p>
              <p className="text-xs font-mono text-muted-foreground">18px / 1.125rem</p>
            </div>
            <p className="text-lg" style={{ fontFamily: 'Inter, sans-serif' }}>
              Transforme seu patrimônio com estratégias comprovadas de investimento imobiliário.
            </p>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">Body</p>
              <p className="text-xs font-mono text-muted-foreground">16px / 1rem</p>
            </div>
            <p className="text-base" style={{ fontFamily: 'Inter, sans-serif' }}>
              Transforme seu patrimônio com estratégias comprovadas de investimento imobiliário.
            </p>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">Body Small</p>
              <p className="text-xs font-mono text-muted-foreground">14px / 0.875rem</p>
            </div>
            <p className="text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
              Transforme seu patrimônio com estratégias comprovadas de investimento imobiliário.
            </p>
          </div>

          <div className="flex items-baseline gap-8 border-b border-border pb-4">
            <div className="w-32 flex-shrink-0">
              <p className="text-xs text-muted-foreground">Caption</p>
              <p className="text-xs font-mono text-muted-foreground">12px / 0.75rem</p>
            </div>
            <p className="text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
              Transforme seu patrimônio com estratégias comprovadas de investimento imobiliário.
            </p>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">Usage Examples</h2>

        <div className="grid grid-cols-1 gap-8">
          {/* Hero Example */}
          <div className="bg-card rounded-xl p-12 border border-white/10">
            <p className="text-sm font-medium text-accent mb-4">RENTABILIZA</p>
            <h1 className="text-6xl font-bold text-foreground mb-6">
              Construa Riqueza <br />
              <span className="text-accent">Com Propósito</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl" style={{ fontFamily: 'Inter, sans-serif' }}>
              Descubra como investidores inteligentes estão multiplicando seu patrimônio através de
              estratégias imobiliárias comprovadas e personalizadas.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-[#040812] px-8 py-4 rounded-xl font-bold hover:bg-accent transition-colors">
                Começar Agora
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/5 transition-colors">
                Saiba Mais
              </button>
            </div>
          </div>

          {/* Article Example */}
          <div className="bg-card rounded-xl p-12 border border-white/10">
            <p className="text-sm font-medium text-muted-foreground mb-2">ANÁLISE DE MERCADO</p>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Por que 2026 é o Ano Ideal para Investir em Imóveis
            </h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              O mercado imobiliário brasileiro apresenta sinais claros de recuperação e oportunidades
              únicas para investidores atentos. Com taxas de juros em queda e demanda crescente,
              o momento nunca foi tão favorável.
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
              Segundo dados do último trimestre, a valorização média dos imóveis em regiões estratégicas
              atingiu 18.5% ao ano, superando amplamente outras classes de ativos.
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <p className="text-sm text-muted-foreground">Por</p>
              <p className="text-sm font-medium text-foreground">Equipe Rentabiliza</p>
              <p className="text-sm text-muted-foreground">•</p>
              <p className="text-sm text-muted-foreground">5 min de leitura</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const Hierarchy: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Type Hierarchy</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Estabelecendo clara hierarquia visual através de tamanho, peso e espaçamento.
        </p>
      </div>

      <div className="space-y-12">
        {/* Example 1: Landing Page */}
        <div className="bg-card rounded-xl p-12 border border-white/10">
          <p className="text-xs font-medium text-accent mb-8 tracking-wider">LANDING PAGE EXAMPLE</p>

          <h1 className="text-7xl font-bold text-foreground mb-6">
            Investimento <span className="text-accent">Inteligente</span>
          </h1>

          <h2 className="text-3xl font-medium text-muted-foreground mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
            Maximize seus retornos com estratégias comprovadas
          </h2>

          <p className="text-lg text-muted-foreground mb-6 max-w-3xl leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
            Descubra como investidores inteligentes estão construindo patrimônio sólido através de
            investimentos imobiliários estratégicos. Nossa metodologia exclusiva já gerou mais de
            R$ 100M em retornos para nossos clientes.
          </p>

          <div className="flex gap-4 mb-12">
            <button className="bg-white text-[#040812] px-8 py-4 rounded-xl font-bold text-base">
              Começar Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base">
              Ver Como Funciona
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border">
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">18.5%</p>
              <p className="text-sm text-muted-foreground">Retorno médio anual</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">R$ 100M+</p>
              <p className="text-sm text-muted-foreground">Em retornos gerados</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Investidores ativos</p>
            </div>
          </div>
        </div>

        {/* Example 2: Dashboard Card */}
        <div className="bg-card rounded-xl p-8 border border-white/10">
          <p className="text-xs font-medium text-accent mb-6 tracking-wider">DASHBOARD CARD EXAMPLE</p>

          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Portfólio Consolidado</h3>
              <p className="text-sm text-muted-foreground">Atualizado há 2 horas</p>
            </div>
            <button className="text-sm font-medium text-accent">Ver detalhes →</button>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Valor Total Investido</p>
              <p className="text-3xl font-bold text-foreground">R$ 2.450.000</p>
              <p className="text-sm text-accent mt-2">+12.5% este ano</p>
            </div>
            <div className="bg-background rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Retorno Acumulado</p>
              <p className="text-3xl font-bold text-foreground">R$ 485.000</p>
              <p className="text-sm text-accent mt-2">19.8% ROI</p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Seu portfólio está performando 4.2 pontos percentuais acima da média do mercado.
          </p>
        </div>
      </div>
    </div>
  ),
}
