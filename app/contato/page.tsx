'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    investment: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Formulário enviado! Nossa equipe entrará em contato em até 24h.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      content: "contato@rentabiliza.com",
      link: "mailto:contato@rentabiliza.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefone",
      content: "+55 (11) 3040-5000",
      link: "tel:+551130405000",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Endereço",
      content: "Av. Faria Lima, 3144 - São Paulo, SP",
      link: "#",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horário",
      content: "Seg-Sex: 9h às 18h",
      link: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-[#040812]">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden gradient-hero">
        <div className="absolute inset-0 gradient-subtle-glow opacity-30"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-label text-[#DCA405] px-4 py-2 bg-[#DCA405]/10 rounded-full border border-[#DCA405]/20 inline-block mb-6">
              CONTATO
            </span>

            <h1 className="text-display-xl text-white mb-6">
              Vamos <span className="text-[#DCA405]">Conversar</span>
            </h1>

            <p className="text-body-l text-white/60 max-w-3xl mx-auto">
              Nossa equipe responde em até 24h. Executivos ocupados merecem respostas rápidas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-24 bg-black border-y border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-display-h3 text-white mb-8">Informações de Contato</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 bg-white/[0.02] border border-white/10 rounded-lg hover:border-[#DCA405]/30 transition-all"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#DCA405]/10 border border-[#DCA405]/20 rounded-lg flex items-center justify-center text-[#DCA405]">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{info.title}</h4>
                      <p className="text-body-s text-white/60">{info.content}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-display-h5 text-white mb-4">Redes Sociais</h3>
                <div className="flex gap-4">
                  {[
                    { name: 'LinkedIn', icon: 'in' },
                    { name: 'Twitter', icon: 'tw' },
                    { name: 'Instagram', icon: 'ig' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 bg-white/[0.02] border border-white/10 rounded-lg flex items-center justify-center text-white/60 hover:border-[#DCA405]/30 hover:text-[#DCA405] transition-all"
                      aria-label={social.name}
                    >
                      <span className="text-xs font-mono font-bold">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-display-h3 text-white mb-8">Envie uma Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#0A1326] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-[#DCA405] focus:outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0A1326] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-[#DCA405] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0A1326] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-[#DCA405] focus:outline-none transition-colors"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <label htmlFor="investment" className="block text-sm font-bold text-white mb-2">
                    Faixa de Investimento *
                  </label>
                  <select
                    id="investment"
                    name="investment"
                    required
                    value={formData.investment}
                    onChange={handleChange}
                    className="w-full bg-[#0A1326] border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#DCA405] focus:outline-none transition-colors"
                  >
                    <option value="">Selecione...</option>
                    <option value="100k-500k">R$ 100K - R$ 500K</option>
                    <option value="500k-1m">R$ 500K - R$ 1M</option>
                    <option value="1m-5m">R$ 1M - R$ 5M</option>
                    <option value="5m+">R$ 5M+</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0A1326] border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/40 focus:border-[#DCA405] focus:outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#DCA405] text-[#040812] hover:bg-[#F5C542] font-bold py-6 text-lg"
                >
                  ENVIAR MENSAGEM →
                </Button>

                <p className="text-xs text-white/40 text-center">
                  Ao enviar, você concorda com nossa{' '}
                  <a href="#" className="text-[#DCA405] hover:underline">
                    Política de Privacidade
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SLA Commitment */}
      <section className="py-24 bg-[#0A1326]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-label text-[#DCA405] mb-4">COMPROMISSO</p>
              <h2 className="text-display-h2 text-white">Resposta Garantida</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-black/30 border border-white/10 rounded-lg p-8">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-3">24h</div>
                <p className="text-sm text-white/60">Resposta inicial por email</p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-lg p-8">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-3">48h</div>
                <p className="text-sm text-white/60">Agendamento de call</p>
              </div>

              <div className="bg-black/30 border border-white/10 rounded-lg p-8">
                <div className="text-5xl font-mono font-bold text-[#DCA405] mb-3">7d</div>
                <p className="text-sm text-white/60">Onboarding completo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map (Placeholder) */}
      <section className="h-96 bg-black border-t border-white/10">
        <div className="w-full h-full flex items-center justify-center bg-[#0A1326]">
          <div className="text-center">
            <svg className="w-16 h-16 text-[#DCA405] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-body-m text-white/60">
              Av. Faria Lima, 3144 - São Paulo, SP
            </p>
            <p className="text-sm text-white/40 mt-2">
              (Mapa interativo em breve)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
