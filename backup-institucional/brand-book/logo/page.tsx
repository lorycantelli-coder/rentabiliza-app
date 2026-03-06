import Link from 'next/link'

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-white/10 bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
          <Link href="/brand-book" className="text-sm text-accent hover:text-accent/80">
            ← Voltar ao índice
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-16">
        {/* Hero */}
        <div className="mb-24">
          <p className="text-sm font-medium text-muted-foreground mb-2">02. LOGO & APLICAÇÕES</p>
          <h1 className="text-7xl font-bold text-foreground mb-6">
            Logo <span className="text-accent">Rentabiliza</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Diretrizes de uso do logo para manter a consistência e integridade da marca
            em todos os pontos de contato.
          </p>
        </div>

        {/* Logo Principal */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Logo Principal</h2>

          <div className="bg-card rounded-xl p-20 border border-white/10 text-center mb-8">
            <h3 className="text-8xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
              Rentabiliza
            </h3>
            <p className="text-sm text-muted-foreground tracking-widest mt-4">INVESTIMENTOS INTELIGENTES</p>
          </div>

          {/* Variações */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-12 text-center border border-white/10">
              <h4 className="text-5xl font-bold text-[#040812] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h4>
              <p className="text-xs text-[#64748B]">Fundo Claro</p>
            </div>
            <div className="bg-[#040812] rounded-xl p-12 text-center border border-white/10">
              <h4 className="text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h4>
              <p className="text-xs text-[#64748B]">Fundo Escuro</p>
            </div>
            <div className="bg-[#DCA405] rounded-xl p-12 text-center border border-white/10">
              <h4 className="text-5xl font-bold text-[#040812] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h4>
              <p className="text-xs text-[#040812]">Fundo Gold</p>
            </div>
          </div>
        </section>

        {/* Área de Proteção */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-4">Área de Proteção</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
            Manter espaço mínimo de "X" (altura da letra "R") em todas as direções.
          </p>

          <div className="bg-card rounded-xl p-20 border border-white/10 flex justify-center">
            <div className="relative inline-block">
              <div className="border-2 border-dashed border-accent/50 p-16">
                <h3 className="text-6xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rentabiliza
                </h3>
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-[#040812] px-3 py-1 rounded text-xs font-bold">
                X
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-[#040812] px-3 py-1 rounded text-xs font-bold">
                X
              </div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-accent text-[#040812] px-3 py-1 rounded text-xs font-bold">
                X
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-accent text-[#040812] px-3 py-1 rounded text-xs font-bold">
                X
              </div>
            </div>
          </div>
        </section>

        {/* Tamanhos Mínimos */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Tamanhos Mínimos</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-foreground mb-6">Digital</h4>
              <div className="mb-6">
                <h5 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rentabiliza
                </h5>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">• Largura mínima: <span className="text-foreground font-medium">120px</span></p>
                <p className="text-muted-foreground">• Altura mínima: <span className="text-foreground font-medium">32px</span></p>
                <p className="text-muted-foreground">• Uso: <span className="text-foreground">Websites, apps, emails</span></p>
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-foreground mb-6">Impresso</h4>
              <div className="mb-6">
                <h5 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rentabiliza
                </h5>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">• Largura mínima: <span className="text-foreground font-medium">30mm</span></p>
                <p className="text-muted-foreground">• Altura mínima: <span className="text-foreground font-medium">8mm</span></p>
                <p className="text-muted-foreground">• Uso: <span className="text-foreground">Cartões, folders, banners</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Uso Correto e Incorreto */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Uso Correto & Incorreto</h2>

          {/* Correto */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-500/20 text-green-500 rounded-xl flex items-center justify-center font-bold">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-foreground">Uso Correto</h3>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-8 border-2 border-green-500/30">
                <div className="mb-4 text-center">
                  <h4 className="text-3xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Rentabiliza
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Logo em fundo escuro
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 border-2 border-green-500/30">
                <div className="mb-4 text-center">
                  <h4 className="text-3xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Rentabiliza
                  </h4>
                </div>
                <p className="text-sm text-[#64748B] text-center">
                  Logo em fundo claro
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border-2 border-green-500/30">
                <div className="mb-4 text-center">
                  <h4 className="text-4xl font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Rentabiliza
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Tamanho adequado
                </p>
              </div>
            </div>
          </div>

          {/* Incorreto */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-500/20 text-red-500 rounded-xl flex items-center justify-center font-bold">
                ✕
              </div>
              <h3 className="text-2xl font-bold text-foreground">Uso Incorreto</h3>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-[#64748B] rounded-xl p-8 border-2 border-red-500/30 relative opacity-75">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-red-500/30 text-red-500 rounded-full flex items-center justify-center text-3xl">
                    ✕
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <h4 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Rentabiliza
                  </h4>
                </div>
                <p className="text-sm text-white/70 text-center">
                  Baixo contraste
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border-2 border-red-500/30 relative opacity-75">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-red-500/30 text-red-500 rounded-full flex items-center justify-center text-3xl">
                    ✕
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <h4 className="text-3xl font-bold text-red-500 italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Rentabiliza
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Cor ou estilo errado
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 border-2 border-red-500/30 relative opacity-75">
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-16 h-16 bg-red-500/30 text-red-500 rounded-full flex items-center justify-center text-3xl">
                    ✕
                  </div>
                </div>
                <div className="mb-4 text-center">
                  <h4 className="text-xs font-bold text-foreground" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Rentabiliza
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Tamanho mínimo
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <Link
            href="/brand-book/identidade-visual"
            className="text-muted-foreground hover:text-foreground flex items-center gap-2"
          >
            ← Seção anterior: Identidade Visual
          </Link>
          <Link
            href="/brand-book/componentes"
            className="text-accent hover:text-accent/80 flex items-center gap-2"
          >
            Próxima seção: Componentes UI →
          </Link>
        </div>
      </div>
    </div>
  )
}
