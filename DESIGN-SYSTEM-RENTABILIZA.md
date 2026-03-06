# 🎨 Design System Rentabiliza

Este documento define o design system **REAL** da Rentabiliza, baseado no arquivo oficial.

## 📐 Fundamentos

### Paleta de Cores

#### Cores Principais
```css
/* Navy - Fundo principal */
--background: #040812
oklch(0.06 0.01 240)

/* Surface - Cards e elementos elevados */
--surface: #0A1326
oklch(0.10 0.02 240)

/* Brand Blue - Destaque */
--brand-blue: #0D1F3C
oklch(0.15 0.03 240)

/* White - Texto principal e botões primários */
--primary: #FFFFFF
oklch(1 0 0)

/* Slate - Texto secundário */
--slate: #64748B
oklch(0.52 0.02 240)
```

#### Cores de Estado
```css
/* Gold - Hover e focus */
--accent: #DCA405
oklch(0.68 0.15 80)

/* Gold Pressed */
--gold-pressed: #C29104

/* Destructive - Vermelho */
--destructive: #DC2626
oklch(0.55 0.22 29)
```

---

## 🎯 Tipografia

### Família de Fontes

**Display (Títulos):**
```css
font-family: "Playfair Display", serif;
```
Uso: H1, H2, elementos de destaque, títulos luxuosos

**Sans (Corpo):**
```css
font-family: "Inter", sans-serif;
```
Uso: Body text, labels, UI elements

### Hierarquia de Tamanhos

| Elemento | Fonte | Tamanho | Peso | Line Height | Uso |
|----------|-------|---------|------|-------------|-----|
| H1 Headline | Playfair | 32px (2rem) | 700 | 1.2 | Títulos principais |
| H2 Subheadline | Playfair | 24px (1.5rem) | 600 | 1.3 | Subtítulos |
| Body Large | Inter | 18px (1.125rem) | 400 | 1.5 | Destaque de texto |
| Body Normal | Inter | 16px (1rem) | 500 | 1.5 | Texto normal |
| Meta Label | Inter | 12px (0.75rem) | 700 | 1.4 | Labels, uppercase |

---

## 🎨 Componentes

### Botões

#### Primary (White Button)
```tsx
<button className="bg-white text-background font-bold py-3.5 px-6 rounded-xl shadow-[0_4px_14px_rgba(255,255,255,0.2)]">
  Default
</button>
```

**Especificações:**
- Background: White `#FFFFFF`
- Texto: Navy `#040812`
- Fonte: Inter, Bold (700)
- Border Radius: `12px` (rounded-xl)
- Padding: `14px 24px`
- Shadow: `0 4px 14px rgba(255,255,255,0.2)`

**Estados:**
- Hover: Background `#DCA405` (Gold) + ring-4 ring-white/20
- Pressed: Background `#C29104` + scale-[0.98]

#### Secondary (Outline)
```tsx
<button className="border-2 border-white text-white font-bold py-3.5 px-6 rounded-xl">
  Default
</button>
```

**Especificações:**
- Background: Transparent
- Border: 2px White
- Texto: White
- Hover: bg-white/5
- Pressed: border-white/50 + text-white/50 + scale-[0.98]

#### Ghost
```tsx
<button className="text-white font-bold py-3.5 px-6 rounded-xl">
  Default
</button>
```

**Estados:**
- Hover: bg-white/5
- Pressed: text-white/50 + bg-white/5 + scale-[0.98]

### Cards

```tsx
<div className="bg-surface p-8 rounded-2xl border border-white/10">
  Conteúdo do card
</div>
```

**Especificações:**
- Background: `#0A1326` (Surface)
- Border: 1px `rgba(255,255,255,0.1)`
- Border Radius: `16px` (rounded-2xl) para cards grandes
- Border Radius: `12px` (rounded-xl) para cards médios
- Padding: `32px` (p-8)
- Hover: bg-white/5 + border-white/40 + shadow-[0_0_20px_rgba(255,255,255,0.2)]

### Inputs

```tsx
<input className="bg-surface border border-white/10 text-white rounded-[4px] px-4 py-2" />
```

