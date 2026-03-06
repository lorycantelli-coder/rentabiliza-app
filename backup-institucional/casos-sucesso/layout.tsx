import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Casos de Sucesso - Rentabiliza | Resultados Auditados',
  description: 'Executivos, médicos, empreendedores: +34% acima do mercado em 2024. Resultados auditados pela Ernst & Young. Taxa de sucesso: 89%.',
  openGraph: {
    title: 'Casos de Sucesso - Rentabiliza',
    description: 'Resultados Auditados. Não Promessas.',
  },
}

export default function CasosSucessoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
