'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">
      {/* SIDEBAR */}
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6">
          <Link href="/" className="block mb-8">
            <span className="text-[#DCA405] font-serif text-2xl font-bold tracking-tight">Rentabiliza</span>
          </Link>

          {/* BRAND IDENTITY */}
          <div className="mb-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-4 uppercase">Brand Identity</h3>
            <div className="space-y-1">
              <Link href="/guidelines" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Guidelines</Link>
              <Link href="/movimento" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Movimento</Link>
              <Link href="/logo" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Logo</Link>
              <Link href="/icons" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Icons</Link>
              <Link href="/moodboard" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Moodboard</Link>
              <Link href="/brand-strategy" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Brand Strategy</Link>
            </div>
          </div>

          {/* COMPONENTS */}
          <div className="mb-8">
            <h3 className="text-[10px] font-mono tracking-[0.3em] text-white/40 mb-4 uppercase">Components</h3>
            <div className="space-y-1">
              <Link href="/components" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Overview</Link>
              <Link href="/buttons" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Buttons</Link>
              <Link href="/cards" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Cards</Link>
              <Link href="/forms" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Forms</Link>
              <Link href="/feedback" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Feedback</Link>
              <Link href="/states" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">States</Link>
              <Link href="/tables" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Tables</Link>
              <Link href="/lists" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Lists</Link>
              <Link href="/charts" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Charts</Link>
              <Link href="/sections" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Sections</Link>
              <Link href="/advanced" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Advanced</Link>
              <Link href="/effects" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Effects</Link>
              <Link href="/patterns" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Patterns</Link>
              <Link href="/templates" className="block text-sm text-[#DCA405] font-medium py-2">Templates</Link>
              <Link href="/motion" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Motion</Link>
              <Link href="/seo" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">SEO</Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <div className="text-[10px] font-mono tracking-[0.2em] text-white/30">
            VERSION 2.0
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">
              COMPONENTS
            </Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">
              Templates
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Templates de página completos: landing pages, dashboards e layouts estruturais.
            </p>
          </div>

          {/* Landing Page Template */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Landing Page</h2>
            <p className="text-white/60 mb-8">Template completo para página de conversão</p>

            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-[#DCA405]/10 to-transparent p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-16">
                  <span className="text-[#DCA405] font-serif text-lg font-bold">Rentabiliza</span>
                  <div className="flex gap-6 text-xs text-white/60">
                    <span>Sobre</span>
                    <span>Features</span>
                    <span>Preços</span>
                    <span className="text-[#DCA405]">Login</span>
                  </div>
                </div>

                {/* Hero */}
                <div className="max-w-2xl">
                  <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/20 border text-[8px] mb-3">
                    LANÇAMENTO 2026
                  </Badge>
                  <h1 className="text-2xl font-serif text-white mb-3 leading-tight">
                    Rentabilize seu Patrimônio com Inteligência
                  </h1>
                  <p className="text-sm text-white/60 mb-4">
                    Plataforma premium de gestão de investimentos imobiliários
                  </p>
                  <div className="flex gap-2">
                    <div className="px-4 py-1.5 bg-[#DCA405] text-black rounded text-xs">Começar Agora</div>
                    <div className="px-4 py-1.5 bg-white/10 text-white rounded text-xs">Ver Demo</div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-white mb-2">Estrutura</h3>
                <ul className="text-xs text-white/60 space-y-1">
                  <li>Header fixo com navegação</li>
                  <li>Hero section com headline e CTA</li>
                  <li>Features grid (3 colunas)</li>
                  <li>Testimonials section</li>
                  <li>CTA final + Footer</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Dashboard Template */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Dashboard</h2>
            <p className="text-white/60 mb-8">Layout de dashboard com sidebar e métricas</p>

            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <div className="aspect-video flex">
                {/* Sidebar */}
                <div className="w-16 bg-black border-r border-white/10 p-3 flex flex-col gap-3">
                  <div className="w-full h-8 bg-[#DCA405]/10 rounded flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#DCA405] rounded"></div>
                  </div>
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-full h-8 bg-white/5 rounded"></div>
                  ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h2 className="text-white text-sm font-serif mb-1">Dashboard</h2>
                      <p className="text-[8px] text-white/40 font-mono">Última atualização: há 5 min</p>
                    </div>
                    <div className="w-16 h-6 bg-white/5 rounded"></div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {['ROI', 'Patrimônio', 'Rendimento', 'CAP Rate'].map((label, i) => (
                      <div key={i} className="bg-white/5 rounded p-3 border border-white/10">
                        <div className="text-[8px] text-white/40 font-mono mb-1">{label}</div>
                        <div className="text-sm text-[#DCA405] font-bold">
                          {i === 0 && '18.5%'}
                          {i === 1 && 'R$ 142k'}
                          {i === 2 && 'R$ 8.2k'}
                          {i === 3 && '7.2%'}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Charts */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 rounded p-3 border border-white/10">
                      <div className="text-[8px] text-white/40 mb-2">Performance Mensal</div>
                      <div className="h-16 bg-white/5 rounded"></div>
                    </div>
                    <div className="bg-white/5 rounded p-3 border border-white/10">
                      <div className="text-[8px] text-white/40 mb-2">Distribuição</div>
                      <div className="h-16 bg-white/5 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-white mb-2">Estrutura</h3>
                <ul className="text-xs text-white/60 space-y-1">
                  <li>Sidebar fixa com navegação vertical</li>
                  <li>Header com título e ações</li>
                  <li>Grid de métricas (4 colunas)</li>
                  <li>Área de gráficos (2 colunas)</li>
                  <li>Tabela de dados recentes</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Content Page Template */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Content Page</h2>
            <p className="text-white/60 mb-8">Página de conteúdo com sidebar de navegação</p>

            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <div className="aspect-video flex">
                {/* Sidebar */}
                <div className="w-48 bg-black border-r border-white/10 p-4">
                  <div className="text-[#DCA405] font-serif font-bold text-sm mb-4">Rentabiliza</div>
                  <div className="space-y-1">
                    <div className="text-[10px] font-mono text-white/40 mb-2">BRAND IDENTITY</div>
                    {['Guidelines', 'Movimento', 'Logo', 'Icons'].map((item, i) => (
                      <div key={i} className={`text-xs py-1 ${i === 0 ? 'text-[#DCA405]' : 'text-white/60'}`}>
                        {item}
                      </div>
                    ))}
                    <div className="text-[10px] font-mono text-white/40 mt-3 mb-2">COMPONENTS</div>
                    {['Overview', 'Buttons', 'Cards', 'Forms'].map((item, i) => (
                      <div key={i} className="text-xs text-white/60 py-1">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-6">
                  <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/20 border text-[8px] mb-2">
                    BRAND IDENTITY
                  </Badge>
                  <h1 className="text-xl font-serif text-white mb-2">Guidelines</h1>
                  <p className="text-xs text-white/60 mb-4">
                    Princípios fundamentais do design system
                  </p>

                  <div className="space-y-3">
                    <div className="bg-white/5 rounded p-3 border border-white/10">
                      <div className="text-xs text-white mb-1">Seção 1</div>
                      <div className="h-2 bg-white/5 rounded mb-1"></div>
                      <div className="h-2 bg-white/5 rounded w-3/4"></div>
                    </div>
                    <div className="bg-white/5 rounded p-3 border border-white/10">
                      <div className="text-xs text-white mb-1">Seção 2</div>
                      <div className="h-2 bg-white/5 rounded mb-1"></div>
                      <div className="h-2 bg-white/5 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-white mb-2">Estrutura</h3>
                <ul className="text-xs text-white/60 space-y-1">
                  <li>Sidebar fixa (256px) com navegação hierárquica</li>
                  <li>Main content com max-width 1536px</li>
                  <li>Badge de categoria + Título h1</li>
                  <li>Seções de conteúdo espaçadas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* App Shell Template */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">App Shell</h2>
            <p className="text-white/60 mb-8">Estrutura base para aplicações</p>

            <div className="bg-white/5 rounded-lg border border-white/10 overflow-hidden">
              <div className="aspect-video flex flex-col">
                {/* Top Nav */}
                <div className="h-12 bg-black border-b border-white/10 flex items-center justify-between px-4">
                  <div className="flex items-center gap-4">
                    <div className="text-[#DCA405] font-serif text-sm font-bold">Rentabiliza</div>
                    <div className="flex gap-3 text-[10px] text-white/60">
                      <span className="text-[#DCA405]">Dashboard</span>
                      <span>Portfólio</span>
                      <span>Análises</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-white/5 rounded"></div>
                    <div className="w-6 h-6 bg-[#DCA405]/10 rounded-full"></div>
                  </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 flex">
                  {/* Side Panel */}
                  <div className="w-56 bg-black border-r border-white/10 p-4">
                    <div className="text-[8px] font-mono text-white/40 mb-2">VISÃO GERAL</div>
                    <div className="space-y-2">
                      {['Dashboard', 'Relatórios', 'Transações'].map((item, i) => (
                        <div key={i} className={`text-xs py-1.5 px-2 rounded ${i === 0 ? 'bg-white/5 text-white' : 'text-white/60'}`}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 bg-[#040812]">
                    <div className="h-full bg-white/5 rounded border border-white/10 flex items-center justify-center">
                      <span className="text-white/40 text-xs">Content Area</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-white/10">
                <h3 className="text-sm font-medium text-white mb-2">Estrutura</h3>
                <ul className="text-xs text-white/60 space-y-1">
                  <li>Header horizontal fixo com logo e navegação principal</li>
                  <li>Sidebar secundária com navegação contextual</li>
                  <li>Área de conteúdo principal com scroll independente</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Usage */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Quando Usar</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Landing Page</div>
                <p className="text-white/80">Para páginas de marketing, conversão e captação de leads</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Dashboard</div>
                <p className="text-white/80">Para painéis de controle com métricas e visualizações de dados</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Content Page</div>
                <p className="text-white/80">Para documentação, brandbooks e páginas com navegação hierárquica</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">App Shell</div>
                <p className="text-white/80">Para aplicações web complexas com múltiplas seções e navegação profunda</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