**Especificações:**
- Background: Surface `#0A1326`
- Border: 1px `rgba(255,255,255,0.1)`
- Texto: White
- Placeholder: Slate `#64748B`
- Border Radius: `4px` (small)
- Focus: Ring Gold `#DCA405`

---

## 📏 Espaçamento

### Sistema de Grid
- Base: `4px`
- Escala: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96

### Margens e Paddings
```css
--spacing-1: 4px
--spacing-2: 8px
--spacing-3: 12px
--spacing-4: 16px
--spacing-5: 20px
--spacing-6: 24px
--spacing-8: 32px
--spacing-10: 40px
--spacing-12: 48px
```

---

## 🎭 Efeitos

### Sombras

```css
/* Button Shadow (Primary) */
box-shadow: 0 4px 14px rgba(255, 255, 255, 0.2);

/* Card Hover Shadow */
box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);

/* Elevation */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.5);
```

### Border Radius

| Valor | Nome | Uso |
|-------|------|-----|
| `0px` | None / rounded-none | Enterprise, hard corners |
| `4px` | Small / rounded-[4px] | Inputs, data badges |
| `12px` | Medium / rounded-xl | Content cards, buttons, modals |
| `100px` | Full / rounded-full | Pill buttons, avatars |

### Transições

```css
/* Padrão */
transition: all 0.3s ease;

/* Hover suave */
transition-duration: 300ms;
transition-timing-function: ease;

/* Scale on press */
transform: scale(0.98);
```

---

## 🎪 Padrões de Layout

### Container Principal
```tsx
<div className="min-h-screen bg-background text-foreground">
  <div className="max-w-5xl w-full mx-auto p-6 md:p-12">
    {/* Conteúdo */}
  </div>
</div>
```

### Grid de Cards (Responsivo)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <div className="bg-surface p-8 rounded-2xl border border-white/10">
    {/* Card */}
  </div>
</div>
```

### Seção com Título
```tsx
<section className="space-y-16">
  <div className="mb-10">
    <h2 className="text-4xl font-display font-bold mb-4 tracking-tight text-white">
      Título da Seção
    </h2>
    <div className="h-1 w-20 bg-white mb-6 rounded-full"></div>
    <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">
      Descrição da seção
    </p>
  </div>
</section>
```

---

## ✅ Acessibilidade

### Contraste
- **White on Navy:** Passa WCAG 2.1 Level AAA ✅
- **Slate on Navy:** Passa WCAG 2.1 Level AA ✅

### Best Practices
- Sempre use texto White (#FFFFFF) sobre Navy (#040812)
- Texto secundário usa Slate (#64748B)
- Foco visível com ring Gold (#DCA405)
- Botões com estados claros (hover, pressed)

---

## 📱 Responsividade

### Breakpoints
```css
sm: 640px   /* Mobile */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large Desktop */
2xl: 1536px /* Extra Large */
```

### Mobile First
- Design sempre começa mobile
- Grid: 1 coluna → 2 colunas (md) → 4 colunas (lg)
- Padding: reduzido em mobile (p-6 → p-12)
- Font size reduzido em mobile

---

## 🎨 Aplicação no Storybook

Todos os componentes do Storybook seguem este design system:
- Fundo Navy (#040812)
- Botões primários brancos
- Gold para hover/focus
- Texto branco/slate
- Cards com Surface (#0A1326)

### Ver no Storybook
```bash
pnpm storybook
# Acesse: http://localhost:6006
```

---

## 📚 Referências

- **Fonte Display:** Playfair Display (Google Fonts)
- **Fonte Sans:** Inter (Google Fonts)
- **Cores:** Navy, Surface, Brand Blue, White, Slate, Gold
- **Filosofia:** Luxury, Trust, Stability

---

## ✨ Status de Implementação

- [x] Cores aplicadas no `globals.css`
- [x] Fontes Playfair Display + Inter importadas
- [x] Border radius atualizado (4px, 12px, 100px)
- [x] Storybook configurado
- [x] Documentação criada
- [ ] Todos os componentes atualizados
- [ ] Preview do Storybook estilizado
- [ ] Páginas de exemplo atualizadas

---

**Atualizado em:** 01 Mar 2026
**Versão:** 2.0.0 (Design Real)
