import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'

export default function ComponentesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="border-b border-white/10 bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-12 py-6 flex items-center justify-between">
          <Link href="/brand-book" className="text-sm text-accent hover:text-accent/80">
            ← Voltar ao índice
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-12 py-16">
        <div className="mb-24">
          <p className="text-sm font-medium text-muted-foreground mb-2">03. COMPONENTES UI</p>
          <h1 className="text-7xl font-bold text-foreground mb-6">
            Design <span className="text-accent">System</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Biblioteca completa de 55+ componentes reutilizáveis para criar interfaces
            consistentes e profissionais.
          </p>
        </div>

        {/* Componentes Principais */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Componentes Principais</h2>

          {/* Buttons */}
          <div className="bg-card rounded-xl p-12 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
            <div className="mt-6 p-4 bg-background rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Uso:</span> Primary para CTAs principais,
                Secondary para ações secundárias, Ghost para navegação sutil.
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div className="bg-card rounded-xl p-12 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Inputs</h3>
            <div className="grid grid-cols-2 gap-6 max-w-2xl">
              <Input placeholder="Nome completo" />
              <Input type="email" placeholder="email@exemplo.com" />
              <Input type="password" placeholder="Senha" />
              <Input disabled placeholder="Campo desabilitado" />
            </div>
            <div className="mt-6 p-4 bg-background rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Uso:</span> Campos de formulário,
                sempre com labels claros e placeholders descritivos.
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="bg-card rounded-xl p-12 border border-white/10 mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Badges</h3>
            <div className="flex flex-wrap gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="mt-6 p-4 bg-background rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Uso:</span> Status, tags, contadores
                e categorias. Sempre com texto curto e direto.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="bg-card rounded-xl p-12 border border-white/10">
            <h3 className="text-2xl font-bold text-foreground mb-6">Cards</h3>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <h4 className="text-xl font-bold text-foreground mb-2">Card Title</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Cards agrupam conteúdo relacionado e ações sobre um único tópico.
                </p>
                <Button size="sm">Ação</Button>
              </Card>
              <Card className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Retorno Anual</p>
                    <p className="text-3xl font-bold text-foreground">18.5%</p>
                  </div>
                  <Badge>+2.3%</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Acima da média do mercado
                </p>
              </Card>
            </div>
            <div className="mt-6 p-4 bg-background rounded-xl">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">Uso:</span> Container principal para
                informações relacionadas, dashboards, listas e preview de conteúdo.
              </p>
            </div>
          </div>
        </section>

        {/* Biblioteca Completa */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-4">Biblioteca Completa</h2>
          <p className="text-lg text-muted-foreground mb-12">
            Acesse o <Link href="http://localhost:6006" target="_blank" className="text-accent hover:underline">Storybook</Link> para
            explorar todos os 55+ componentes interativamente.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {[
              'Button', 'Input', 'Badge', 'Card', 'Alert', 'Dialog', 'Drawer', 'Sheet',
              'Popover', 'Tooltip', 'Select', 'Checkbox', 'Switch', 'RadioGroup', 'Slider',
              'Progress', 'Avatar', 'Separator', 'Skeleton', 'Tabs', 'Accordion', 'Table',
              'Calendar', 'Command', 'DropdownMenu', 'NavigationMenu', 'Breadcrumb', 'Pagination',
              'Carousel', 'Chart', 'Toast', 'HoverCard', 'ContextMenu', 'Menubar', 'Collapsible',
              'Textarea', 'Label', 'Toggle', 'ToggleGroup', 'Sidebar', 'Kbd', 'Empty', 'Field',
              'Item', 'InputGroup', 'ButtonGroup', 'Spinner', 'Direction', 'Combobox', 'AspectRatio',
              'ScrollArea', 'Resizable', 'InputOTP', 'NativeSelect'
            ].map((component) => (
              <div key={component} className="bg-card rounded-xl p-4 border border-white/10 text-center">
                <p className="text-sm font-medium text-foreground">{component}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Padrões de Uso */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Padrões de Uso</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-foreground mb-4">✅ Fazer</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Usar componentes existentes sempre que possível</li>
                <li>• Manter spacing consistente (múltiplos de 4px)</li>
                <li>• Seguir hierarquia de cores (Primary, Secondary, etc.)</li>
                <li>• Testar em diferentes tamanhos de tela</li>
                <li>• Usar estados adequados (hover, active, disabled)</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-foreground mb-4">❌ Evitar</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Criar componentes customizados sem necessidade</li>
                <li>• Usar cores fora da paleta aprovada</li>
                <li>• Misturar estilos de diferentes componentes</li>
                <li>• Ignorar estados de acessibilidade</li>
                <li>• Sobrescrever estilos base dos componentes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <Link
            href="/brand-book/logo"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Seção anterior: Logo & Aplicações
          </Link>
          <Link
            href="/brand-book/tom-de-voz"
            className="text-accent hover:text-accent/80"
          >
            Próxima seção: Tom de Voz →
          </Link>
        </div>
      </div>
    </div>
  )
}
