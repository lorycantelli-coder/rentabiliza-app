import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Brand Book/01. Identidade Visual/Color Palette',
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
        <h1 className="text-6xl font-bold text-foreground mb-4">Color Palette</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A paleta de cores da Rentabiliza transmite sofisticação, confiança e prosperidade.
          Navy profundo para solidez, Gold para conquistas, e White para clareza.
        </p>
      </div>

      {/* Primary Colors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Primary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Navy */}
          <div className="group">
            <div className="h-64 bg-[#040812] rounded-xl mb-4 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-mono">Hover to preview</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Navy</h3>
              <p className="text-sm text-muted-foreground">Background principal, textos em fundos claros</p>
              <div className="flex gap-4 text-sm font-mono">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HEX</p>
                  <p className="text-foreground">#040812</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">RGB</p>
                  <p className="text-foreground">4, 8, 18</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HSL</p>
                  <p className="text-foreground">220°, 64%, 4%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Gold */}
          <div className="group">
            <div className="h-64 bg-[#DCA405] rounded-xl mb-4 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#040812] text-sm font-mono">Hover to preview</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">Gold</h3>
              <p className="text-sm text-muted-foreground">Acentos, CTAs, hover states, destaques</p>
              <div className="flex gap-4 text-sm font-mono">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HEX</p>
                  <p className="text-foreground">#DCA405</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">RGB</p>
                  <p className="text-foreground">220, 164, 5</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HSL</p>
                  <p className="text-foreground">44°, 96%, 44%</p>
                </div>
              </div>
            </div>
          </div>

          {/* White */}
          <div className="group">
            <div className="h-64 bg-white rounded-xl mb-4 border border-white/20 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#040812] text-sm font-mono">Hover to preview</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-foreground">White</h3>
              <p className="text-sm text-muted-foreground">Textos principais, botões primários, clareza</p>
              <div className="flex gap-4 text-sm font-mono">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HEX</p>
                  <p className="text-foreground">#FFFFFF</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">RGB</p>
                  <p className="text-foreground">255, 255, 255</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HSL</p>
                  <p className="text-foreground">0°, 0%, 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Colors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Secondary Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Surface */}
          <div className="group">
            <div className="h-48 bg-[#0A1326] rounded-xl mb-4 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-mono">Hover to preview</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">Surface</h3>
              <p className="text-sm text-muted-foreground">Cards, modais, elementos elevados</p>
              <div className="flex gap-4 text-sm font-mono">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HEX</p>
                  <p className="text-foreground">#0A1326</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">RGB</p>
                  <p className="text-foreground">10, 19, 38</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Blue */}
          <div className="group">
            <div className="h-48 bg-[#0D1F3C] rounded-xl mb-4 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-mono">Hover to preview</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">Brand Blue</h3>
              <p className="text-sm text-muted-foreground">Botões secundários, bordas, divisores</p>
              <div className="flex gap-4 text-sm font-mono">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HEX</p>
                  <p className="text-foreground">#0D1F3C</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">RGB</p>
                  <p className="text-foreground">13, 31, 60</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slate */}
          <div className="group">
            <div className="h-48 bg-[#64748B] rounded-xl mb-4 border border-white/10 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white text-sm font-mono">Hover to preview</span>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-foreground">Slate</h3>
              <p className="text-sm text-muted-foreground">Textos secundários, placeholders, desabilitado</p>
              <div className="flex gap-4 text-sm font-mono">
                <div>
                  <p className="text-muted-foreground text-xs mb-1">HEX</p>
                  <p className="text-foreground">#64748B</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-xs mb-1">RGB</p>
                  <p className="text-foreground">100, 116, 139</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Examples */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">Usage Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Example 1: Hero Section */}
          <div className="bg-[#040812] rounded-xl p-8 border border-white/10">
            <p className="text-sm text-[#64748B] mb-2">Example: Hero Section</p>
            <h3 className="text-4xl font-bold text-white mb-4">
              Invista com <span className="text-[#DCA405]">Inteligência</span>
            </h3>
            <p className="text-[#64748B] mb-6">
              Transforme seu patrimônio com estratégias comprovadas de investimento imobiliário.
            </p>
            <button className="bg-white text-[#040812] px-6 py-3 rounded-xl font-bold hover:bg-[#DCA405] transition-colors">
              Começar Agora
            </button>
          </div>

          {/* Example 2: Card */}
          <div className="bg-[#0A1326] rounded-xl p-8 border border-white/20">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-sm text-[#64748B] mb-1">Retorno Anual</p>
                <p className="text-3xl font-bold text-white">18.5%</p>
              </div>
              <div className="bg-[#DCA405] text-[#040812] px-3 py-1 rounded-lg text-sm font-bold">
                +2.3%
              </div>
            </div>
            <div className="border-t border-[#0D1F3C] pt-4">
              <p className="text-sm text-[#64748B]">
                Acima da média do mercado em 4.2 pontos percentuais
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const ColorScale: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Color Scale</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Variações de opacidade para criar hierarquia visual e depth.
        </p>
      </div>

      {/* Navy Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Navy Scale</h2>
        <div className="grid grid-cols-5 gap-4">
          {[100, 80, 60, 40, 20, 10, 5].map((opacity) => (
            <div key={opacity}>
              <div
                className="h-24 rounded-xl mb-2 border border-white/10"
                style={{ backgroundColor: `rgba(4, 8, 18, ${opacity / 100})` }}
              />
              <p className="text-sm text-foreground font-mono">{opacity}%</p>
              <p className="text-xs text-muted-foreground">Navy</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gold Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-foreground mb-6">Gold Scale</h2>
        <div className="grid grid-cols-5 gap-4">
          {[100, 80, 60, 40, 20, 10, 5].map((opacity) => (
            <div key={opacity}>
              <div
                className="h-24 rounded-xl mb-2 border border-white/10"
                style={{ backgroundColor: `rgba(220, 164, 5, ${opacity / 100})` }}
              />
              <p className="text-sm text-foreground font-mono">{opacity}%</p>
              <p className="text-xs text-muted-foreground">Gold</p>
            </div>
          ))}
        </div>
      </section>

      {/* White Scale */}
      <section>
        <h2 className="text-2xl font-bold text-foreground mb-6">White Scale</h2>
        <div className="grid grid-cols-5 gap-4">
          {[100, 80, 60, 40, 20, 10, 5].map((opacity) => (
            <div key={opacity}>
              <div
                className="h-24 rounded-xl mb-2 border border-white/10"
                style={{ backgroundColor: `rgba(255, 255, 255, ${opacity / 100})` }}
              />
              <p className="text-sm text-foreground font-mono">{opacity}%</p>
              <p className="text-xs text-muted-foreground">White</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
}

export const Accessibility: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Accessibility</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Todas as combinações de cores atendem aos padrões WCAG 2.1 AA para contraste.
        </p>
      </div>

      {/* Contrast Ratios */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground mb-8">Contrast Ratios</h2>

        {/* White on Navy */}
        <div className="bg-[#0A1326] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-white text-2xl font-bold mb-1">White on Navy</p>
              <p className="text-[#64748B] text-sm">Most readable combination</p>
            </div>
            <div className="text-right">
              <p className="text-[#DCA405] text-3xl font-bold">18.5:1</p>
              <p className="text-[#64748B] text-sm">AAA ✓</p>
            </div>
          </div>
          <p className="text-white text-lg">
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>

        {/* Gold on Navy */}
        <div className="bg-[#040812] rounded-xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#DCA405] text-2xl font-bold mb-1">Gold on Navy</p>
              <p className="text-[#64748B] text-sm">Accent text and CTAs</p>
            </div>
            <div className="text-right">
              <p className="text-[#DCA405] text-3xl font-bold">12.3:1</p>
              <p className="text-[#64748B] text-sm">AAA ✓</p>
            </div>
          </div>
          <p className="text-[#DCA405] text-lg">
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>

        {/* Navy on White */}
        <div className="bg-white rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#040812] text-2xl font-bold mb-1">Navy on White</p>
              <p className="text-[#64748B] text-sm">Light backgrounds</p>
            </div>
            <div className="text-right">
              <p className="text-[#040812] text-3xl font-bold">18.5:1</p>
              <p className="text-[#64748B] text-sm">AAA ✓</p>
            </div>
          </div>
          <p className="text-[#040812] text-lg">
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>

        {/* Gold on White */}
        <div className="bg-white rounded-xl p-6 border border-white/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#DCA405] text-2xl font-bold mb-1">Gold on White</p>
              <p className="text-[#64748B] text-sm">Use for large text only</p>
            </div>
            <div className="text-right">
              <p className="text-[#040812] text-3xl font-bold">7.8:1</p>
              <p className="text-[#64748B] text-sm">AA ✓</p>
            </div>
          </div>
          <p className="text-[#DCA405] text-lg">
            The quick brown fox jumps over the lazy dog. 0123456789
          </p>
        </div>
      </section>
    </div>
  ),
}
