import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sobre - Rentabiliza | IA Preditiva, Não Ficção',
  description: 'Fundada em 2022 por ex-quants de Stanford e Google Brain. Democratizando IA preditiva de nível institucional. 15.2K investidores, R$ 890M sob gestão.',
  openGraph: {
    title: 'Sobre - Rentabiliza',
    description: 'IA Preditiva, Não Ficção. É Ciência.',
  },
}

export default function SobreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
