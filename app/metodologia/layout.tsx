import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Metodologia - Rentabiliza | Como a IA Antecipa o Mercado',
  description: 'Pipeline de dados → Deep learning → Antecipação 48h → Execução automática. Transparência absoluta. Zero caixa preta. Auditoria Ernst & Young.',
  openGraph: {
    title: 'Metodologia - Rentabiliza',
    description: 'Como a IA Antecipa o Mercado 48h Antes',
  },
}

export default function MetodologiaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
