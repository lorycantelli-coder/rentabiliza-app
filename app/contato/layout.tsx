import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato - Rentabiliza | Resposta em 24h',
  description: 'Nossa equipe responde em até 24h. São Paulo, SP. Email: contato@rentabiliza.com | Tel: +55 (11) 3040-5000',
  openGraph: {
    title: 'Contato - Rentabiliza',
    description: 'Vamos Conversar. Resposta em 24h.',
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
