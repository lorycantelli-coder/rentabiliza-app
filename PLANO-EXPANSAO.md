# 📋 PLANO DE EXPANSÃO - RENTABILIZA BRAND BOOK

## 🎯 OBJETIVO
Expandir o Rentabiliza Brand Book de 1 página para **25 páginas completas** (igual AIOX)

---

## 📂 ESTRUTURA FINAL (25 PÁGINAS)

### **CATEGORIA 1: BRAND IDENTITY** (7 páginas)

#### Página 1: Guidelines
- **URL:** `/guidelines`
- **Conteúdo:**
  - Conceitos da marca Rentabiliza
  - Metáforas visuais (Gold, Sofisticação, Inteligência)
  - Filosofia "Você investe, nós fazemos render"
  - Valores aplicados

#### Página 2: Movimento
- **URL:** `/movimento`
- **Conteúdo:**
  - Manifesto Rentabiliza
  - Propósito: Empoderar investidores
  - 6 valores core (Empoderamento, Profundidade, Autenticidade, Clareza, Paixão, Coragem)
  - Inimigo: Complexidade e baixos retornos

#### Página 3: Foundations
- **URL:** `/foundations`
- **Conteúdo (JÁ EXISTE - MELHORAR):**
  - Typography (Playfair Display, Outfit, Roboto Mono)
  - Colors (Navy, Gold, gradientes)
  - Spacing, Borders, Shadows

#### Página 4: Logo
- **URL:** `/logo`
- **Conteúdo:**
  - Logo principal Rentabiliza
  - Variantes (dark, light, monochrome)
  - Clear space e grid
  - Regras de uso (correto/incorreto)
  - Contextos de cor

#### Página 5: Icons
- **URL:** `/icons`
- **Conteúdo:**
  - Sistema de ícones Rentabiliza
  - Grid 16/24/32/48px
  - Regras de design (2px stroke, round caps)
  - Biblioteca de ícones

#### Página 6: Moodboard
- **URL:** `/moodboard`
- **Conteúdo:**
  - Referências visuais
  - Sofisticação financeira
  - Elegância dark
  - Gold accents
  - Influências de design

#### Página 7: Brand Strategy
- **URL:** `/brand-strategy`
- **Conteúdo:**
  - Mission, Vision
  - Core Values detalhados
  - Diferenciais competitivos
  - Voice & Tone
  - Positioning

---

### **CATEGORIA 2: COMPONENTS** (16 páginas)

#### Página 8: Components Overview
- **URL:** `/components`
- **Conteúdo:**
  - Índice de todos componentes
  - Buttons, Cards, Forms, etc
  - Quick navigation

#### Página 9: Buttons
- **URL:** `/buttons`
- **Conteúdo:**
  - Primary (gold), Secondary, Ghost, Destructive
  - Tamanhos (sm, md, lg)
  - Estados (default, hover, disabled, loading)
  - Exemplos de uso

#### Página 10: Cards
- **URL:** `/cards`
- **Conteúdo:**
  - Default, Elevated, Outlined
  - Com actions
  - Property cards (imóveis)
  - Investment cards

#### Página 11: Forms
- **URL:** `/forms`
- **Conteúdo:**
  - Text inputs
  - Textarea
  - Select/Dropdown
  - Checkboxes, Radio, Toggles
  - Form completo de exemplo

#### Página 12: Feedback
- **URL:** `/feedback`
- **Conteúdo:**
  - Alerts (info, success, warning, error)
  - Toasts
  - Modals
  - Notificações

#### Página 13: States
- **URL:** `/states`
- **Conteúdo:**
  - Loading spinners
  - Progress bars
  - Skeleton loaders
  - Empty states

#### Página 14: Tables
- **URL:** `/tables`
- **Conteúdo:**
  - Standard table
  - Compact metrics
  - Data tables
  - Investment portfolio table

#### Página 15: Lists
- **URL:** `/lists`
- **Conteúdo:**
  - List items com status
  - KPI cards
  - Property lists
  - Timeline lists

#### Página 16: Charts
- **URL:** `/charts`
- **Conteúdo:**
  - Bar chart (performance mensal)
  - Donut chart (alocação)
  - Line chart (valorização)
  - Métricas de ROI

#### Página 17: Sections
- **URL:** `/sections`
- **Conteúdo:**
  - Hero sections
  - Logo ticker
  - Trusted by
  - CTA sections
  - Features grid
  - Testimonials

#### Página 18: Advanced
- **URL:** `/advanced`
- **Conteúdo:**
  - Tabs
  - Accordion/FAQ
  - Steppers (horizontal/vertical)
  - Tooltips
  - Popovers

#### Página 19: Effects
- **URL:** `/effects`
- **Conteúdo:**
  - Ticker strip
  - Badge variants
  - Glow & Pulse (gold)
  - Hover effects
  - Transitions

#### Página 20: Patterns
- **URL:** `/patterns`
- **Conteúdo:**
  - Dot grid (default, dense, sparse)
  - Gradientes (hero, gold-accent, subtle-glow)
  - Textures
  - Background patterns

