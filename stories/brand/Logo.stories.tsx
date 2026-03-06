import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Brand Book/02. Logo & Aplicações/Logo Guidelines',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const LogoPrincipal: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">02. LOGO & APLICAÇÕES</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Logo Principal</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          O logo da Rentabiliza combina tipografia elegante com símbolo de crescimento,
          transmitindo confiança e prosperidade.
        </p>
      </div>

      {/* Logo Showcase */}
      <section className="mb-16">
        <div className="bg-card rounded-xl p-16 border border-white/10 text-center">
          <h2 className="text-7xl font-bold text-foreground mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
            Rentabiliza
          </h2>
          <p className="text-sm text-muted-foreground tracking-wider">INVESTIMENTOS INTELIGENTES</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-xl p-8 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rentabiliza
            </h3>
            <p className="text-xs text-[#64748B] mt-2">Logo em fundo claro</p>
          </div>
          <div className="bg-[#040812] rounded-xl p-8 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rentabiliza
            </h3>
            <p className="text-xs text-[#64748B] mt-2">Logo em fundo escuro</p>
          </div>
          <div className="bg-[#DCA405] rounded-xl p-8 text-center border border-white/10">
            <h3 className="text-4xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rentabiliza
            </h3>
            <p className="text-xs text-[#040812] mt-2">Logo em fundo Gold</p>
          </div>
        </div>
      </section>

      {/* Construção */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Construção do Logo</h2>

        <div className="bg-card rounded-xl p-12 border border-white/10">
          <div className="mb-8">
            <h3 className="text-5xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rentabiliza
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">Tipografia</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• <span className="text-foreground font-medium">Família:</span> Playfair Display</p>
                <p>• <span className="text-foreground font-medium">Peso:</span> Bold (700)</p>
                <p>• <span className="text-foreground font-medium">Kerning:</span> Ótico</p>
                <p>• <span className="text-foreground font-medium">Tracking:</span> -2%</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-foreground mb-3">Cores Aprovadas</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white rounded border border-white/20" />
                  <span>White (#FFFFFF)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#040812] rounded border border-white/20" />
                  <span>Navy (#040812)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#DCA405] rounded border border-white/20" />
                  <span>Gold (#DCA405)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Área de Proteção */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Área de Proteção</h2>

        <div className="bg-card rounded-xl p-12 border border-white/10">
          <div className="relative inline-block">
            <div className="border-2 border-dashed border-accent p-12">
              <h3 className="text-5xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs text-accent font-mono">
              X
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-xs text-accent font-mono">
              X
            </div>
            <div className="absolute top-1/2 -left-2 -translate-y-1/2 text-xs text-accent font-mono">
              X
            </div>
            <div className="absolute top-1/2 -right-2 -translate-y-1/2 text-xs text-accent font-mono">
              X
            </div>
          </div>

          <div className="mt-8 p-6 bg-background rounded-xl">
            <p className="text-sm text-muted-foreground mb-2">
              <span className="text-foreground font-medium">Regra:</span> Manter espaço mínimo de "X" (altura da letra "R") em todas as direções.
            </p>
            <p className="text-sm text-muted-foreground">
              Não posicione outros elementos (texto, imagens, bordas) dentro desta área de proteção.
            </p>
          </div>
        </div>
      </section>

      {/* Tamanhos Mínimos */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">Tamanhos Mínimos</h2>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-white/10">
            <h4 className="text-lg font-bold text-foreground mb-4">Digital</h4>
            <div className="mb-6">
              <h5 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h5>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <span className="text-foreground font-medium">Largura mínima:</span> 120px</p>
              <p>• <span className="text-foreground font-medium">Altura mínima:</span> 32px</p>
              <p>• <span className="text-foreground font-medium">Uso:</span> Websites, apps, emails</p>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-white/10">
            <h4 className="text-lg font-bold text-foreground mb-4">Impresso</h4>
            <div className="mb-6">
              <h5 className="text-2xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h5>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• <span className="text-foreground font-medium">Largura mínima:</span> 30mm</p>
              <p>• <span className="text-foreground font-medium">Altura mínima:</span> 8mm</p>
              <p>• <span className="text-foreground font-medium">Uso:</span> Cartões, folders, banners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const UsoCorreto: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">02. LOGO & APLICAÇÕES</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Uso Correto & Incorreto</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Diretrizes de uso para manter a integridade e consistência da marca.
        </p>
      </div>

      {/* Correto */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-green-500/20 text-green-500 rounded-lg flex items-center justify-center">
            ✓
          </div>
          <h2 className="text-3xl font-bold text-foreground">Uso Correto</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-8 border-2 border-green-500/30">
            <div className="mb-4 text-center">
              <h3 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Logo em fundo escuro com contraste adequado
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 border-2 border-green-500/30">
            <div className="mb-4 text-center">
              <h3 className="text-3xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-[#64748B] text-center">
              Logo em fundo claro com contraste adequado
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border-2 border-green-500/30">
            <div className="mb-4 text-center">
              <h3 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Tamanho adequado com legibilidade
            </p>
          </div>
        </div>
      </section>

      {/* Incorreto */}
      <section>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-red-500/20 text-red-500 rounded-lg flex items-center justify-center">
            ✕
          </div>
          <h2 className="text-3xl font-bold text-foreground">Uso Incorreto</h2>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#64748B] rounded-xl p-8 border-2 border-red-500/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-2xl">
                ✕
              </div>
            </div>
            <div className="mb-4 text-center opacity-50">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-white/70 text-center">
              ✕ Não usar em fundos com baixo contraste
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border-2 border-red-500/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-2xl">
                ✕
              </div>
            </div>
            <div className="mb-4 text-center opacity-50">
              <h3 className="text-3xl font-bold text-foreground italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              ✕ Não aplicar itálico ao logo
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border-2 border-red-500/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-2xl">
                ✕
              </div>
            </div>
            <div className="mb-4 text-center opacity-50">
              <h3 className="text-3xl font-bold text-red-500" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              ✕ Não usar cores não aprovadas
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border-2 border-red-500/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-2xl">
                ✕
              </div>
            </div>
            <div className="mb-4 text-center opacity-50">
              <h3 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif', transform: 'scaleX(1.5)' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              ✕ Não distorcer horizontalmente
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border-2 border-red-500/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-2xl">
                ✕
              </div>
            </div>
            <div className="mb-4 text-center opacity-50">
              <h3 className="text-xs font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-muted-foreground text-center">
              ✕ Não usar abaixo do tamanho mínimo
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-8 border-2 border-red-500/30 relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-500/20 text-red-500 rounded-full flex items-center justify-center text-2xl">
                ✕
              </div>
            </div>
            <div className="mb-4 text-center opacity-50">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>
            <p className="text-sm text-white/70 text-center">
              ✕ Não usar em fundos coloridos complexos
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
}
