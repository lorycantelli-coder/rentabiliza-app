import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DataMetric } from "@/components/ui/data-metric"
import { IconCheck, IconTrendingUp, IconClock, IconShieldCheck, IconTarget } from "@tabler/icons-react"

export default function RentabilizaPage() {
  const features = [
    {
      icon: IconTrendingUp,
      title: "R$ 2,3 Milhões",
      description: "em oportunidades identificadas",
      mono: true
    },
    {
      icon: IconClock,
      title: "50 segundos",
      description: "vs 4 dias de análise manual",
      mono: true
    },
    {
      icon: IconShieldCheck,
      title: "200x MAIS RÁPIDO",
      description: "que análise tradicional",
      mono: true
    }
  ]

  const benefits = [
    "Outros investidores analisam 800 imóveis por mês",
    "50 oportunidades reais passam despercebidas",
    "R$ 900.000 em margem de lucro perdida",
    "Seus concorrentes já usam automação",
    "Velocidade de análise define quem compra primeiro"
  ]

  const offerings = [
    {
      icon: IconTarget,
      title: "Análise Automática de Editais",
      description: "Verifica metodologia, ônus e riscos em 60 segundos"
    },
    {
      icon: IconShieldCheck,
      title: "Classificação de Risco Auditada",
      description: "Lance recomendado baseado em dados históricos"
    },
    {
      icon: IconClock,
      title: "Acesso Vitalício",
      description: "Pagamento único. Zero mensalidades."
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 gradient-hero relative">
        <div className="absolute inset-0 gradient-subtle-glow opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Positioning Label */}
            <div className="inline-block">
              <span className="text-label text-accent px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                IA Preditiva para Leilões
              </span>
            </div>
            <h1 className="text-display-h1">
              Agente de IA que Já Identificou{" "}
              <span className="text-accent font-mono tracking-tight">R$ 2,3 Milhões</span> em
              Oportunidades de Leilão Eliminando{" "}
              <span className="text-accent font-mono">90%</span> do Trabalho Braçal
            </h1>
            <p className="text-body-l text-muted-foreground">
              IA analisa edital completo em <span className="font-mono text-accent">60 segundos</span>. Identifica oportunidades com até <span className="font-mono text-accent">40%</span> de desconto automático.
            </p>

            <Button
              size="lg"
              className="bg-white text-background font-bold uppercase text-lg px-8 py-6 rounded-xl shadow-[0_4px_14px_rgba(255,255,255,0.2)] hover:gradient-gold-accent hover:text-background hover:ring-4 hover:ring-accent/30 transition-all"
            >
              ANALISAR LEILÕES EM 60 SEGUNDOS
            </Button>
          </div>
        </div>
      </section>

      {/* Positioning Statement Section */}
      <section className="py-12 border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-body-l text-muted-foreground">
              A única plataforma que <span className="text-accent font-bold">antecipa</span> oportunidades{" "}
              <span className="font-mono text-accent">48h antes</span> do mercado reagir.{" "}
              <span className="text-white font-semibold">IA Preditiva</span>, não reativa.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-subtle-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-display-h2 text-center mb-12">A matemática não mente:</h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="text-center border-white/10 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(220,164,5,0.15)] transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-accent w-8 h-8" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <DataMetric
                      value={feature.title}
                      description={feature.description}
                      variant="large"
                      className="items-center"
                    />
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-display-h2 mb-4">Enquanto você analisa um imóvel em <span className="font-mono text-accent">4 dias</span>:</h2>
            <Card className="mt-8 border-destructive/30">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <IconCheck className="text-accent w-6 h-6 mt-1 flex-shrink-0" />
                      <p className="text-lg">{benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] gradient-subtle-glow opacity-60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-display-h2 text-center mb-4">
              Isso é o que você recebe em <span className="text-accent font-mono">50 segundos:</span>
            </h2>
            <p className="text-center text-xl text-muted-foreground mb-12 italic">
              Parecer completo do imóvel que deseja arrematar
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-white/10">
                <CardHeader>
                  <CardTitle className="text-accent">📋 Parecer Final:</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <IconCheck className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <p>Viável com cautela</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconCheck className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <p>Lance seguro: até <span className="font-mono text-accent">R$ 115.000</span> (margem preservada)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconCheck className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <p>Desconto: <span className="font-mono text-accent">40%</span> sobre avaliação (<span className="font-mono text-accent">R$ 48.000</span> de margem!)</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <IconCheck className="text-accent mt-1 w-5 h-5 flex-shrink-0" />
                    <p>Riscos: ocupação possível + débitos <span className="font-mono">R$ 8.000</span></p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-white/10">
                <CardHeader>
                  <CardTitle>💡 Dados Verificados:</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Matrícula, débitos, valor de mercado, histórico de leilões. <span className="font-mono text-accent">4 dias</span> de análise em <span className="font-mono text-accent">60 segundos</span>.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-display-h2 text-center mb-12">
            O que você recebe por <span className="text-accent font-mono">R$ 58</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {offerings.map((offering, index) => {
              const Icon = offering.icon
              return (
                <Card key={index} className="text-center hover:border-accent/50 transition-colors">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="text-accent w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{offering.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{offering.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-display-h2">
              Seus concorrentes já analisam <span className="font-mono text-accent">200x</span> mais rápido
            </h2>
            <p className="text-body-l text-muted-foreground">
              Previsibilidade através de dados. Escala através de automação. Oportunidades antes da concorrência.
            </p>
            <Button
              size="lg"
              className="bg-white text-background font-bold uppercase text-lg px-8 py-6 rounded-xl shadow-[0_4px_14px_rgba(255,255,255,0.2)] hover:gradient-gold-accent hover:text-background hover:ring-4 hover:ring-accent/30 transition-all"
            >
              ANALISAR LEILÕES EM 60 SEGUNDOS
            </Button>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5A] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  )
}
