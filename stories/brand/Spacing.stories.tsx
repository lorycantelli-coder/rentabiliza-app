import type { Meta, StoryObj } from '@storybook/nextjs-vite'

const meta = {
  title: 'Brand Book/01. Identidade Visual/Spacing & Grid',
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const SpacingScale: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      {/* Header */}
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Spacing Scale</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Sistema de espaçamento consistente baseado em múltiplos de 4px para criar ritmo visual e harmonia.
        </p>
      </div>

      {/* Spacing Tokens */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">Spacing Tokens</h2>

        <div className="space-y-4">
          {[
            { name: '0.5', px: '2px', rem: '0.125rem' },
            { name: '1', px: '4px', rem: '0.25rem' },
            { name: '1.5', px: '6px', rem: '0.375rem' },
            { name: '2', px: '8px', rem: '0.5rem' },
            { name: '2.5', px: '10px', rem: '0.625rem' },
            { name: '3', px: '12px', rem: '0.75rem' },
            { name: '4', px: '16px', rem: '1rem' },
            { name: '5', px: '20px', rem: '1.25rem' },
            { name: '6', px: '24px', rem: '1.5rem' },
            { name: '8', px: '32px', rem: '2rem' },
            { name: '10', px: '40px', rem: '2.5rem' },
            { name: '12', px: '48px', rem: '3rem' },
            { name: '16', px: '64px', rem: '4rem' },
            { name: '20', px: '80px', rem: '5rem' },
            { name: '24', px: '96px', rem: '6rem' },
          ].map((token) => (
            <div
              key={token.name}
              className="flex items-center gap-8 bg-card rounded-xl p-4 border border-white/10"
            >
              <div className="w-32 flex-shrink-0">
                <p className="text-sm font-mono text-foreground">space-{token.name}</p>
                <p className="text-xs text-muted-foreground">{token.px} / {token.rem}</p>
              </div>
              <div className="flex-grow flex items-center gap-4">
                <div
                  className="bg-accent h-12"
                  style={{ width: token.px }}
                />
                <p className="text-sm text-muted-foreground">{token.px}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Usage Guidelines */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">Usage Guidelines</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Micro Spacing</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Para elementos relacionados e pequenos ajustes
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-sm text-foreground">space-0.5, space-1, space-1.5</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-sm text-foreground">Ícones e texto (gap-2)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-sm text-foreground">Labels e inputs (gap-1.5)</p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Macro Spacing</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Para seções e blocos de conteúdo
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-sm text-foreground">space-12, space-16, space-20</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-sm text-foreground">Entre seções (mb-16)</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <p className="text-sm text-foreground">Padding de containers (p-12)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const GridSystem: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Grid System</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Sistema de grid responsivo de 12 colunas para layouts consistentes e flexíveis.
        </p>
      </div>

      {/* Grid Overview */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-foreground mb-8">12-Column Grid</h2>

        <div className="bg-card rounded-xl p-8 border border-white/10 mb-8">
          <div className="grid grid-cols-12 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="h-24 bg-accent/20 border border-accent flex items-center justify-center"
              >
                <span className="text-sm font-mono text-foreground">{i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card rounded-xl p-6 border border-white/10">
            <p className="text-sm font-medium text-accent mb-2">Desktop</p>
            <p className="text-2xl font-bold text-foreground mb-1">1440px</p>
            <p className="text-sm text-muted-foreground">12 columns</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-white/10">
            <p className="text-sm font-medium text-accent mb-2">Tablet</p>
            <p className="text-2xl font-bold text-foreground mb-1">768px</p>
            <p className="text-sm text-muted-foreground">8 columns</p>
          </div>
          <div className="bg-card rounded-xl p-6 border border-white/10">
            <p className="text-sm font-medium text-accent mb-2">Mobile</p>
            <p className="text-2xl font-bold text-foreground mb-1">375px</p>
            <p className="text-sm text-muted-foreground">4 columns</p>
          </div>
        </div>
      </section>

      {/* Layout Examples */}
      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">Layout Examples</h2>

        <div className="space-y-8">
          {/* 2 Column Layout */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">6/6 - Two Equal Columns</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">6 columns</span>
              </div>
              <div className="col-span-6 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">6 columns</span>
              </div>
            </div>
          </div>

          {/* 3 Column Layout */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">4/4/4 - Three Equal Columns</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-4 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">4 columns</span>
              </div>
              <div className="col-span-4 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">4 columns</span>
              </div>
              <div className="col-span-4 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">4 columns</span>
              </div>
            </div>
          </div>

          {/* Sidebar Layout */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">8/4 - Main Content + Sidebar</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-8 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">8 columns - Main Content</span>
              </div>
              <div className="col-span-4 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">4 columns - Sidebar</span>
              </div>
            </div>
          </div>

          {/* Asymmetric Layout */}
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-4">7/5 - Asymmetric Layout</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-7 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">7 columns</span>
              </div>
              <div className="col-span-5 h-32 bg-accent/20 border border-accent rounded-xl flex items-center justify-center">
                <span className="text-sm font-mono text-foreground">5 columns</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}

export const BorderRadius: Story = {
  render: () => (
    <div className="min-h-screen bg-background p-12">
      <div className="mb-16">
        <p className="text-sm font-medium text-muted-foreground mb-2">01. IDENTIDADE VISUAL</p>
        <h1 className="text-6xl font-bold text-foreground mb-4">Border Radius</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Sistema de border radius baseado em 12px para criar elementos modernos e suaves.
        </p>
      </div>

      <section>
        <h2 className="text-3xl font-bold text-foreground mb-8">Radius Tokens</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { name: 'none', value: '0px', class: 'rounded-none' },
            { name: 'sm', value: '8px', class: 'rounded-sm' },
            { name: 'md', value: '10px', class: 'rounded-md' },
            { name: 'DEFAULT', value: '12px', class: 'rounded-xl' },
            { name: 'lg', value: '12px', class: 'rounded-lg' },
            { name: 'xl', value: '16px', class: 'rounded-xl' },
            { name: '2xl', value: '20px', class: 'rounded-2xl' },
            { name: '3xl', value: '24px', class: 'rounded-3xl' },
            { name: 'full', value: '9999px', class: 'rounded-full' },
          ].map((radius) => (
            <div key={radius.name}>
              <div
                className={`h-32 bg-accent/20 border-2 border-accent ${radius.class} mb-4 flex items-center justify-center`}
              >
                <span className="text-sm font-mono text-foreground">{radius.value}</span>
              </div>
              <p className="text-sm font-medium text-foreground">radius-{radius.name}</p>
              <p className="text-xs text-muted-foreground">{radius.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Uso Comum</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-xl" />
                <div>
                  <p className="text-sm font-medium text-foreground">Botões, Cards</p>
                  <p className="text-xs text-muted-foreground">rounded-xl (12px)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-lg" />
                <div>
                  <p className="text-sm font-medium text-foreground">Inputs, Badges</p>
                  <p className="text-xs text-muted-foreground">rounded-lg (8-10px)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-accent rounded-full" />
                <div>
                  <p className="text-sm font-medium text-foreground">Avatares, Pills</p>
                  <p className="text-xs text-muted-foreground">rounded-full</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl p-8 border border-white/10">
            <h3 className="text-xl font-bold text-foreground mb-4">Exemplo de Aplicação</h3>
            <div className="space-y-4">
              <button className="w-full bg-white text-[#040812] px-6 py-3 rounded-xl font-bold">
                Button (rounded-xl)
              </button>
              <input
                type="text"
                placeholder="Input (rounded-lg)"
                className="w-full bg-transparent border border-white/20 px-4 py-2 rounded-lg text-white"
              />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-accent rounded-full" />
                <div>
                  <p className="text-sm font-medium text-foreground">Avatar</p>
                  <p className="text-xs text-muted-foreground">rounded-full</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  ),
}