#### Página 21: Templates
- **URL:** `/templates`
- **Conteúdo:**
  - Page shell padrão
  - Dashboard layout
  - Landing page structure
  - Property showcase template

#### Página 22: Motion
- **URL:** `/motion`
- **Conteúdo:**
  - Transições padrão
  - Animações de entrada/saída
  - Scroll animations
  - Hover animations
  - Loading animations

#### Página 23: SEO
- **URL:** `/seo`
- **Conteúdo:**
  - Meta tags
  - Open Graph
  - Twitter Cards
  - Structured data
  - Best practices

---

### **CATEGORIA 3: EDITORIAL** (2 páginas)

#### Página 24: VFX System
- **URL:** `/vfx`
- **Conteúdo:**
  - Film grain
  - Blur effects
  - Glow effects (gold)
  - Blend modes
  - Overlay patterns

#### Página 25: Editorial
- **URL:** `/editorial`
- **Conteúdo:**
  - Versão condensada do brandbook
  - "Você investe, nós fazemos render"
  - Valores principais
  - Logo & Colors recap
  - Apresentação visual completa

---

## 🗂️ ESTRUTURA DE ARQUIVOS

```
app/
├── page.tsx                 # Homepage (já existe - brand book atual)
├── guidelines/
│   └── page.tsx            # Página 1
├── movimento/
│   └── page.tsx            # Página 2
├── foundations/
│   └── page.tsx            # Página 3 (melhorar existente)
├── logo/
│   └── page.tsx            # Página 4
├── icons/
│   └── page.tsx            # Página 5
├── moodboard/
│   └── page.tsx            # Página 6
├── brand-strategy/
│   └── page.tsx            # Página 7
├── components/
│   └── page.tsx            # Página 8
├── buttons/
│   └── page.tsx            # Página 9
├── cards/
│   └── page.tsx            # Página 10
├── forms/
│   └── page.tsx            # Página 11
├── feedback/
│   └── page.tsx            # Página 12
├── states/
│   └── page.tsx            # Página 13
├── tables/
│   └── page.tsx            # Página 14
├── lists/
│   └── page.tsx            # Página 15
├── charts/
│   └── page.tsx            # Página 16
├── sections/
│   └── page.tsx            # Página 17
├── advanced/
│   └── page.tsx            # Página 18
├── effects/
│   └── page.tsx            # Página 19
├── patterns/
│   └── page.tsx            # Página 20
├── templates/
│   └── page.tsx            # Página 21
├── motion/
│   └── page.tsx            # Página 22
├── seo/
│   └── page.tsx            # Página 23
├── vfx/
│   └── page.tsx            # Página 24
└── editorial/
    └── page.tsx            # Página 25
```

---

## 🎨 COMPONENTES NECESSÁRIOS

### Layout Components
- [x] Sidebar navigation (já existe)
- [ ] Page header (criar)
- [ ] Section divider (criar)
- [ ] Footer (criar)

### UI Components a documentar
- [ ] Buttons system
- [ ] Cards system
- [ ] Forms system
- [ ] Tables system
- [ ] Charts system
- [ ] Loading states

---

## 📅 CRONOGRAMA DE IMPLEMENTAÇÃO

### Fase 1: Brand Identity (Páginas 1-7)
**Tempo estimado:** 4-6 horas

- [ ] Guidelines
- [ ] Movimento
- [ ] Foundations (melhorar)
- [ ] Logo
- [ ] Icons
- [ ] Moodboard
- [ ] Brand Strategy

### Fase 2: Components Core (Páginas 8-15)
**Tempo estimado:** 6-8 horas

- [ ] Components Overview
- [ ] Buttons
- [ ] Cards
- [ ] Forms
- [ ] Feedback
- [ ] States
- [ ] Tables
- [ ] Lists

### Fase 3: Components Advanced (Páginas 16-23)
**Tempo estimado:** 6-8 horas

- [ ] Charts
- [ ] Sections
- [ ] Advanced
- [ ] Effects
- [ ] Patterns
- [ ] Templates
- [ ] Motion
- [ ] SEO

### Fase 4: Finalization (Páginas 24-25 + Polish)
**Tempo estimado:** 2-3 horas

- [ ] VFX System
- [ ] Editorial
- [ ] Navegação final
- [ ] Testing completo
- [ ] Deploy

---

## ✅ PRÓXIMOS PASSOS IMEDIATOS

1. ✅ Extrair estratégia da Rentabiliza (FEITO)
2. ⏳ Criar páginas de Brand Identity (1-7)
3. ⏳ Criar páginas de Components (8-23)
4. ⏳ Criar páginas finais (24-25)
5. ⏳ Atualizar navegação
6. ⏳ Deploy

---

**Total de páginas:** 25
**Tempo total estimado:** 18-25 horas
**Status:** 🚀 PRONTO PARA COMEÇAR!
