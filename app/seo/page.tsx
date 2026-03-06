'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function SEOPage() {
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
              <Link href="/templates" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Templates</Link>
              <Link href="/motion" className="block text-sm text-white/60 hover:text-[#DCA405] transition-colors py-2">Motion</Link>
              <Link href="/seo" className="block text-sm text-[#DCA405] font-medium py-2">SEO</Link>
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
              SEO
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Meta tags, Open Graph, Twitter Cards e Schema.org para otimização de mecanismos de busca e compartilhamento social.
            </p>
          </div>

          {/* Basic Meta Tags */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Basic Meta Tags</h2>
            <p className="text-white/60 mb-8">Tags essenciais para SEO</p>

            <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-sm">
              <pre className="text-white/80 overflow-x-auto">
                <code>{`<head>
  {/* Title */}
  <title>Rentabiliza - Gestão Inteligente de Investimentos Imobiliários</title>

  {/* Description */}
  <meta
    name="description"
    content="Plataforma premium de gestão de investimentos imobiliários.
    ROI médio de 18% ao ano com análise preditiva de mercado."
  />

  {/* Keywords */}
  <meta
    name="keywords"
    content="investimentos, imóveis, ROI, gestão patrimonial,
    análise preditiva, mercado imobiliário"
  />

  {/* Viewport */}
  <meta name="viewport" content="width=device-width, initial-scale=1" />

  {/* Canonical */}
  <link rel="canonical" href="https://rentabiliza.com.br" />
</head>`}</code>
              </pre>
            </div>
          </section>

          {/* Open Graph */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Open Graph (Facebook)</h2>
            <p className="text-white/60 mb-8">Meta tags para compartilhamento em redes sociais</p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Preview</h3>
                <div className="bg-white rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-[#DCA405]/20 to-transparent flex items-center justify-center">
                    <span className="text-white font-serif text-2xl">Rentabiliza</span>
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      Rentabiliza - Gestão Inteligente de Investimentos
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      Plataforma premium com ROI médio de 18% ao ano
                    </div>
                    <div className="text-xs text-gray-400 uppercase">rentabiliza.com.br</div>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-xs overflow-x-auto">
                <pre className="text-white/80">
                  <code>{`<head>
  {/* Type */}
  <meta property="og:type"
    content="website" />

  {/* Title */}
  <meta property="og:title"
    content="Rentabiliza - Gestão
    Inteligente" />

  {/* Description */}
  <meta property="og:description"
    content="Plataforma premium
    com ROI médio de 18%" />

  {/* Image */}
  <meta property="og:image"
    content="/og-image.jpg" />
  <meta property="og:image:width"
    content="1200" />
  <meta property="og:image:height"
    content="630" />

  {/* URL */}
  <meta property="og:url"
    content="https://rentabiliza
    .com.br" />

  {/* Site Name */}
  <meta property="og:site_name"
    content="Rentabiliza" />

  {/* Locale */}
  <meta property="og:locale"
    content="pt_BR" />
</head>`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-white font-medium mb-3">Especificações da Imagem OG</h4>
              <ul className="text-white/60 text-sm space-y-2">
                <li><span className="text-[#DCA405]">Dimensão recomendada:</span> 1200x630px</li>
                <li><span className="text-[#DCA405]">Proporção:</span> 1.91:1</li>
                <li><span className="text-[#DCA405]">Formato:</span> JPG ou PNG</li>
                <li><span className="text-[#DCA405]">Tamanho máximo:</span> 8MB</li>
                <li><span className="text-[#DCA405]">Background:</span> #040812 (Navy Deep)</li>
                <li><span className="text-[#DCA405]">Logo:</span> #DCA405 (Gold Premium)</li>
              </ul>
            </div>
          </section>

          {/* Twitter Cards */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Twitter Cards</h2>
            <p className="text-white/60 mb-8">Meta tags para compartilhamento no Twitter/X</p>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Preview</h3>
                <div className="bg-white rounded-lg overflow-hidden border border-white/10">
                  <div className="aspect-video bg-gradient-to-br from-[#DCA405]/20 to-transparent flex items-center justify-center">
                    <span className="text-white font-serif text-2xl">Rentabiliza</span>
                  </div>
                  <div className="p-4">
                    <div className="text-sm font-semibold text-gray-900 mb-1">
                      Rentabiliza - Gestão Inteligente
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      Plataforma premium de investimentos imobiliários
                    </div>
                    <div className="text-xs text-gray-400">rentabiliza.com.br</div>
                  </div>
                </div>
              </div>

              <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-xs overflow-x-auto">
                <pre className="text-white/80">
                  <code>{`<head>
  {/* Card Type */}
  <meta name="twitter:card"
    content="summary_large_image" />

  {/* Title */}
  <meta name="twitter:title"
    content="Rentabiliza - Gestão
    Inteligente" />

  {/* Description */}
  <meta name="twitter:description"
    content="Plataforma premium de
    investimentos" />

  {/* Image */}
  <meta name="twitter:image"
    content="/twitter-card.jpg" />

  {/* Site */}
  <meta name="twitter:site"
    content="@rentabiliza" />

  {/* Creator */}
  <meta name="twitter:creator"
    content="@rentabiliza" />
</head>`}</code>
                </pre>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-6 border border-white/10">
              <h4 className="text-white font-medium mb-3">Tipos de Cards</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded p-4">
                  <div className="font-mono text-xs text-[#DCA405] mb-2">summary</div>
                  <div className="text-white/60 text-sm">Card pequeno com imagem quadrada</div>
                </div>
                <div className="bg-white/5 rounded p-4">
                  <div className="font-mono text-xs text-[#DCA405] mb-2">summary_large_image</div>
                  <div className="text-white/60 text-sm">Card grande com imagem destacada (recomendado)</div>
                </div>
              </div>
            </div>
          </section>

          {/* Structured Data */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Structured Data (Schema.org)</h2>
            <p className="text-white/60 mb-8">JSON-LD para rich snippets nos resultados de busca</p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Organization Schema</h3>
                <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-xs overflow-x-auto">
                  <pre className="text-white/80">
                    <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Rentabiliza",
  "url": "https://rentabiliza.com.br",
  "logo": "https://rentabiliza.com.br/logo.png",
  "description": "Plataforma premium de gestão de investimentos imobiliários",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+55-11-1234-5678",
    "contactType": "Customer Service",
    "availableLanguage": "Portuguese"
  },
  "sameAs": [
    "https://instagram.com/rentabiliza",
    "https://linkedin.com/company/rentabiliza"
  ]
}
</script>`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">WebSite Schema</h3>
                <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-xs overflow-x-auto">
                  <pre className="text-white/80">
                    <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Rentabiliza",
  "url": "https://rentabiliza.com.br",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://rentabiliza.com.br/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">Product Schema (para landing pages)</h3>
                <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-xs overflow-x-auto">
                  <pre className="text-white/80">
                    <code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Rentabiliza Premium",
  "description": "Plataforma de gestão de investimentos",
  "brand": {
    "@type": "Brand",
    "name": "Rentabiliza"
  },
  "offers": {
    "@type": "Offer",
    "price": "499.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127"
  }
}
</script>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Robots & Sitemap */}
          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-4">Robots & Sitemap</h2>
            <p className="text-white/60 mb-8">Arquivos para controle de indexação</p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">robots.txt</h3>
                <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-sm">
                  <pre className="text-white/80">
                    <code>{`User-agent: *
Allow: /

Sitemap: https://rentabiliza.com.br/sitemap.xml

# Bloquear áreas privadas
Disallow: /dashboard/
Disallow: /admin/
Disallow: /api/`}</code>
                  </pre>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-4">sitemap.xml (estrutura)</h3>
                <div className="bg-black rounded-lg p-6 border border-white/10 font-mono text-xs overflow-x-auto">
                  <pre className="text-white/80">
                    <code>{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://rentabiliza.com.br</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://rentabiliza.com.br/sobre</loc>
    <lastmod>2026-03-06</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Best Practices */}
          <section>
            <h2 className="text-3xl font-serif text-white mb-4">Boas Práticas</h2>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Title Tag</div>
                <p className="text-white/80">Máximo 60 caracteres. Inclua palavra-chave principal e nome da marca. Único por página.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Meta Description</div>
                <p className="text-white/80">150-160 caracteres. Resumo atraente que incentive cliques. Inclua CTA quando possível.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">OG Image</div>
                <p className="text-white/80">Use 1200x630px. Teste em Facebook Debugger e Twitter Card Validator antes de publicar.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Structured Data</div>
                <p className="text-white/80">Valide com Google Rich Results Test. Mantenha dados sincronizados com conteúdo visível.</p>
              </div>
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="font-mono text-sm text-white/60 mb-2">Performance</div>
                <p className="text-white/80">Core Web Vitals afetam SEO. Otimize LCP (< 2.5s), FID (< 100ms), CLS (< 0.1).</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
