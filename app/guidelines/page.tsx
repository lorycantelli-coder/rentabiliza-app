'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">

      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>

        {/* Menu */}
        <div className="py-4">
          <Link href="/" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            FOUNDATIONS
          </Link>
          <Link href="/guidelines" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
            GUIDELINES
          </Link>
          <Link href="/movimento" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            MOVIMENTO
          </Link>
          <Link href="/logo" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            LOGO
          </Link>
          <Link href="/icons" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            ICONS
          </Link>
          <Link href="/moodboard" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            MOODBOARD
          </Link>
          <Link href="/brand-strategy" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            BRAND STRATEGY
          </Link>
        </div>

        {/* Version */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
            VERSION 2.0
          </p>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">

          {/* Header */}
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              BRAND IDENTITY
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              Brand Guidelines
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Os princípios fundamentais que definem a identidade visual e conceitual da Rentabiliza.
            </p>
          </div>

          {/* Section: Conceito Central */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Conceito Central</h2>

            <div className="bg-gradient-to-br from-[#DCA405]/10 to-transparent border border-[#DCA405]/20 rounded-2xl p-12 mb-8">
              <p className="text-4xl font-serif text-white mb-6 italic leading-relaxed">
                "Você investe, nós fazemos render."
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Este posicionamento resume nossa proposta de valor: empoderar investidores com acesso a oportunidades premium
                de investimento imobiliário, garantindo segurança jurídica e retornos superiores através de leilões estratégicos.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-[#DCA405] font-mono text-sm tracking-[0.3em] mb-4">METÁFORA VISUAL</h3>
                <h4 className="text-2xl font-serif text-white mb-3">Gold Premium</h4>
                <p className="text-white/60 leading-relaxed">
                  O dourado (#DCA405) representa sofisticação, valor premium e oportunidades raras.
                  Não é apenas uma cor, é a manifestação visual da exclusividade e excelência dos nossos serviços.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-[#DCA405] font-mono text-sm tracking-[0.3em] mb-4">FILOSOFIA DARK</h3>
                <h4 className="text-2xl font-serif text-white mb-3">Sofisticação Elegante</h4>
                <p className="text-white/60 leading-relaxed">
                  O fundo escuro (#040812) cria contraste dramático, refletindo seriedade, profissionalismo e
                  o ambiente exclusivo onde decisões financeiras estratégicas são tomadas.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Princípios de Design */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Princípios de Design</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-[#DCA405] pl-8 py-4">
                <h3 className="text-2xl font-serif text-white mb-3">Clareza Absoluta</h3>
                <p className="text-white/60 leading-relaxed mb-3">
                  Cada elemento visual deve comunicar informação de forma cristalina. Evitamos ornamentos desnecessários
                  e priorizamos legibilidade e hierarquia visual clara.
                </p>
                <code className="text-[#DCA405] font-mono text-sm">
                  Aplicação: Typography escalada, espaçamento generoso (24-48px), contraste mínimo 4.5:1
                </code>
              </div>

              <div className="border-l-4 border-[#DCA405] pl-8 py-4">
                <h3 className="text-2xl font-serif text-white mb-3">Elegância Técnica</h3>
                <p className="text-white/60 leading-relaxed mb-3">
                  Combinamos sofisticação visual com precisão técnica. Cada detalhe é pensado para transmitir
                  profissionalismo sem perder a humanidade e acessibilidade.
                </p>
                <code className="text-[#DCA405] font-mono text-sm">
                  Aplicação: Serif para títulos (emoção), Sans-serif para corpo (clareza), Mono para dados (precisão)
                </code>
              </div>

              <div className="border-l-4 border-[#DCA405] pl-8 py-4">
                <h3 className="text-2xl font-serif text-white mb-3">Contraste Dramático</h3>
                <p className="text-white/60 leading-relaxed mb-3">
                  Utilizamos contraste forte entre fundo escuro e elementos claros para criar impacto visual
                  imediato e facilitar a escaneabilidade de informações críticas.
                </p>
                <code className="text-[#DCA405] font-mono text-sm">
                  Aplicação: Background escuro (#040812), textos brancos (#FFFFFF), accents dourados (#DCA405)
                </code>
              </div>

              <div className="border-l-4 border-[#DCA405] pl-8 py-4">
                <h3 className="text-2xl font-serif text-white mb-3">Movimento Sutil</h3>
                <p className="text-white/60 leading-relaxed mb-3">
                  Animações e transições são suaves e funcionais, nunca gratuitas. Cada movimento tem propósito:
                  guiar o olhar, confirmar ações ou revelar informação progressivamente.
                </p>
                <code className="text-[#DCA405] font-mono text-sm">
                  Aplicação: Transitions 200-300ms ease-out, hover states suaves, scroll parallax discreto
                </code>
              </div>
            </div>
          </section>

          {/* Section: Aplicação Contextual */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Aplicação Contextual</h2>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#DCA405] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Landing Pages</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Hero impactante, grid de benefícios, CTAs em gold, proof points em destaque
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#DCA405] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Dashboard</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Cards com métricas, tabelas de performance, gráficos dark theme, hierarquia clara
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <div className="w-12 h-12 bg-[#DCA405] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif text-white mb-2">Conteúdo Educativo</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Typography legível, destaque para dados, citações em gold, sidebar para navegação
                </p>
              </div>
            </div>
          </section>

          {/* Section: Checklist de Qualidade */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Checklist de Qualidade Visual</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#DCA405] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Contraste WCAG AA ou superior (4.5:1)</p>
                    <p className="text-white/60 text-sm">Todos os textos devem ter contraste mínimo com o fundo</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#DCA405] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Hierarquia visual clara em 3 níveis</p>
                    <p className="text-white/60 text-sm">Títulos (Serif 48-72px), Subtítulos (Sans 24-32px), Corpo (Sans 16-18px)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#DCA405] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Gold usado com propósito estratégico</p>
                    <p className="text-white/60 text-sm">CTAs principais, highlights, badges, accents críticos</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#DCA405] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Espaçamento consistente (múltiplos de 8px)</p>
                    <p className="text-white/60 text-sm">Padding, margin, gaps seguem escala: 8, 16, 24, 32, 48, 64px</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#DCA405] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Responsivo mobile-first</p>
                    <p className="text-white/60 text-sm">Testes obrigatórios em 320px, 768px, 1280px, 1920px</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-[#DCA405] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <p className="text-white font-medium mb-1">Performance: LCP {'<'} 2.5s, CLS {'<'} 0.1</p>
                    <p className="text-white/60 text-sm">Core Web Vitals otimizados para experiência premium</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
