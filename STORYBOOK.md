# 📚 Storybook + shadcn/ui

Este projeto está configurado com Storybook para documentação e desenvolvimento de componentes shadcn/ui.

## 🚀 Como usar

### Iniciar o Storybook

```bash
pnpm storybook
```

O Storybook estará disponível em: **http://localhost:6006**

### Iniciar o Next.js (desenvolvimento)

```bash
pnpm dev
```

A aplicação estará disponível em: **http://localhost:3000**

## 📁 Estrutura de Stories

```
stories/
├── Introduction.mdx          # Página de introdução
└── ui/                       # Stories dos componentes
    ├── Button.stories.tsx
    ├── Card.stories.tsx
    ├── Input.stories.tsx
    ├── Badge.stories.tsx
    ├── Alert.stories.tsx
    ├── Dialog.stories.tsx
    ├── Tooltip.stories.tsx
    ├── Tabs.stories.tsx
    └── Accordion.stories.tsx
```

## ✨ Features do Storybook

### 1. **Componentes Interativos**
- Modifique props em tempo real usando os controles
- Teste diferentes estados e variações
- Visualize mudanças instantaneamente

### 2. **Documentação Automática**
- Gerada a partir dos tipos TypeScript
- Exemplos de código copy-paste
- Props e variantes documentadas

### 3. **Testes de Acessibilidade**
- Testes a11y automáticos em cada componente
- Detecção de problemas de contraste
- Verificação de ARIA labels

### 4. **Testes com Vitest**
- Addon do Vitest integrado
- Execute testes de componentes
- Coverage reports

### 5. **Chromatic Ready**
- Visual regression testing
- Review de UI changes
- CI/CD integration

## 🎨 Design System

O projeto usa o preset **Lyra** do shadcn/ui com:

- **Base Color:** Gray
- **Theme:** Blue
- **Icons:** Tabler Icons (3.37+)
- **Font:** Outfit
- **Menu:** Invertido com acento bold
- **Radius:** None (bordas retas)

## 📦 Componentes Disponíveis

### Form Components
- ✅ Button - Diversos variantes e tamanhos
- ✅ Input - Text, email, password, etc.
- ✅ Select - Dropdown selection
- ✅ Textarea - Multi-line input
- ✅ Checkbox - Boolean input
- ✅ Radio Group - Single choice
- ✅ Switch - Toggle
- ✅ Combobox - Autocomplete

### Layout
- ✅ Card - Container de conteúdo
- ✅ Separator - Divisor visual
- ✅ Tabs - Navegação em abas
- ✅ Accordion - Conteúdo colapsável
- ✅ Collapsible - Seções retráteis

### Feedback
- ✅ Alert - Mensagens informativas
- ✅ Alert Dialog - Diálogos de confirmação
- ✅ Dialog - Modais
- ✅ Toast/Sonner - Notificações
- ✅ Progress - Barras de progresso
- ✅ Skeleton - Loading states

### Navigation
- Navigation Menu - Menus complexos
- Menubar - Menu bar desktop
- Breadcrumb - Navegação hierárquica
- Pagination - Paginação de listas

### Display
- ✅ Badge - Labels e tags
- Avatar - Imagens de perfil
- Table - Tabelas de dados
- Calendar - Seletor de datas
- Chart - Gráficos (Recharts)

### Others
- ✅ Tooltip - Dicas contextuais
- Dropdown Menu - Menus dropdown
- Context Menu - Menu de contexto
- Hover Card - Cards ao hover
- Popover - Popovers
- Drawer - Painéis laterais
- Sheet - Painéis modais
- Sidebar - Navegação lateral

## 🛠️ Criar uma Nova Story

1. Crie um arquivo em `stories/ui/ComponentName.stories.tsx`

```tsx
import type { Meta, StoryObj } from '@storybook/react'
import { ComponentName } from '@/components/ui/component-name'

const meta = {
  title: 'UI/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ComponentName>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // props do componente
  },
}
```

2. O Storybook detectará automaticamente a nova story via HMR

## 🧪 Executar Testes

```bash
# Testes com Vitest
pnpm vitest

# Testes com coverage
pnpm vitest --coverage
```

## 📖 Recursos

- [Documentação do Storybook](https://storybook.js.org/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Tabler Icons](https://tabler.io/icons)
- [Vitest](https://vitest.dev)

## 🎯 Próximos Passos

- [ ] Adicionar stories para todos os 55 componentes
- [ ] Configurar Chromatic para visual regression
- [ ] Adicionar testes de interação
- [ ] Criar templates de componentes compostos
- [ ] Documentar padrões de uso
