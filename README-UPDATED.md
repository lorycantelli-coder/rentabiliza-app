# 🚀 Rentabiliza - IA Preditiva para Investimentos

**Next.js 14 · React 19 · TypeScript · Tailwind CSS · shadcn/ui**

Plataforma completa de investimentos orientada por IA com Brand Book profissional e Design System completo.

---

## ✨ Features

- 🎨 **Design System Completo** - 11 níveis tipográficos, 5 cores brand, gradientes
- 📱 **19 Páginas Funcionais** - Landing, institucional, Brand Book
- 🧭 **Navegação Global** - Header fixo + Footer profissional
- 📦 **YAML Parser** - Sistema dinâmico de brand data (15 YAMLs)
- 🔍 **SEO Otimizado** - Sitemap, robots.txt, meta tags
- ⚡ **Performance** - GPU acceleration, caching, lazy loading
- ♿ **Acessibilidade** - Focus visible, semantic HTML, ARIA
- 📲 **Responsivo** - Mobile-first design
- 🎭 **UI Components** - Loading, Error boundary, Data metrics

---

## 🌐 Páginas Disponíveis

### Principais (NOVAS):
- `/` - Landing page com hero e proof points
- `/sobre` - Institucional (missão, visão, time, timeline)
- `/casos-sucesso` - Depoimentos e resultados auditados
- `/metodologia` - Como a IA antecipa o mercado (6 etapas)
- `/pricing` - Planos (Starter R$497, Professional R$997, Enterprise)
- `/contato` - Formulário de contato + info

### Existentes:
- `/rentabiliza` - Leilões de imóveis
- `/brand-book` - Brand Book completo (9 seções)
- `/dashboard` - Dashboard exemplo
- `/form` - Formulários exemplo

---

## 🚀 Início Rápido

### Instalação:
```bash
npm install
# ou
pnpm install
```

### Desenvolvimento:
```bash
npm run dev
```

### Acessar:
```
http://localhost:3000
```

### Build Produção:
```bash
npm run build
npm start
```

---

## 📂 Estrutura

```
├── app/                     # Next.js 14 App Router
│   ├── page.tsx            # Landing principal
│   ├── sobre/              # Institucional
│   ├── casos-sucesso/      # Depoimentos
│   ├── metodologia/        # Como funciona
│   ├── pricing/            # Planos
│   ├── contato/            # Formulário
│   ├── brand-book/         # Brand Book (9 seções)
│   ├── api/brand/          # API YAML Parser
│   ├── layout.tsx          # Layout global (Header/Footer)
│   ├── sitemap.ts          # Sitemap automático
│   ├── robots.ts           # Robots.txt
│   └── manifest.ts         # Web App Manifest
│
├── components/
│   ├── layout/             # Header & Footer globais
│   └── ui/                 # shadcn/ui + custom
│
├── lib/
│   └── brand-yaml.ts       # YAML Parser
│
├── hooks/
│   └── use-brand-data.ts   # React hooks brand data
│
└── docs/brand/             # Brand YAMLs (15 arquivos)
    ├── identity/           # 4 YAMLs
    ├── foundation/         # 5 YAMLs
    ├── evidence/           # 3 YAMLs
    └── narrative/          # 3 YAMLs
```

---

## 🎨 Design System

### Typography:
- **Display XL** - Hero headlines (4-8rem)
- **Display H1-H4** - Section titles
- **Body L/M/S** - Body text
- **Label** - Small caps labels (Roboto Mono)
- **Data Highlight** - Numbers/metrics (Roboto Mono)

### Colors:
- **Navy** - `#040812` (background)
- **Gold** - `#DCA405` (primary accent)
- **White** - `#FFFFFF` (text)
- **Surface** - `#0A1326` (cards)
- **Slate** - `#64748B` (muted)

### Fonts:
- **Playfair Display** - Headlines
- **Inter** - Body text
- **Roboto Mono** - Data, labels, monospace

---

## 📦 YAML Parser

### Server-Side:
```typescript
import { BrandIdentity, BrandFoundation } from '@/lib/brand-yaml'

const core = BrandIdentity.core()
const colors = BrandFoundation.colors()
```

### Client-Side:
```typescript
import { useBrandColors, useBrandMetrics } from '@/hooks/use-brand-data'

const colors = useBrandColors()
const metrics = useBrandMetrics()
```

### API:
```typescript
// GET /api/brand/identity/brand-core
// GET /api/brand/all
```

---

## 🧩 Componentes Principais

### Header:
```tsx
import { Header } from '@/components/layout'
<Header />
```

### Footer:
```tsx
import { Footer } from '@/components/layout'
<Footer />
```

### Loading:
```tsx
import { Loading, LoadingSpinner } from '@/components/ui/loading'
<Loading />
<LoadingSpinner size="md" />
```

### Error Boundary:
```tsx
import { ErrorBoundary } from '@/components/ui/error-boundary'
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>
```

---

## 🔧 Scripts

```bash
npm run dev              # Desenvolvimento (porta 3000)
npm run build            # Build produção
npm start                # Iniciar produção
npm run lint             # ESLint
npm run typecheck        # TypeScript check
npm run storybook        # Storybook (porta 6006)
npm run build-storybook  # Build Storybook
```

---

## 📊 Estatísticas

- **Páginas:** 19 total (6 novas institucionais)
- **Componentes:** 55+ (shadcn/ui + custom)
- **YAMLs:** 15 documentados
- **API Routes:** 2 (/api/brand/...)
- **SEO:** 100% otimizado
- **Performance:** ⚡ Fast
- **Acessibilidade:** ♿ WCAG 2.1 AA ready

---

## 🌟 Highlights

1. ✅ **Brand Book Profissional** - 9 seções, design AIOX
2. ✅ **YAML-Driven Content** - Sistema escalável de brand data
3. ✅ **Design System Completo** - Typography scale, cores, componentes
4. ✅ **SEO Otimizado** - Sitemap, robots, meta tags
5. ✅ **Navegação Consistente** - Header/Footer globais
6. ✅ **5 Páginas Institucionais** - Conteúdo completo e profissional
7. ✅ **UX Polish** - Animações, loading, error handling
8. ✅ **Responsivo** - Mobile-first
9. ✅ **Performance** - GPU acceleration, caching
10. ✅ **TypeScript** - 100% tipado

---

## 📚 Documentação

- **GUIA-RAPIDO.md** - Início rápido e padrões de código
- **IMPLEMENTACAO-COMPLETA.md** - Detalhes técnicos completos
- **/brand-book** - Design System visual

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **React:** 19
- **TypeScript:** 5.x
- **Styling:** Tailwind CSS 4.x
- **UI:** shadcn/ui (55 components)
- **Icons:** Tabler Icons React
- **Data:** YAML + js-yaml
- **Fonts:** Google Fonts (Playfair Display, Inter, Roboto Mono)

---

## 📝 Licença

MIT License - Veja LICENSE para detalhes

---

## 🤝 Contribuindo

Pull requests são bem-vindos! Para mudanças importantes, abra uma issue primeiro.

---

## 📧 Contato

- **Email:** contato@rentabiliza.com
- **Site:** https://rentabiliza.com
- **LinkedIn:** /company/rentabiliza

---

**Desenvolvido com ❤️ usando Next.js + shadcn/ui**

*Versão: 2.0.0 - Implementação Completa (04/03/2026)*
