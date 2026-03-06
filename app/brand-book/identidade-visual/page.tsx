import Link from 'next/link'

export default function IdentidadeVisual() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-white/10 bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
          <Link href="/brand-book" className="text-sm text-accent hover:text-accent/80">
            ← Voltar ao índice
          </Link>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link href="#cores" className="hover:text-foreground">Cores</Link>
            <Link href="#tipografia" className="hover:text-foreground">Tipografia</Link>
            <Link href="#spacing" className="hover:text-foreground">Spacing</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-16">
        {/* Hero */}
        <div className="mb-24">
          <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
          <h1 className="text-7xl font-bold text-foreground mb-6">
            Fundamentos <span className="text-accent">Visuais</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Sistema completo de cores, tipografia e espaçamento para criar experiências
            consistentes e profissionais em todos os pontos de contato.
          </p>
        </div>

        {/* Colors Section */}
        <section id="cores" className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-4">Color Palette</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Paleta sofisticada que transmite confiança (Navy), prosperidade (Gold) e clareza (White).
          </p>

          {/* Primary Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Cores Primárias</h3>
            <div className="grid grid-cols-3 gap-6">
              {/* Navy */}
              <div>
                <div className="h-64 bg-[#040812] rounded-xl mb-4 border border-white/10" />
                <h4 className="text-lg font-bold text-foreground mb-2">Navy</h4>
                <p className="text-sm text-muted-foreground mb-3">Background principal, solidez</p>
                <div className="space-y-1 text-sm font-mono">
                  <p className="text-foreground">HEX: #040812</p>
                  <p className="text-muted-foreground">RGB: 4, 8, 18</p>
                  <p className="text-muted-foreground">HSL: 220°, 64%, 4%</p>
                </div>
              </div>

              {/* Gold */}
              <div>
                <div className="h-64 bg-[#DCA405] rounded-xl mb-4 border border-white/10" />
                <h4 className="text-lg font-bold text-foreground mb-2">Gold</h4>
                <p className="text-sm text-muted-foreground mb-3">Acentos, CTAs, prosperidade</p>
                <div className="space-y-1 text-sm font-mono">
                  <p className="text-foreground">HEX: #DCA405</p>
                  <p className="text-muted-foreground">RGB: 220, 164, 5</p>
                  <p className="text-muted-foreground">HSL: 44°, 96%, 44%</p>
                </div>
              </div>

              {/* White */}
              <div>
                <div className="h-64 bg-white rounded-xl mb-4 border border-white/20" />
                <h4 className="text-lg font-bold text-foreground mb-2">White</h4>
                <p className="text-sm text-muted-foreground mb-3">Textos, clareza, pureza</p>
                <div className="space-y-1 text-sm font-mono">
                  <p className="text-foreground">HEX: #FFFFFF</p>
                  <p className="text-muted-foreground">RGB: 255, 255, 255</p>
                  <p className="text-muted-foreground">HSL: 0°, 0%, 100%</p>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Colors */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Cores Secundárias</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="h-48 bg-[#0A1326] rounded-xl mb-4 border border-white/10" />
                <h4 className="text-base font-bold text-foreground mb-1">Surface</h4>
                <p className="text-sm font-mono text-muted-foreground">#0A1326</p>
              </div>
              <div>
                <div className="h-48 bg-[#0D1F3C] rounded-xl mb-4 border border-white/10" />
                <h4 className="text-base font-bold text-foreground mb-1">Brand Blue</h4>
                <p className="text-sm font-mono text-muted-foreground">#0D1F3C</p>
              </div>
              <div>
                <div className="h-48 bg-[#64748B] rounded-xl mb-4 border border-white/10" />
                <h4 className="text-base font-bold text-foreground mb-1">Slate</h4>
                <p className="text-sm font-mono text-muted-foreground">#64748B</p>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div className="bg-card rounded-xl p-12 border border-white/10">
            <p className="text-sm text-muted-foreground mb-6">Exemplo de Aplicação</p>
            <div className="bg-[#040812] rounded-xl p-8">
              <h3 className="text-4xl font-bold text-white mb-4">
                Invista com <span className="text-[#DCA405]">Inteligência</span>
              </h3>
              <p className="text-[#64748B] mb-6">
                Transforme seu patrimônio com estratégias comprovadas.
              </p>
              <button className="bg-white text-[#040812] px-6 py-3 rounded-xl font-bold">
                Começar Agora
              </button>
            </div>
          </div>
        </section>

        {/* Typography Section */}
        <section id="tipografia" className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-4">Typography</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Playfair Display para títulos elegantes, Inter para corpo de texto legível.
          </p>

          <div className="grid grid-cols-2 gap-12 mb-12">
            {/* Playfair */}
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-foreground mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                Playfair Display
              </h3>
              <p className="text-sm text-muted-foreground mb-6">Títulos e Headlines</p>
              <div className="space-y-4">
                <div style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p className="text-xs text-muted-foreground mb-1">Bold 700</p>
                  <p className="text-2xl font-bold">AaBbCcDdEeFf 0123</p>
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif' }}>
                  <p className="text-xs text-muted-foreground mb-1">Regular 400</p>
                  <p className="text-2xl">AaBbCcDdEeFf 0123</p>
                </div>
              </div>
            </div>

            {/* Inter */}
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-3xl font-bold text-foreground mb-2">Inter</h3>
              <p className="text-sm text-muted-foreground mb-6">Corpo e UI</p>
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Bold 700</p>
                  <p className="text-2xl font-bold">AaBbCcDdEeFf 0123</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Regular 400</p>
                  <p className="text-2xl">AaBbCcDdEeFf 0123</p>
                </div>
              </div>
            </div>
          </div>

          {/* Type Scale */}
          <div className="bg-card rounded-xl p-12 border border-white/10">
            <p className="text-sm text-muted-foreground mb-6">Type Scale</p>
            <div className="space-y-6">
              <div className="border-b border-border pb-4">
                <p className="text-xs text-muted-foreground mb-2">H1 - 72px / 4.5rem</p>
                <h1 className="text-7xl font-bold">Invista com Inteligência</h1>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs text-muted-foreground mb-2">H2 - 60px / 3.75rem</p>
                <h2 className="text-6xl font-bold">Retorno Garantido</h2>
              </div>
              <div className="border-b border-border pb-4">
                <p className="text-xs text-muted-foreground mb-2">Body - 16px / 1rem</p>
                <p className="text-base">Transforme seu patrimônio com estratégias comprovadas de investimento.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Spacing Section */}
        <section id="spacing" className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-4">Spacing & Grid</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Sistema de espaçamento baseado em múltiplos de 4px e grid de 12 colunas.
          </p>

          {/* Spacing Tokens */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Spacing Tokens</h3>
            <div className="space-y-3">
              {[
                { name: '2', px: '8px' },
                { name: '4', px: '16px' },
                { name: '6', px: '24px' },
                { name: '8', px: '32px' },
                { name: '12', px: '48px' },
                { name: '16', px: '64px' },
              ].map((token) => (
                <div key={token.name} className="flex items-center gap-6 bg-card rounded-xl p-4 border border-white/10">
                  <p className="text-sm font-mono text-foreground w-24">space-{token.name}</p>
                  <div className="bg-accent h-12" style={{ width: token.px }} />
                  <p className="text-sm text-muted-foreground">{token.px}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="bg-card rounded-xl p-12 border border-white/10">
            <p className="text-sm text-muted-foreground mb-6">12-Column Grid</p>
            <div className="grid grid-cols-12 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 bg-accent/20 border border-accent rounded flex items-center justify-center"
                >
                  <span className="text-sm font-mono">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <Link
            href="/brand-book"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            ← Voltar ao índice
          </Link>
          <Link
            href="/brand-book/logo"
            className="text-accent hover:text-accent/80 flex items-center gap-2"
          >
            Próxima seção: Logo & Aplicações →
          </Link>
        </div>
      </div>
    </div>
  )
}
