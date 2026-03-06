import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rentabiliza - IA Preditiva para Investimentos',
    short_name: 'Rentabiliza',
    description: '34% acima do mercado. IA antecipa padrões 48h antes. Resultados auditados.',
    start_url: '/',
    display: 'standalone',
    background_color: '#040812',
    theme_color: '#DCA405',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
