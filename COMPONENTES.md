# 📦 Guia de Uso dos Componentes shadcn/ui

Este guia mostra como usar os 55 componentes shadcn/ui instalados no projeto.

## 🚀 Como Usar

### 1. Importar Componentes

```tsx
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
```

### 2. Usar em Componentes Client ou Server

**Server Component** (padrão):
```tsx
export default function Page() {
  return <Button>Clique aqui</Button>
}
```

**Client Component** (para interatividade):
```tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Page() {
  const [count, setCount] = useState(0)

  return (
    <Button onClick={() => setCount(count + 1)}>
      Contador: {count}
    </Button>
  )
}
```

---

## 📚 Componentes por Categoria

### 🔘 Buttons & Actions

#### Button
```tsx
import { Button } from "@/components/ui/button"

<Button>Default</Button>
<Button variant="destructive">Delete</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">🔍</Button>
```

#### Button Group
```tsx
import { ButtonGroup } from "@/components/ui/button-group"

<ButtonGroup>
  <Button>One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup>
```

---

### 📋 Form Components

#### Input
```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="seu@email.com" />
</div>
```

#### Textarea
```tsx
import { Textarea } from "@/components/ui/textarea"

<Textarea placeholder="Digite aqui..." rows={4} />
```

#### Select
```tsx
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
    <SelectItem value="2">Opção 2</SelectItem>
  </SelectContent>
</Select>
```

#### Checkbox
```tsx
import { Checkbox } from "@/components/ui/checkbox"

<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">Aceito os termos</Label>
</div>
```

#### Radio Group
```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

<RadioGroup defaultValue="option1">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option1" id="option1" />
    <Label htmlFor="option1">Opção 1</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option2" id="option2" />
    <Label htmlFor="option2">Opção 2</Label>
  </div>
</RadioGroup>
```

#### Switch
```tsx
import { Switch } from "@/components/ui/switch"

<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">Modo avião</Label>
</div>
```

---

### 🎴 Cards & Containers

#### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do card</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Conteúdo aqui</p>
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

---

### 🔔 Feedback & Notifications

#### Alert
```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { IconInfoCircle } from "@tabler/icons-react"

<Alert>
  <IconInfoCircle className="h-4 w-4" />
  <AlertTitle>Atenção!</AlertTitle>
  <AlertDescription>
    Esta é uma mensagem importante.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Erro!</AlertTitle>
  <AlertDescription>Algo deu errado.</AlertDescription>
</Alert>
```

#### Toast (Sonner)
```tsx
"use client"

import { toast } from "sonner"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <Button onClick={() => toast.success("Operação bem-sucedida!")}>
      Mostrar Toast
    </Button>
  )
}

// No layout.tsx, adicione:
import { Toaster } from "@/components/ui/sonner"

<body>
  {children}
  <Toaster />
</body>
```

#### Progress
```tsx
import { Progress } from "@/components/ui/progress"

<Progress value={60} />
```

#### Skeleton
```tsx
import { Skeleton } from "@/components/ui/skeleton"

<div className="space-y-2">
  <Skeleton className="h-4 w-full" />
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>
```

---

### 🗂️ Navigation

#### Tabs
```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Conteúdo 1</TabsContent>
  <TabsContent value="tab2">Conteúdo 2</TabsContent>
</Tabs>
```

#### Breadcrumb
```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/produtos">Produtos</BreadcrumbLink>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

---

### 💬 Dialogs & Overlays

#### Dialog
```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título do Modal</DialogTitle>
      <DialogDescription>Descrição do modal</DialogDescription>
    </DialogHeader>
    <p>Conteúdo do modal</p>
  </DialogContent>
</Dialog>
```

#### Alert Dialog
```tsx
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription, AlertDialogFooter, AlertDialogCancel, AlertDialogAction } from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Deletar</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
      <AlertDialogDescription>
        Esta ação não pode ser desfeita.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancelar</AlertDialogCancel>
      <AlertDialogAction>Confirmar</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

#### Tooltip
```tsx
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

<Tooltip>
  <TooltipTrigger asChild>
    <Button variant="outline">Hover me</Button>
  </TooltipTrigger>
  <TooltipContent>
    <p>Tooltip text</p>
  </TooltipContent>
</Tooltip>
```

---

### 📊 Data Display

#### Table
```tsx
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table"

<Table>
  <TableHeader>
    <TableRow>
      <TableHead>Nome</TableHead>
      <TableHead>Email</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>João</TableCell>
      <TableCell>joao@email.com</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

#### Badge
```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

---

### 🎨 Layout

#### Separator
```tsx
import { Separator } from "@/components/ui/separator"

<div>
  <p>Seção 1</p>
  <Separator className="my-4" />
  <p>Seção 2</p>
</div>
```

#### Accordion
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Pergunta 1?</AccordionTrigger>
    <AccordionContent>Resposta 1</AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Pergunta 2?</AccordionTrigger>
    <AccordionContent>Resposta 2</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

## 🎯 Dicas de Uso

### 1. Use com Tabler Icons
```tsx
import { IconPlus, IconTrash, IconEdit } from "@tabler/icons-react"

<Button>
  <IconPlus className="mr-2 h-4 w-4" />
  Adicionar
</Button>
```

### 2. Combine Componentes
```tsx
<Card>
  <CardHeader>
    <div className="flex items-center justify-between">
      <CardTitle>Usuários</CardTitle>
      <Button size="sm">
        <IconPlus className="mr-2 h-4 w-4" />
        Novo
      </Button>
    </div>
  </CardHeader>
  <CardContent>
    <Table>
      {/* ... */}
    </Table>
  </CardContent>
</Card>
```

### 3. Use Tailwind para Estilização
```tsx
<Card className="max-w-md mx-auto mt-8 shadow-lg">
  <CardHeader className="bg-primary text-primary-foreground">
    <CardTitle>Destaque</CardTitle>
  </CardHeader>
  <CardContent className="p-6">
    {/* ... */}
  </CardContent>
</Card>
```

---

## 📖 Recursos

- **Documentação shadcn/ui:** https://ui.shadcn.com
- **Storybook Local:** http://localhost:6006
- **Tabler Icons:** https://tabler.io/icons
- **Exemplos no Projeto:**
  - `/dashboard` - Dashboard completo
  - `/form` - Formulário com todos os inputs

---

## 🎨 Personalização

Todos os componentes podem ser personalizados editando:
- `app/globals.css` - Variáveis CSS
- `tailwind.config.ts` - Configuração do Tailwind
- `components.json` - Configuração do shadcn

Divirta-se construindo! 🚀
