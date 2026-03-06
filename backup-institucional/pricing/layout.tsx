import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing - Rentabiliza | Fee Flat R$ 497/mês',
  description: 'Transparência absoluta. R$ 497/mês flat. Sem taxa de performance. Economia de R$ 18K/ano vs fundos tradicionais. 30 dias de garantia.',
  openGraph: {
    title: 'Pricing - Rentabiliza',
    description: 'Fee Flat. Sem Surpresas.',
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
