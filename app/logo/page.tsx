'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">

      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>

        <div className="py-4">
          <Link href="/" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            FOUNDATIONS
          </Link>
          <Link href="/guidelines" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            GUIDELINES
          </Link>
          <Link href="/movimento" className="block px-6 py-3 text-sm font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">
            MOVIMENTO
          </Link>
          <Link href="/logo" className="block px-6 py-3 text-sm font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">
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
              Logo & Marca
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Sistema de logo, variantes e regras de aplicação para manter consistência visual em todos os contextos.
            </p>
          </div>

          {/* Section: Logo Principal */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Logo Principal</h2>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-16 mb-8 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl font-serif text-white mb-4 tracking-tight">
                  Rentabiliza
                </h1>
                <p className="text-sm font-mono text-[#DCA405] tracking-[0.4em]">
                  INVESTIMENTOS IMOBILIÁRIOS
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div>
                <p className="text-white/40 font-mono mb-1">TYPEFACE</p>
                <p className="text-white font-medium">Playfair Display</p>
              </div>
              <div>
                <p className="text-white/40 font-mono mb-1">WEIGHT</p>
                <p className="text-white font-medium">Regular (400)</p>
              </div>
              <div>
                <p className="text-white/40 font-mono mb-1">TAGLINE</p>
                <p className="text-white font-medium">Outfit Regular</p>
              </div>
            </div>
          </section>

          {/* Section: Variantes */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Variantes</h2>

            <div className="grid grid-cols-2 gap-6">
              {/* Dark Version */}
              <div>
                <p className="text-white/60 text-sm mb-3 font-mono tracking-wider">DARK VERSION (Primary)</p>
                <div className="bg-[#040812] border border-white/10 rounded-xl p-12 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif text-white mb-2 tracking-tight">
                      Rentabiliza
                    </h2>
                    <p className="text-[10px] font-mono text-[#DCA405] tracking-[0.4em]">
                      INVESTIMENTOS IMOBILIÁRIOS
                    </p>
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-3">
                  Uso: Fundos escuros, apresentações, website
                </p>
              </div>

              {/* Light Version */}
              <div>
                <p className="text-white/60 text-sm mb-3 font-mono tracking-wider">LIGHT VERSION</p>
                <div className="bg-white border border-gray-200 rounded-xl p-12 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif text-[#040812] mb-2 tracking-tight">
                      Rentabiliza
                    </h2>
                    <p className="text-[10px] font-mono text-[#DCA405] tracking-[0.4em]">
                      INVESTIMENTOS IMOBILIÁRIOS
                    </p>
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-3">
                  Uso: Documentos impressos, fundos claros
                </p>
              </div>

              {/* Gold Version */}
              <div>
                <p className="text-white/60 text-sm mb-3 font-mono tracking-wider">GOLD ACCENT</p>
                <div className="bg-gradient-to-br from-[#DCA405]/20 to-transparent border border-[#DCA405]/30 rounded-xl p-12 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif text-[#DCA405] mb-2 tracking-tight">
                      Rentabiliza
                    </h2>
                    <p className="text-[10px] font-mono text-white tracking-[0.4em]">
                      INVESTIMENTOS IMOBILIÁRIOS
                    </p>
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-3">
                  Uso: CTAs, highlights, elementos premium
                </p>
              </div>

              {/* Monochrome */}
              <div>
                <p className="text-white/60 text-sm mb-3 font-mono tracking-wider">MONOCHROME</p>
                <div className="bg-white/5 border border-white/10 rounded-xl p-12 flex items-center justify-center">
                  <div className="text-center">
                    <h2 className="text-4xl font-serif text-white mb-2 tracking-tight">
                      Rentabiliza
                    </h2>
                    <p className="text-[10px] font-mono text-white/60 tracking-[0.4em]">
                      INVESTIMENTOS IMOBILIÁRIOS
                    </p>
                  </div>
                </div>
                <p className="text-white/40 text-xs mt-3">
                  Uso: Fax, impressões econômicas, marcas d'água
                </p>
              </div>
            </div>
          </section>

          {/* Section: Clear Space */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Área de Segurança</h2>

            <div className="bg-white/5 border border-white/10 rounded-xl p-12">
              <div className="relative inline-block">
                <div className="text-center">
                  <h2 className="text-4xl font-serif text-white mb-2 tracking-tight">
                    Rentabiliza
                  </h2>
                  <p className="text-[10px] font-mono text-[#DCA405] tracking-[0.4em]">
                    INVESTIMENTOS IMOBILIÁRIOS
                  </p>
                </div>

                {/* Grid de segurança visual */}
                <div className="absolute inset-0 border-2 border-dashed border-[#DCA405]/30 -m-12"></div>
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#DCA405] -mt-12 -ml-12"></div>
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#DCA405] -mt-12 -mr-12"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-[#DCA405] -mb-12 -ml-12"></div>
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#DCA405] -mb-12 -mr-12"></div>
              </div>

              <div className="mt-16 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="text-white/40 font-mono mb-1">ESPAÇO MÍNIMO</p>
                  <p className="text-white">Altura do "R" maiúsculo</p>
                </div>
                <div>
                  <p className="text-white/40 font-mono mb-1">TAMANHO MÍNIMO</p>
                  <p className="text-white">120px largura (digital)</p>
                </div>
                <div>
                  <p className="text-white/40 font-mono mb-1">TAMANHO MÍNIMO</p>
                  <p className="text-white">40mm largura (impresso)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Uso Incorreto */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Uso Incorreto</h2>
            <p className="text-white/60 mb-8">
              Exemplos de aplicações que devem ser evitadas para manter integridade da marca.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {/* Erro 1: Distorção */}
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-red-500 text-2xl">✕</span>
                  </div>
                  <div className="text-center transform scale-x-150">
                    <h3 className="text-2xl font-serif text-white/50 mb-1">
                      Rentabiliza
                    </h3>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Não distorcer proporções</p>
              </div>

              {/* Erro 2: Cores erradas */}
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-red-500 text-2xl">✕</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-blue-500 mb-1">
                      Rentabiliza
                    </h3>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Não usar cores não aprovadas</p>
              </div>

              {/* Erro 3: Outline */}
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-red-500 text-2xl">✕</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-transparent mb-1" style={{ WebkitTextStroke: '1px white' }}>
                      Rentabiliza
                    </h3>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Não aplicar outline</p>
              </div>

              {/* Erro 4: Rotação */}
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-red-500 text-2xl">✕</span>
                  </div>
                  <div className="text-center transform rotate-12">
                    <h3 className="text-2xl font-serif text-white/50 mb-1">
                      Rentabiliza
                    </h3>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Não rotacionar logo</p>
              </div>

              {/* Erro 5: Fundo complexo */}
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"></div>
                  </div>
                  <div className="absolute top-3 right-3 z-10">
                    <span className="text-red-500 text-2xl">✕</span>
                  </div>
                  <div className="text-center relative z-10">
                    <h3 className="text-2xl font-serif text-white/50 mb-1">
                      Rentabiliza
                    </h3>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Não usar fundos complexos</p>
              </div>

              {/* Erro 6: Sombras pesadas */}
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-8 relative overflow-hidden">
                  <div className="absolute top-3 right-3">
                    <span className="text-red-500 text-2xl">✕</span>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-serif text-white/50 mb-1" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.8)' }}>
                      Rentabiliza
                    </h3>
                  </div>
                </div>
                <p className="text-red-400 text-xs mt-2 font-medium">Não aplicar sombras pesadas</p>
              </div>
            </div>
          </section>

          {/* Section: Contextos de Aplicação */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Contextos de Aplicação</h2>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">Digital</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>Website (header, footer, favicon)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>Redes sociais (avatar, capa, stories)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>E-mail marketing (assinatura, banners)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>App mobile (splash screen, ícone)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-serif text-white mb-4">Impresso</h3>
                <ul className="space-y-2 text-white/60 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>Cartões de visita</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>Papelaria (folhas timbradas, envelopes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>Relatórios e apresentações</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#DCA405] mt-1">•</span>
                    <span>Materiais promocionais</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </main>

    </div>
  )
}
