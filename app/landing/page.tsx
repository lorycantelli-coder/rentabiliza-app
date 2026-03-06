'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowRight, TrendingUp, Shield, Zap, CheckCircle2, BarChart3, Users, Award, Star } from 'lucide-react'
import { useState } from 'react'

export default function LandingPage() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Email submitted:', email)
    // Aqui você implementaria a lógica de captura de email
    alert(`Obrigado! Em breve entraremos em contato com ${email}`)
    setEmail('')
  }

  return (
    <div className="min-h-screen bg-background">

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#040812] via-[#0A1326] to-[#0D1F3C]" />

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-[600px] h-[600px] bg-[#DCA405]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#0D1F3C]/50 rounded-full blur-[100px]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-12 py-24 text-center">
          {/* Badge com Prova Específica */}
          <div className="inline-block bg-[#DCA405]/10 border border-[#DCA405]/30 rounded-full px-6 py-2 mb-8">
            <p className="text-sm font-bold text-[#DCA405] tracking-wider">
              ★★★★★ 15.247 INVESTIDORES • R$ 2,8 BI SOB GESTÃO • 34% ACIMA DO MERCADO
            </p>
          </div>

          {/* Headline Hormozi — Fórmula: Resultado + Timeframe + Sem Dor */}
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight tracking-tight" style={{ fontFamily: 'Playfair Display' }}>
            Como Rentabilizar 34% Acima<br/>
            da Média do Mercado em 12 Meses<br/>
            <span className="text-[#DCA405]">Sem Virar Escravo de Gráficos</span>
          </h1>

          {/* Subheadline com Mecanismo Único + Avatar */}
          <p className="text-xl md:text-2xl text-[#64748B] mb-12 max-w-4xl mx-auto font-light leading-relaxed">
            O sistema de 3 fases usado por <strong className="text-white font-semibold">15.000+ executivos e empreendedores</strong> para construir patrimônio consistente através de <strong className="text-[#DCA405]">análise preditiva com IA</strong> — enquanto você foca no que realmente importa
          </p>

          {/* CTAs Benefit-Oriented */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              className="bg-white text-[#040812] hover:bg-[#DCA405] px-12 py-8 text-xl font-bold rounded-xl transition-all transform hover:scale-105"
            >
              Sim! Quero Rentabilidade 34% Acima do Mercado →
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#040812] px-12 py-8 text-xl font-bold rounded-xl transition-all"
            >
              Ver Como o Sistema Funciona →
            </Button>
          </div>

          {/* Social Proof Específica */}
          <div className="flex flex-wrap gap-12 justify-center text-sm text-[#64748B]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#DCA405]" size={20} />
              <span><strong className="text-white">15.247</strong> investidores ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#DCA405]" size={20} />
              <span><strong className="text-white">R$ 2,8 bilhões</strong> sob gestão</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-[#DCA405]" size={20} />
              <span><strong className="text-white">4.9/5</strong> (2.400 reviews verificadas)</span>
            </div>
          </div>
        </div>
      </section>

      {/* METRICS SECTION */}
      <section className="py-24 px-12 bg-card border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="group hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-[#DCA405] mb-3" style={{ fontFamily: 'Playfair Display' }}>
                +34%
              </div>
              <p className="text-lg text-muted-foreground">
                Acima da média<br/>do mercado
              </p>
            </div>

            <div className="group hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-[#DCA405] mb-3" style={{ fontFamily: 'Playfair Display' }}>
                15K+
              </div>
              <p className="text-lg text-muted-foreground">
                Investidores<br/>ativos
              </p>
            </div>

            <div className="group hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-[#DCA405] mb-3" style={{ fontFamily: 'Playfair Display' }}>
                R$2.8B
              </div>
              <p className="text-lg text-muted-foreground">
                Sob gestão<br/>e consultoria
              </p>
            </div>

            <div className="group hover:scale-105 transition-transform">
              <div className="text-6xl font-bold text-[#DCA405] mb-3" style={{ fontFamily: 'Playfair Display' }}>
                4.9/5
              </div>
              <p className="text-lg text-muted-foreground">
                Avaliação média<br/>(2.4K reviews)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION — REESCRITA HORMOZI */}
      <section className="py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/30 mb-6">
              COMO FUNCIONA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Por Que <span className="text-[#DCA405]">15.247 Investidores</span><br/>
              Escolheram Rentabiliza
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Não é mágica. É método. Veja exatamente como transformamos análise complexa em decisões simples que geram resultados acima do mercado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefício #1 — Resultado Específico */}
            <div className="group bg-card border border-white/10 rounded-3xl p-12 hover:border-[#DCA405]/50 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-[#DCA405]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#DCA405]/30 transition-colors">
                <BarChart3 className="text-[#DCA405]" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Identifique Oportunidades 48h Antes
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ✓ Algoritmos preditivos analisam 10.000+ variáveis em tempo real e alertam quando ações vão subir<br/>
                <strong className="text-foreground">→ Para que você entre antes da multidão e maximize ganhos</strong>
              </p>

              <div className="bg-[#DCA405]/10 border border-[#DCA405]/20 rounded-xl p-4">
                <p className="text-sm text-[#DCA405] font-bold">
                  Resultado médio: +34% vs mercado
                </p>
              </div>
            </div>

            {/* Benefício #2 — Remoção de Dor */}
            <div className="group bg-card border border-white/10 rounded-3xl p-12 hover:border-[#DCA405]/50 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-[#DCA405]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#DCA405]/30 transition-colors">
                <Shield className="text-[#DCA405]" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Durma Tranquilo (Sem Acordar com Prejuízo)
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ✓ Stop-loss automático + diversificação inteligente protegem seu patrimônio 24/7<br/>
                <strong className="text-foreground">→ Para que você nunca perca mais que 3% em um único ativo</strong>
              </p>

              <div className="bg-[#DCA405]/10 border border-[#DCA405]/20 rounded-xl p-4">
                <p className="text-sm text-[#DCA405] font-bold">
                  Zero clientes perderam &gt;5% em crashes
                </p>
              </div>
            </div>

            {/* Benefício #3 — Time Delay Reduzido */}
            <div className="group bg-card border border-white/10 rounded-3xl p-12 hover:border-[#DCA405]/50 transition-all hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-[#DCA405]/20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#DCA405]/30 transition-colors">
                <Zap className="text-[#DCA405]" size={32} />
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Investir em 3 Cliques (Não 3 Horas)
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                ✓ Dashboard mostra EXATAMENTE onde alocar, quanto investir e por quê — em português claro<br/>
                <strong className="text-foreground">→ Para que você execute em minutos, não em fins de semana inteiros</strong>
              </p>

              <div className="bg-[#DCA405]/10 border border-[#DCA405]/20 rounded-xl p-4">
                <p className="text-sm text-[#DCA405] font-bold">
                  Tempo médio de decisão: 4 minutos
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 px-12 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/30 mb-6">
              COMO FUNCIONA
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Simples e <span className="text-[#DCA405]">Eficiente</span>
            </h2>
          </div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#DCA405] rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display' }}>
                    01
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Cadastro Rápido
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Crie sua conta em menos de 3 minutos. Perfil de risco, objetivos financeiros
                  e horizonte de investimento identificados automaticamente
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Step 2 */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#DCA405] rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display' }}>
                    02
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Estratégia Personalizada
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Nossos algoritmos criam um portfólio otimizado baseado no seu perfil.
                  Diversificação inteligente entre ações, fundos, renda fixa e cripto
                </p>
              </div>
            </div>

            <div className="h-px bg-white/10" />

            {/* Step 3 */}
            <div className="flex gap-12 items-start">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-[#DCA405] rounded-2xl flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#040812]" style={{ fontFamily: 'Playfair Display' }}>
                    03
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Monitore e Cresça
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Dashboard em tempo real com performance detalhada. Ajustes automáticos
                  conforme o mercado evolui. Você sempre no controle
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STACK — SEÇÃO NOVA */}
      <section className="py-32 px-12 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/30 mb-6">
              O QUE VOCÊ RECEBE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Tudo Que Você Precisa Para<br/>
              <span className="text-[#DCA405]">Rentabilizar Acima do Mercado</span>
            </h2>
          </div>

          {/* Value Stack Table */}
          <div className="bg-background border border-white/10 rounded-3xl p-12 mb-12">
            <div className="space-y-6">
              {[
                { item: 'Plataforma Completa de Investimentos', value: 'R$ 4.997', benefit: 'Acesso vitalício' },
                { item: 'Dashboard com IA Preditiva', value: 'R$ 2.500', benefit: 'Alertas em tempo real' },
                { item: 'Rebalanceamento Automático', value: 'R$ 1.800', benefit: 'Otimização contínua' },
                { item: 'Análises Diárias de Mercado', value: 'R$ 3.200', benefit: '365 relatórios/ano' },
                { item: 'Suporte Especializado (12 meses)', value: 'R$ 2.400', benefit: 'WhatsApp + Email' },
                { item: 'BÔNUS: Curso "Investidor Inteligente"', value: 'R$ 997', benefit: '4h de conteúdo' },
                { item: 'BÔNUS: Planilha de Controle Patrimonial', value: 'R$ 297', benefit: 'Excel + Sheets' }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-4 border-b border-white/5 last:border-0">
                  <div className="flex-1">
                    <p className="text-lg font-bold text-foreground">{row.item}</p>
                    <p className="text-sm text-muted-foreground">{row.benefit}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-muted-foreground line-through">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="mt-8 pt-8 border-t-2 border-[#DCA405]/30">
              <div className="flex items-center justify-between mb-4">
                <p className="text-xl font-bold text-muted-foreground">VALOR TOTAL:</p>
                <p className="text-3xl font-bold text-muted-foreground line-through">R$ 16.191</p>
              </div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-bold text-foreground">SEU INVESTIMENTO:</p>
                <p className="text-5xl font-bold text-[#DCA405]" style={{ fontFamily: 'Playfair Display' }}>R$ 497<span className="text-xl">/mês</span></p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-bold text-foreground">VOCÊ ECONOMIZA:</p>
                <p className="text-2xl font-bold text-green-500">R$ 10.227 no primeiro ano</p>
              </div>
            </div>
          </div>

          {/* Garantia Tripla */}
          <div className="bg-gradient-to-br from-[#DCA405] to-[#F5C542] rounded-3xl p-12 text-[#040812] text-center mb-12">
            <h3 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Garantia Tripla de 30 Dias
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-6xl mb-3">✓</p>
                <p className="font-bold mb-2">Rentabilidade ou Reembolso</p>
                <p className="text-sm">Se não bater o CDI em 12 meses, devolvemos 100%</p>
              </div>
              <div>
                <p className="text-6xl mb-3">✓</p>
                <p className="font-bold mb-2">Satisfação Total</p>
                <p className="text-sm">Não gostou? Cancele em 30 dias e receba tudo de volta</p>
              </div>
              <div>
                <p className="text-6xl mb-3">✓</p>
                <p className="font-bold mb-2">Mantenha Tudo</p>
                <p className="text-sm">Fique com todos os relatórios e análises — mesmo se cancelar</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-[#040812] text-white hover:bg-[#0A1326] px-12 py-6 text-lg font-bold rounded-xl"
            >
              Sim! Quero Rentabilidade 34% Acima do Mercado →
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              ✓ Acesso imediato • ✓ Garantia de 30 dias • ✓ Cancele quando quiser
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <Badge className="bg-[#DCA405]/10 text-[#DCA405] border-[#DCA405]/30 mb-6">
              DEPOIMENTOS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Resultados <span className="text-[#DCA405]">Reais</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="bg-card border-white/10 p-10 hover:border-[#DCA405]/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#DCA405] fill-[#DCA405]" size={20} />
                ))}
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                "Em 8 meses meu portfólio cresceu 42%. A clareza das recomendações e a
                transparência total fazem toda diferença."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DCA405]/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-[#DCA405]">MC</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Marina Costa</p>
                  <p className="text-sm text-muted-foreground">Empresária, São Paulo</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 2 */}
            <Card className="bg-card border-white/10 p-10 hover:border-[#DCA405]/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#DCA405] fill-[#DCA405]" size={20} />
                ))}
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                "Finalmente investimentos sem complicação. A plataforma é intuitiva e o
                suporte é excepcional. Recomendo!"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DCA405]/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-[#DCA405]">RS</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Roberto Silva</p>
                  <p className="text-sm text-muted-foreground">Executivo, Rio de Janeiro</p>
                </div>
              </div>
            </Card>

            {/* Testimonial 3 */}
            <Card className="bg-card border-white/10 p-10 hover:border-[#DCA405]/30 transition-all">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-[#DCA405] fill-[#DCA405]" size={20} />
                ))}
              </div>

              <p className="text-lg text-foreground mb-8 leading-relaxed">
                "ROI de 38% no primeiro ano. Os dados não mentem. Rentabiliza entrega
                o que promete."
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#DCA405]/20 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-[#DCA405]">AL</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Ana Lima</p>
                  <p className="text-sm text-muted-foreground">Médica, Belo Horizonte</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA SECTION — OTIMIZADO HORMOZI */}
      <section className="py-32 px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DCA405] to-[#F5C542]" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#040812] mb-8" style={{ fontFamily: 'Playfair Display' }}>
            Pronto para Rentabilizar 34%<br/>
            Acima do Mercado em 12 Meses?
          </h2>

          <p className="text-xl text-[#040812]/80 mb-12 max-w-3xl mx-auto">
            Junte-se a <strong>15.247 investidores inteligentes</strong> que já construíram patrimônio consistente enquanto focam no que realmente importa
          </p>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-16 text-lg px-6 bg-white text-[#040812] border-none"
              />
              <Button
                type="submit"
                size="lg"
                className="bg-[#040812] text-white hover:bg-[#0A1326] px-10 h-14 text-base font-bold"
              >
                Garantir Meu Acesso com 30 Dias de Garantia →
              </Button>
            </div>
          </form>

          <p className="text-sm text-[#040812]/60">
            ✓ Acesso imediato • ✓ Garantia tripla de 30 dias • ✓ Cancele quando quiser
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-12 bg-card border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo */}
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Rentabiliza
              </h3>
              <p className="text-sm text-muted-foreground">
                Investimentos inteligentes para resultados extraordinários
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Produto</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Como Funciona</Link></li>
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Planos</Link></li>
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Segurança</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Sobre Nós</Link></li>
                <li><Link href="/brand-book" className="hover:text-[#DCA405] transition-colors">Brand Book</Link></li>
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Carreira</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Termos de Uso</Link></li>
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Privacidade</Link></li>
                <li><Link href="#" className="hover:text-[#DCA405] transition-colors">Compliance</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2026 Rentabiliza. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-[#DCA405] transition-colors">Instagram</Link>
              <Link href="#" className="hover:text-[#DCA405] transition-colors">LinkedIn</Link>
              <Link href="#" className="hover:text-[#DCA405] transition-colors">Twitter</Link>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}
