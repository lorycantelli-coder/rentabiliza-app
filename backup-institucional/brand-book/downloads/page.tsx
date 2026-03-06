'use client'

import Link from 'next/link'
import { Download, ArrowLeft, Check, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function BrandBookEditorialPage() {
  // Funções de download
  const downloadColorsCss = () => {
    const css = `/* Rentabiliza Design System - Colors */
:root {
  --color-navy: #040812;
  --color-gold: #DCA405;
  --color-white: #FFFFFF;
  --color-surface: #0A1326;
  --color-brand-blue: #0D1F3C;
  --color-slate: #64748B;
}`
    const blob = new Blob([css], { type: 'text/css' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'rentabiliza-colors.css'
    a.click()
    URL.revokeObjectURL(url)
  }

  const downloadLogoSvg = (variant: 'light' | 'dark' | 'gold') => {
    const configs = {
      light: { bg: '#FFFFFF', text: '#040812', accent: '#DCA405' },
      dark: { bg: '#040812', text: '#FFFFFF', accent: '#DCA405' },
      gold: { bg: '#DCA405', text: '#040812', accent: '#FFFFFF' }
    }
    const config = configs[variant]
    const svg = `<svg width="400" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="100" fill="${config.bg}" rx="8"/>
  <text x="20" y="55" font-family="Playfair Display" font-weight="700" font-size="48" fill="${config.text}">Rentabiliza</text>
  <rect x="20" y="70" width="360" height="3" fill="${config.accent}"/>
</svg>`
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `rentabiliza-logo-${variant}.svg`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-12 py-4 flex items-center justify-between">
          <Link href="/brand-book" className="flex items-center gap-2 text-sm text-accent hover:text-accent/80">
            <ArrowLeft size={16} />
            Brand Book
          </Link>
          <div className="text-sm text-muted-foreground">
            Rentabiliza Brand Book • v1.0 • 2026
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 max-w-[1400px] mx-auto">

        {/* COVER PAGE */}
        <section className="min-h-screen flex items-center justify-center px-12 py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#040812] via-[#0A1326] to-[#0D1F3C]" />
          <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-[#DCA405]/10 rounded-full blur-[100px]" />

          <div className="relative z-10 text-center">
            <div className="inline-block bg-[#DCA405]/20 border border-[#DCA405]/30 rounded-full px-6 py-2 mb-8">
              <p className="text-sm font-bold text-[#DCA405] tracking-wider">BRAND BOOK EDITORIAL</p>
            </div>

            <h1 className="text-[120px] font-bold text-white mb-6 leading-none tracking-tight" style={{ fontFamily: 'Playfair Display' }}>
              Rentabiliza
            </h1>

            <div className="h-1 w-32 bg-[#DCA405] mx-auto mb-8" />

            <p className="text-2xl text-[#64748B] mb-16 max-w-2xl mx-auto font-light">
              Investimentos inteligentes.<br/>Resultados extraordinários.
            </p>

            <div className="flex gap-6 justify-center text-sm text-muted-foreground">
              <div>
                <span className="text-foreground font-bold">Versão:</span> 1.0
              </div>
              <div>•</div>
              <div>
                <span className="text-foreground font-bold">Data:</span> Março 2026
              </div>
              <div>•</div>
              <div>
                <span className="text-foreground font-bold">Páginas:</span> 14
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 right-12 text-sm text-muted-foreground">
            01
          </div>
        </section>

        {/* THE ENEMY */}
        <section className="min-h-screen px-12 py-24 relative">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            THE ENEMY
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            02
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-8xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              A Complexidade
            </h2>

            <div className="grid grid-cols-2 gap-12">
              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Investir não deveria ser complexo. Mas o mercado financeiro criou um labirinto
                  de jargões, processos burocráticos e informações conflitantes que afastam
                  pessoas inteligentes de oportunidades reais de crescimento.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-[#DCA405] text-[#040812] rounded-2xl p-8">
                  <h3 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    85%
                  </h3>
                  <p className="text-sm">
                    dos investidores iniciantes desistem nos primeiros 6 meses por falta de clareza
                  </p>
                </div>

                <div className="bg-card border border-white/10 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    73%
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    relatam dificuldade em entender termos técnicos e estratégias
                  </p>
                </div>

                <div className="bg-card border border-white/10 rounded-2xl p-8">
                  <h3 className="text-3xl font-bold text-foreground mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    92%
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    buscam plataformas que simplifiquem sem perder sofisticação
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE */}
        <section className="min-h-screen px-12 py-24 relative bg-card/30">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            TARGET AUDIENCE
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            03
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-8xl font-bold mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Os <span className="text-[#DCA405]">Investidores</span><br/>
              Inteligentes
            </h2>

            <div className="bg-[#DCA405] text-[#040812] rounded-2xl p-16 mb-12">
              <p className="text-2xl font-medium leading-relaxed mb-8">
                Pessoas com visão de longo prazo, que buscam rentabilidade consistente
                através de estratégias baseadas em dados e análises profundas de mercado.
              </p>
              <p className="text-lg opacity-80">
                Não acreditam em fórmulas mágicas, mas sim em processos sólidos e decisões informadas.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-background border border-white/10 rounded-xl p-8">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Executivos</h3>
                <p className="text-sm text-muted-foreground">
                  35-55 anos, renda mensal R$15K+, buscam diversificação inteligente
                </p>
              </div>

              <div className="bg-background border border-white/10 rounded-xl p-8">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Empreendedores</h3>
                <p className="text-sm text-muted-foreground">
                  28-45 anos, capital para investir, valorizam eficiência e ROI
                </p>
              </div>

              <div className="bg-background border border-white/10 rounded-xl p-8">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-foreground mb-2">Profissionais</h3>
                <p className="text-sm text-muted-foreground">
                  30-50 anos, buscam crescimento patrimonial consistente
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUE PROPOSITION */}
        <section className="min-h-screen px-12 py-24 relative">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            VALUE PROPOSITION
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            04
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <div className="bg-[#DCA405] text-[#040812] rounded-3xl p-20 mb-16">
              <p className="text-sm font-bold tracking-wider mb-6">O SEGREDO</p>
              <h2 className="text-7xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                Complexidade para<br/>
                Clareza Rentável
              </h2>
              <p className="text-2xl opacity-80">
                Transformamos análises complexas de mercado em estratégias claras
                que geram resultados extraordinários
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="text-6xl font-bold text-[#DCA405]" style={{ fontFamily: 'Playfair Display' }}>
                  01
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Data-Driven Intelligence</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Algoritmos proprietários analisam milhares de variáveis de mercado em tempo real,
                    identificando oportunidades que o olho humano não consegue perceber
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex gap-8 items-start">
                <div className="text-6xl font-bold text-[#DCA405]" style={{ fontFamily: 'Playfair Display' }}>
                  02
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Simplicidade Sofisticada</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Interface intuitiva que traduz complexidade em ações claras. Você entende
                    exatamente onde investir, quanto alocar e por quê
                  </p>
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <div className="flex gap-8 items-start">
                <div className="text-6xl font-bold text-[#DCA405]" style={{ fontFamily: 'Playfair Display' }}>
                  03
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-foreground mb-4">Performance Comprovada</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Histórico de rentabilidade 34% acima da média do mercado nos últimos 3 anos,
                    com risk-adjusted returns superiores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* THE MANIFESTO */}
        <section className="min-h-screen px-12 py-24 relative bg-background">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            THE MANIFESTO
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            05
          </div>

          <div className="max-w-4xl mx-auto pt-20">
            <div className="bg-card border border-white/10 rounded-3xl p-20">
              <h2 className="text-6xl font-bold text-foreground mb-12 leading-tight" style={{ fontFamily: 'Playfair Display' }}>
                &ldquo;Investir não precisa ser<br/>
                um jogo de sorte.<br/>
                É uma ciência.&rdquo;
              </h2>

              <div className="space-y-8 text-xl text-muted-foreground leading-relaxed">
                <p>
                  Acreditamos que <strong className="text-foreground">decisões financeiras inteligentes</strong> vêm
                  de informação clara, análise profunda e execução disciplinada.
                </p>

                <p>
                  Não prometemos milagres. Prometemos <strong className="text-foreground">transparência total</strong>,
                  dados reais e estratégias comprovadas que funcionam no mundo real.
                </p>

                <p>
                  Seu dinheiro merece mais do que apostas. Merece <strong className="text-foreground">estratégia,
                  inteligência e resultados consistentes</strong>.
                </p>

                <p className="pt-8 border-t border-white/10">
                  Rentabiliza é o sistema que remove a complexidade e entrega <strong className="text-[#DCA405]">clareza rentável</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PERSONALITY */}
        <section className="min-h-screen px-12 py-24 relative">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            BRAND PERSONALITY
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            06
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-7xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Personalidade
            </h2>

            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="bg-[#DCA405] text-[#040812] rounded-2xl p-12">
                <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Confiante
                </h3>
                <p className="text-lg">
                  Demonstramos expertise sem arrogância. Sabemos o que fazemos e provamos com resultados.
                </p>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Transparente
                </h3>
                <p className="text-lg text-muted-foreground">
                  Sem jargões desnecessários. Informação clara, direta e acessível para todos.
                </p>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Analítica
                </h3>
                <p className="text-lg text-muted-foreground">
                  Decisões baseadas em dados, não em emoções. Ciência aplicada a investimentos.
                </p>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Sofisticada
                </h3>
                <p className="text-lg text-muted-foreground">
                  Elegância visual e técnica. Complexidade por trás, simplicidade na frente.
                </p>
              </div>
            </div>

            {/* Traits */}
            <div className="bg-background border border-white/10 rounded-2xl p-12">
              <h3 className="text-xl font-bold text-foreground mb-6">Características</h3>
              <div className="flex flex-wrap gap-3">
                {['Data-Driven', 'Confiável', 'Profissional', 'Inovadora', 'Objetiva', 'Estratégica', 'Clara', 'Precisa'].map((trait) => (
                  <Badge key={trait} variant="outline" className="px-6 py-3 text-base border-[#DCA405]/30 text-foreground">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* VOICE STRATEGY */}
        <section className="min-h-screen px-12 py-24 relative bg-card/30">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            VOICE STRATEGY
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            07
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-7xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Tom de Voz
            </h2>

            <div className="grid grid-cols-2 gap-12 mb-16">
              {/* Use */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="text-green-500" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">USE</h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Estratégia',
                    'ROI (Retorno sobre Investimento)',
                    'Data-driven (Baseado em dados)',
                    'Performance',
                    'Otimização',
                    'Análise',
                    'Crescimento sustentável',
                    'Diversificação inteligente'
                  ].map((word) => (
                    <div key={word} className="bg-background border border-green-500/20 rounded-xl px-6 py-4">
                      <p className="text-foreground font-medium">{word}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Avoid */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <X className="text-red-500" size={20} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">EVITE</h3>
                </div>

                <div className="space-y-4">
                  {[
                    'Revolucionário',
                    'Incrível / Inacreditável',
                    'Garantido',
                    'Nunca visto antes',
                    'Mágica / Milagre',
                    'Segredo revelado',
                    'Fique rico rápido',
                    'Sem riscos'
                  ].map((word) => (
                    <div key={word} className="bg-background border border-red-500/20 rounded-xl px-6 py-4 opacity-60">
                      <p className="text-muted-foreground line-through">{word}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-[#DCA405] text-[#040812] rounded-2xl p-12">
              <h3 className="text-2xl font-bold mb-8">Exemplos de Copy</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-sm opacity-60 mb-2">✅ HEADLINE BOA</p>
                  <p className="text-2xl font-bold">"Aumente seu ROI em 30% com estratégias baseadas em dados"</p>
                </div>

                <div className="h-px bg-black/20" />

                <div>
                  <p className="text-sm opacity-60 mb-2">❌ HEADLINE RUIM</p>
                  <p className="text-2xl opacity-50 line-through">"A solução revolucionária que vai mudar sua vida"</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TYPOGRAPHY */}
        <section className="min-h-screen px-12 py-24 relative">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            TYPOGRAPHY
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            08
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-7xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Tipografia
            </h2>

            <div className="grid grid-cols-2 gap-12 mb-16">
              {/* Display Font */}
              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <p className="text-sm text-muted-foreground mb-4">DISPLAY / HEADLINES</p>
                <h3 className="text-6xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display' }}>
                  Playfair<br/>Display
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Serif elegante para títulos, headlines e momentos de destaque.
                  Transmite sofisticação e credibilidade.
                </p>
                <div className="space-y-2 text-sm font-mono text-muted-foreground">
                  <p>Weights: 400, 600, 700, 400 Italic</p>
                  <p>Usage: H1-H6, Hero sections</p>
                </div>
              </div>

              {/* Body Font */}
              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <p className="text-sm text-muted-foreground mb-4">BODY / INTERFACE</p>
                <h3 className="text-6xl font-bold text-foreground mb-6">
                  Inter
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Sans-serif moderna para corpo de texto, navegação e interface.
                  Excelente legibilidade em todos os tamanhos.
                </p>
                <div className="space-y-2 text-sm font-mono text-muted-foreground">
                  <p>Weights: 300, 400, 500, 700</p>
                  <p>Usage: Body, UI, Forms, Data</p>
                </div>
              </div>
            </div>

            {/* Type Scale */}
            <div className="bg-background border border-white/10 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8">Type Scale</h3>

              <div className="space-y-6">
                {[
                  { label: 'H1', size: '72px / 4.5rem', example: 'Hero Headlines', fontClass: 'text-6xl' },
                  { label: 'H2', size: '60px / 3.75rem', example: 'Section Titles', fontClass: 'text-5xl' },
                  { label: 'H3', size: '48px / 3rem', example: 'Subsections', fontClass: 'text-4xl' },
                  { label: 'H4', size: '36px / 2.25rem', example: 'Card Titles', fontClass: 'text-3xl' },
                  { label: 'Body', size: '16px / 1rem', example: 'Paragraph Text', fontClass: 'text-base' },
                  { label: 'Small', size: '14px / 0.875rem', example: 'Labels, Captions', fontClass: 'text-sm' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-8 border-b border-white/5 pb-4 last:border-0">
                    <div className="w-20">
                      <p className="text-sm font-mono text-muted-foreground">{item.label}</p>
                    </div>
                    <div className="w-40">
                      <p className="text-sm font-mono text-muted-foreground">{item.size}</p>
                    </div>
                    <div className="flex-1">
                      <p className={`${item.fontClass} font-bold text-foreground`} style={{ fontFamily: 'Playfair Display' }}>
                        {item.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* COLOR PALETTE */}
        <section className="min-h-screen px-12 py-24 relative bg-card/30">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            COLOR PALETTE
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            09
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-7xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Cores
            </h2>

            {/* Primary Colors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">Cores Primárias</h3>

              <div className="grid grid-cols-3 gap-8">
                {/* Navy */}
                <div>
                  <div className="h-64 bg-[#040812] rounded-2xl mb-6 border border-white/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-white text-sm font-mono">#040812</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    Navy
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Background principal. Solidez, confiança, profundidade.
                  </p>
                  <div className="space-y-1 text-sm font-mono text-muted-foreground">
                    <p>HEX: #040812</p>
                    <p>RGB: 4, 8, 18</p>
                    <p>HSL: 220°, 64%, 4%</p>
                  </div>
                </div>

                {/* Gold */}
                <div>
                  <div className="h-64 bg-[#DCA405] rounded-2xl mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-[#040812] text-sm font-mono">#DCA405</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    Gold
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Accent principal. Prosperidade, energia, ação.
                  </p>
                  <div className="space-y-1 text-sm font-mono text-muted-foreground">
                    <p>HEX: #DCA405</p>
                    <p>RGB: 220, 164, 5</p>
                    <p>HSL: 44°, 96%, 44%</p>
                  </div>
                </div>

                {/* White */}
                <div>
                  <div className="h-64 bg-white rounded-2xl mb-6 border border-[#040812]/10 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <p className="text-[#040812] text-sm font-mono">#FFFFFF</p>
                    </div>
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-3" style={{ fontFamily: 'Playfair Display' }}>
                    White
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Textos, clareza, pureza, contraste.
                  </p>
                  <div className="space-y-1 text-sm font-mono text-muted-foreground">
                    <p>HEX: #FFFFFF</p>
                    <p>RGB: 255, 255, 255</p>
                    <p>HSL: 0°, 0%, 100%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Colors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-foreground mb-8">Cores Secundárias</h3>

              <div className="grid grid-cols-3 gap-6">
                <div className="bg-[#0A1326] border border-white/10 rounded-xl p-6 text-center">
                  <div className="h-32 bg-[#0A1326] rounded-lg mb-4 border border-white/10" />
                  <p className="font-bold text-foreground mb-1">Surface</p>
                  <p className="text-sm font-mono text-muted-foreground">#0A1326</p>
                </div>

                <div className="bg-[#0D1F3C] border border-white/10 rounded-xl p-6 text-center">
                  <div className="h-32 bg-[#0D1F3C] rounded-lg mb-4 border border-white/10" />
                  <p className="font-bold text-foreground mb-1">Brand Blue</p>
                  <p className="text-sm font-mono text-muted-foreground">#0D1F3C</p>
                </div>

                <div className="bg-[#64748B] border border-white/10 rounded-xl p-6 text-center">
                  <div className="h-32 bg-[#64748B] rounded-lg mb-4" />
                  <p className="font-bold text-foreground mb-1">Slate</p>
                  <p className="text-sm font-mono text-muted-foreground">#64748B</p>
                </div>
              </div>
            </div>

            {/* Contrast Ratios */}
            <div className="bg-background border border-white/10 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-foreground mb-8">Acessibilidade (WCAG 2.1)</h3>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-white rounded-xl p-8 mb-4">
                    <p className="text-6xl font-bold text-[#040812]">21:1</p>
                  </div>
                  <p className="font-bold text-foreground mb-2">Navy sobre White</p>
                  <Badge className="bg-green-500/20 text-green-500">AAA</Badge>
                </div>

                <div className="text-center">
                  <div className="bg-[#040812] border border-white/10 rounded-xl p-8 mb-4">
                    <p className="text-6xl font-bold text-[#DCA405]">7.2:1</p>
                  </div>
                  <p className="font-bold text-foreground mb-2">Gold sobre Navy</p>
                  <Badge className="bg-green-500/20 text-green-500">AAA</Badge>
                </div>

                <div className="text-center">
                  <div className="bg-[#040812] border border-white/10 rounded-xl p-8 mb-4">
                    <p className="text-6xl font-bold text-white">17.8:1</p>
                  </div>
                  <p className="font-bold text-foreground mb-2">White sobre Navy</p>
                  <Badge className="bg-green-500/20 text-green-500">AAA</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LOGO CONSTRUCTION */}
        <section className="min-h-screen px-12 py-24 relative">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            LOGO CONSTRUCTION
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            10
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-7xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Logo
            </h2>

            {/* Logo Variations */}
            <div className="grid grid-cols-3 gap-8 mb-16">
              <div className="bg-white rounded-2xl p-12 text-center">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-[#040812] mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    Rentabiliza
                  </h3>
                  <div className="h-1 w-full bg-[#DCA405] rounded" />
                </div>
                <p className="text-sm text-[#040812] mb-4 font-medium">Logo Light</p>
                <Button
                  onClick={() => downloadLogoSvg('light')}
                  size="sm"
                  className="w-full"
                >
                  <Download size={14} className="mr-2" />
                  Download SVG
                </Button>
              </div>

              <div className="bg-[#040812] border border-white/10 rounded-2xl p-12 text-center">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    Rentabiliza
                  </h3>
                  <div className="h-1 w-full bg-[#DCA405] rounded" />
                </div>
                <p className="text-sm text-white mb-4 font-medium">Logo Dark</p>
                <Button
                  onClick={() => downloadLogoSvg('dark')}
                  size="sm"
                  className="w-full"
                >
                  <Download size={14} className="mr-2" />
                  Download SVG
                </Button>
              </div>

              <div className="bg-[#DCA405] rounded-2xl p-12 text-center">
                <div className="mb-8">
                  <h3 className="text-4xl font-bold text-[#040812] mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    Rentabiliza
                  </h3>
                  <div className="h-1 w-full bg-white rounded" />
                </div>
                <p className="text-sm text-[#040812] mb-4 font-medium">Logo Gold</p>
                <Button
                  onClick={() => downloadLogoSvg('gold')}
                  size="sm"
                  variant="secondary"
                  className="w-full"
                >
                  <Download size={14} className="mr-2" />
                  Download SVG
                </Button>
              </div>
            </div>

            {/* Logo Guidelines */}
            <div className="grid grid-cols-2 gap-12 mb-16">
              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Especificações</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Fonte:</span>
                    <span className="text-foreground font-mono text-sm">Playfair Display Bold</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tamanho mínimo digital:</span>
                    <span className="text-foreground font-mono text-sm">120px</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tamanho mínimo impresso:</span>
                    <span className="text-foreground font-mono text-sm">30mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Área de proteção:</span>
                    <span className="text-foreground font-mono text-sm">Altura "R"</span>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-white/10 rounded-2xl p-12">
                <h3 className="text-2xl font-bold text-foreground mb-6">Uso Correto</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-muted-foreground">Usar em fundos com contraste adequado</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-muted-foreground">Manter proporções originais</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-muted-foreground">Respeitar área de proteção</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-muted-foreground">Não rotacionar ou distorcer</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                    <p className="text-sm text-muted-foreground">Não usar cores não aprovadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DOWNLOADS */}
        <section className="min-h-screen px-12 py-24 relative bg-card/30">
          <div className="absolute top-8 left-12 text-xs text-muted-foreground tracking-wider">
            DOWNLOADS
          </div>
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            11
          </div>

          <div className="max-w-5xl mx-auto pt-20">
            <h2 className="text-7xl font-bold text-foreground mb-16 leading-none" style={{ fontFamily: 'Playfair Display' }}>
              Assets
            </h2>

            {/* Download Cards */}
            <div className="grid grid-cols-2 gap-8 mb-16">
              <div className="bg-background border border-white/10 rounded-2xl p-12">
                <div className="w-16 h-16 bg-[#DCA405]/20 rounded-xl flex items-center justify-center mb-6">
                  <Download className="text-[#DCA405]" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Logos SVG
                </h3>
                <p className="text-muted-foreground mb-6">
                  3 variações (Light, Dark, Gold) em formato vetorial escalável
                </p>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline">SVG</Badge>
                  <Badge variant="outline">Escalável</Badge>
                  <Badge variant="outline">3 variações</Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  Clique nas variações acima na seção Logo para baixar
                </p>
              </div>

              <div className="bg-background border border-white/10 rounded-2xl p-12">
                <div className="w-16 h-16 bg-[#DCA405]/20 rounded-xl flex items-center justify-center mb-6">
                  <Download className="text-[#DCA405]" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Paleta CSS
                </h3>
                <p className="text-muted-foreground mb-6">
                  Variáveis CSS prontas com cores primárias e secundárias
                </p>
                <div className="flex gap-2 mb-6">
                  <Badge variant="outline">CSS3</Badge>
                  <Badge variant="outline">1.2 KB</Badge>
                </div>
                <Button
                  onClick={downloadColorsCss}
                  className="w-full"
                >
                  <Download size={16} className="mr-2" />
                  Baixar CSS
                </Button>
              </div>
            </div>

            {/* Full Package */}
            <div className="bg-gradient-to-br from-[#040812] to-[#0D1F3C] rounded-3xl p-16 text-center relative overflow-hidden">
              <div className="absolute top-10 right-10 w-64 h-64 bg-[#DCA405]/10 rounded-full blur-[80px]" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-[#DCA405]/20 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Download className="text-[#DCA405]" size={32} />
                </div>

                <h3 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display' }}>
                  Pacote Completo
                </h3>

                <p className="text-xl text-[#64748B] mb-12 max-w-2xl mx-auto">
                  Todos os assets em um único arquivo ZIP: logos, cores, documentação e guias
                </p>

                <Button
                  size="lg"
                  disabled
                  className="px-8 py-6 text-lg"
                >
                  <Download className="mr-3" size={20} />
                  Em breve
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CREDITS / FINAL PAGE */}
        <section className="min-h-screen px-12 py-24 relative flex items-center justify-center">
          <div className="absolute top-8 right-12 text-sm text-muted-foreground">
            12
          </div>

          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-12">
              <h2 className="text-8xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Rentabiliza
              </h2>
              <div className="h-1 w-48 bg-[#DCA405] mx-auto mb-8" />
              <p className="text-2xl text-muted-foreground">
                Investimentos Inteligentes
              </p>
            </div>

            <div className="bg-card border border-white/10 rounded-2xl p-12 mb-12">
              <div className="grid grid-cols-3 gap-8 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Versão</p>
                  <p className="text-foreground font-bold">1.0</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Data</p>
                  <p className="text-foreground font-bold">Março 2026</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Status</p>
                  <p className="text-foreground font-bold">Ativo</p>
                </div>
              </div>
            </div>

            <div className="flex gap-6 justify-center">
              <Link href="/brand-book">
                <Button variant="outline">
                  Voltar ao Brand Book
                </Button>
              </Link>
              <Link href="http://localhost:6006" target="_blank">
                <Button variant="outline">
                  Ver Storybook
                </Button>
              </Link>
            </div>

            <p className="text-xs text-muted-foreground mt-12">
              © 2026 Rentabiliza. Todos os direitos reservados.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}
