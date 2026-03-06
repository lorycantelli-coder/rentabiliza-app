# 🚀 GUIA RÁPIDO - Rentabiliza

Bem-vindo! Este é um guia rápido para começar a usar o projeto.

---

## ▶️ INÍCIO RÁPIDO

### 1. Iniciar Servidor:
```bash
npm run dev
```

### 2. Acessar no Navegador:
```
http://localhost:3000
```

### 3. Explorar Páginas:

**Principais:**
- `/` - Landing page (NOVA!)
- `/sobre` - Quem somos
- `/casos-sucesso` - Resultados auditados
- `/metodologia` - Como a IA funciona
- `/pricing` - Planos e preços
- `/contato` - Fale conosco
- `/brand-book` - Design System completo

---

## 📂 ESTRUTURA DO PROJETO

```
next-designer-app/
├── app/                      # Páginas Next.js 14 (App Router)
│   ├── page.tsx             # Landing principal ⭐
│   ├── sobre/               # Institucional ⭐
│   ├── casos-sucesso/       # Depoimentos ⭐
│   ├── metodologia/         # Como funciona ⭐
│   ├── pricing/             # Planos ⭐
│   ├── contato/             # Formulário ⭐
│   ├── rentabiliza/         # Leilões
│   ├── brand-book/          # Brand Book (9 seções)
│   ├── api/brand/           # API YAML Parser ⭐
│   ├── layout.tsx           # Layout global (Header/Footer)
│   ├── sitemap.ts           # Sitemap automático ⭐
│   ├── robots.ts            # Robots.txt ⭐
│   └── manifest.ts          # Web App Manifest ⭐
│
├── components/
│   ├── layout/              # Header & Footer globais ⭐
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/                  # Componentes UI
│       ├── loading.tsx      # Loading states ⭐
│       └── error-boundary.tsx ⭐
│
├── lib/
│   └── brand-yaml.ts        # YAML Parser ⭐
│
├── hooks/
│   └── use-brand-data.ts    # React hooks brand data ⭐
│
└── docs/brand/              # YAMLs Brand (15 arquivos)
    ├── identity/            # 4 YAMLs
    ├── foundation/          # 5 YAMLs
    ├── evidence/            # 3 YAMLs
    └── narrative/           # 3 YAMLs
```

---

## 🎨 USANDO O DESIGN SYSTEM

### Typography Classes:

```tsx
// Hero headlines
<h1 className="text-display-xl text-white">
  Título Gigante
</h1>

// Section titles
<h2 className="text-display-h2 text-white">
  Seção Principal
</h2>

// Body text
<p className="text-body-l text-white/60">
  Texto explicativo grande
</p>

// Labels
<span className="text-label text-[#DCA405]">
  LABEL CAPS
</span>

// Data/números
<div className="text-data-highlight text-[#DCA405]">
  34%
</div>
```

### Colors:

```tsx
// Backgrounds
bg-[#040812]  // Navy (principal)
bg-[#0A1326]  // Surface (cards)
bg-black      // Preto puro

// Text
text-white         // Branco
text-white/60      // Branco 60% opacity
text-[#DCA405]     // Gold (accent)

// Borders
border-white/10    // Bordas sutis
border-[#DCA405]/30 // Bordas gold
```

### Gradients:

```tsx
// Hero sections
<section className="gradient-hero">
  ...
</section>

// Gold accent areas
<div className="gradient-gold-accent">
  ...
</div>

// Subtle glows
<div className="gradient-subtle-glow">
  ...
</div>
```

---

## 📦 USANDO YAML PARSER

### Server-Side (pages/layouts):

```typescript
import { BrandIdentity, BrandFoundation } from '@/lib/brand-yaml'

// Carregar brand core
const core = BrandIdentity.core()
console.log(core.brand_promise)

// Carregar cores
const colors = BrandFoundation.colors()
console.log(colors.primary_colors)
```

### Client-Side (React components):

```typescript
'use client'
import { useBrandColors, useBrandMetrics } from '@/hooks/use-brand-data'

function MyComponent() {
  const colors = useBrandColors()
  const metrics = useBrandMetrics()

  return (
    <div style={{ color: colors.gold }}>
      {metrics.investors} investidores
    </div>
  )
}
```

### API Route:

