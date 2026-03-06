import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function AplicacoesPage() {
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
          <p className="text-sm font-medium text-muted-foreground mb-2">05. APLICAÇÕES</p>
          <h1 className="text-7xl font-bold text-foreground mb-6">
            Templates & <span className="text-accent">Exemplos</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Exemplos práticos de como aplicar o design system da Rentabiliza em diferentes
            contextos e plataformas.
          </p>
        </div>

        {/* Landing Page Example */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Landing Page</h2>

          <div className="bg-card rounded-xl overflow-hidden border border-white/10">
            {/* Hero Section Example */}
            <div className="relative bg-gradient-to-br from-[#040812] via-[#0A1326] to-[#0D1F3C] p-16">
              <div className="max-w-4xl">
                <p className="text-sm font-medium text-accent mb-4 tracking-wider">RENTABILIZA</p>
                <h1 className="text-6xl font-bold text-white mb-6">
                  Construa Riqueza <br />
                  <span className="text-accent">Com Propósito</span>
                </h1>
                <p className="text-xl text-[#64748B] mb-8 max-w-2xl">
                  Descubra como investidores inteligentes estão multiplicando seu patrimônio
                  através de estratégias imobiliárias comprovadas.
                </p>
                <div className="flex gap-4">
                  <Button>Começar Agora</Button>
                  <Button variant="secondary">Saiba Mais</Button>
                </div>
              </div>
              <div className="absolute top-10 right-10 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
            </div>

            {/* Stats Section Example */}
            <div className="grid grid-cols-3 gap-8 p-12 bg-[#0A1326]">
              <div>
                <p className="text-4xl font-bold text-foreground mb-2">18.5%</p>
                <p className="text-sm text-muted-foreground">Retorno médio anual</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground mb-2">R$ 100M+</p>
                <p className="text-sm text-muted-foreground">Em retornos gerados</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-foreground mb-2">500+</p>
                <p className="text-sm text-muted-foreground">Investidores ativos</p>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard Example */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Dashboard</h2>

          <div className="bg-card rounded-xl p-8 border border-white/10">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-1">Portfólio Consolidado</h3>
                <p className="text-sm text-muted-foreground">Atualizado há 2 horas</p>
              </div>
              <Button size="sm">Ver Detalhes</Button>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <Card className="p-6 bg-background">
                <p className="text-sm text-muted-foreground mb-2">Valor Total Investido</p>
                <p className="text-3xl font-bold text-foreground mb-2">R$ 2.450.000</p>
                <Badge>+12.5% este ano</Badge>
              </Card>
              <Card className="p-6 bg-background">
                <p className="text-sm text-muted-foreground mb-2">Retorno Acumulado</p>
                <p className="text-3xl font-bold text-foreground mb-2">R$ 485.000</p>
                <Badge>19.8% ROI</Badge>
              </Card>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Seu portfólio está performando <span className="text-accent font-medium">4.2 pontos percentuais</span> acima
                da média do mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Form Example */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Formulário</h2>

          <div className="bg-card rounded-xl p-12 border border-white/10 max-w-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-2">Entre em Contato</h3>
            <p className="text-sm text-muted-foreground mb-8">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Sobrenome</label>
                  <Input placeholder="Seu sobrenome" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                <Input type="email" placeholder="seu@email.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Telefone</label>
                <Input type="tel" placeholder="(00) 00000-0000" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Mensagem</label>
                <textarea
                  className="w-full bg-transparent border border-input px-4 py-3 rounded-xl text-foreground placeholder:text-muted-foreground min-h-32"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <Button className="w-full">Enviar Mensagem</Button>
            </div>
          </div>
        </section>

        {/* Email Example */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Email Marketing</h2>

          <div className="bg-white rounded-xl overflow-hidden border border-white/10 max-w-2xl">
            <div className="bg-[#040812] p-8 text-center">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                Rentabiliza
              </h3>
            </div>

            <div className="p-8">
              <h4 className="text-2xl font-bold text-[#040812] mb-4">
                Seu Relatório Mensal Chegou
              </h4>
              <p className="text-base text-[#64748B] mb-6">
                Confira o desempenho do seu portfólio no último mês e descubra novas oportunidades
                de investimento.
              </p>

              <div className="bg-[#F8F9FA] rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">Retorno Mensal</p>
                    <p className="text-2xl font-bold text-[#040812]">+2.3%</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#64748B] mb-1">Retorno Anual</p>
                    <p className="text-2xl font-bold text-[#040812]">18.5%</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="bg-[#DCA405] text-white px-3 py-1 rounded-lg font-bold">
                    +4.2%
                  </span>
                  <span className="text-[#64748B]">acima da média do mercado</span>
                </div>
              </div>

              <button className="bg-[#040812] text-white px-8 py-4 rounded-xl font-bold w-full">
                Ver Relatório Completo
              </button>
            </div>

            <div className="border-t border-[#E5E7EB] p-6 text-center">
              <p className="text-xs text-[#64748B]">
                © 2026 Rentabiliza. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-foreground mb-12">Boas Práticas</h2>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-accent mb-6">✓ Sempre</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Manter hierarquia visual clara</li>
                <li>• Usar cores da paleta aprovada</li>
                <li>• Garantir contraste mínimo AAA</li>
                <li>• Testar em diferentes dispositivos</li>
                <li>• Incluir CTAs claros e diretos</li>
                <li>• Seguir spacing system (múltiplos de 4px)</li>
                <li>• Usar componentes do design system</li>
                <li>• Manter consistência tipográfica</li>
              </ul>
            </div>

            <div className="bg-card rounded-xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-red-500 mb-6">✕ Nunca</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>• Usar cores fora da paleta</li>
                <li>• Distorcer ou modificar o logo</li>
                <li>• Criar componentes customizados sem necessidade</li>
                <li>• Usar fontes não aprovadas</li>
                <li>• Ignorar estados de acessibilidade</li>
                <li>• Misturar estilos diferentes</li>
                <li>• Sobrescrever estilos base</li>
                <li>• Usar jargão técnico excessivo</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <Link
            href="/brand-book/tom-de-voz"
            className="text-muted-foreground hover:text-foreground"
          >
            ← Seção anterior: Tom de Voz
          </Link>
          <Link
            href="/brand-book"
            className="text-accent hover:text-accent/80"
          >
            Voltar ao início →
          </Link>
        </div>
      </div>
    </div>
  )
}