```typescript
// Fetch individual YAML
const response = await fetch('/api/brand/identity/brand-core')
const data = await response.json()

// Fetch todos YAMLs
const all = await fetch('/api/brand/all')
const allData = await all.json()
```

---

## 🧩 COMPONENTES GLOBAIS

### Header (já incluído em layout.tsx):

```tsx
import { Header } from '@/components/layout'

<Header />
```

### Footer (já incluído em layout.tsx):

```tsx
import { Footer } from '@/components/layout'

<Footer />
```

### Loading:

```tsx
import { Loading, LoadingSpinner } from '@/components/ui/loading'

// Full page
<Loading />

// Spinner inline
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

## 🔧 SCRIPTS DISPONÍVEIS

```bash
# Desenvolvimento
npm run dev

# Build produção
npm run build

# Iniciar produção
npm start

# Linting
npm run lint

# Type check
npm run typecheck

# Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

---

## 📝 CRIAR NOVA PÁGINA

### 1. Criar arquivo:
```bash
app/minha-pagina/page.tsx
```

### 2. Código básico:
```tsx
'use client'

export default function MinhaPagina() {
  return (
    <div className="min-h-screen bg-[#040812]">
      {/* Hero */}
      <section className="relative py-24 gradient-hero">
        <div className="container mx-auto px-4">
          <h1 className="text-display-xl text-white">
            Meu Título
          </h1>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <p className="text-body-l text-white/60">
            Conteúdo aqui
          </p>
        </div>
      </section>
    </div>
  )
}
```

### 3. Adicionar metadata (opcional):
```tsx
// app/minha-pagina/layout.tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minha Página - Rentabiliza',
  description: 'Descrição da página',
}

export default function Layout({ children }) {
  return children
}
```

### 4. Adicionar ao Header:
```tsx
// components/layout/header.tsx
const navigation = [
  // ... links existentes
  { name: 'Minha Página', href: '/minha-pagina' },
]
```

---

## 🎯 PADRÕES DE CÓDIGO

### Estrutura de Seção Padrão:

```tsx
<section className="py-24 bg-[#0A1326]">
  <div className="container mx-auto px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-label text-[#DCA405] mb-4">LABEL</p>
      <h2 className="text-display-h2 text-white">Título da Seção</h2>
    </div>

    {/* Conteúdo */}
    <div className="max-w-6xl mx-auto">
      {/* Grid ou flex */}
    </div>
  </div>
</section>
```

### Card Pattern:

```tsx
<div className="bg-white/[0.02] border border-white/10 rounded-lg p-8 hover:border-[#DCA405]/30 transition-all">
  <h3 className="text-display-h4 text-white mb-4">
    Título do Card
  </h3>
  <p className="text-body-m text-white/60">
    Conteúdo do card
  </p>
</div>
```

### Button Pattern:

```tsx
import { Button } from '@/components/ui/button'

<Button className="bg-[#DCA405] text-[#040812] hover:bg-[#F5C542] font-bold">
  AÇÃO PRIMÁRIA
</Button>
```

---

## 🐛 TROUBLESHOOTING

### Erro "Module not found":
```bash
# Reinstalar dependências
rm -rf node_modules
npm install
```

### Build falha:
```bash
# Limpar cache Next.js
rm -rf .next
npm run build
```

### Tipagem TypeScript:
```bash
# Verificar erros
npm run typecheck
```

### Port 3000 em uso:
```bash
# Usar porta diferente
PORT=3001 npm run dev
```

---

## 📚 RECURSOS

### Documentação:
- [Next.js 14](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)

### Ferramentas:
- [Storybook](http://localhost:6006) (quando rodando)
- [Brand Book](http://localhost:3000/brand-book)

---

## ✨ DICAS PRO

1. **Use o Brand Book** (`/brand-book`) como referência visual
2. **Consulte os YAMLs** (`docs/brand/`) para dados oficiais
3. **Reutilize componentes** existentes antes de criar novos
4. **Mantenha consistência** com Design System
5. **Teste mobile** sempre (responsive-first)

---

## 🎉 TUDO PRONTO!

Projeto 100% funcional. Explore, customize e divirta-se!

**Dúvidas?** Leia `IMPLEMENTACAO-COMPLETA.md` para detalhes técnicos.

---

*Happy coding! 🚀*
