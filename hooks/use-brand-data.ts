'use client'

import { useState, useEffect } from 'react'

// Client-side hooks for brand data
// Note: In production, this would fetch from an API endpoint
// For now, we'll hardcode the data structure

export interface BrandColors {
  navy: string
  gold: string
  white: string
  surface: string
  slate: string
}

export interface BrandMetrics {
  investors: string
  aum: string
  performance: string
  antecipation: string
}

// Hook to get brand colors
export function useBrandColors(): BrandColors {
  return {
    navy: '#040812',
    gold: '#DCA405',
    white: '#FFFFFF',
    surface: '#0A1326',
    slate: '#64748B',
  }
}

// Hook to get brand metrics
export function useBrandMetrics(): BrandMetrics {
  return {
    investors: '15.2K',
    aum: 'R$ 890M',
    performance: '34%',
    antecipation: '48h',
  }
}

// Hook to get brand voice guidelines
export function useBrandVoice() {
  return {
    tone: 'Direto, Confiante, Baseado em Dados',
    avoid: ['Jargão técnico desnecessário', 'Promessas não auditadas', 'Linguagem emocional excessiva'],
    prefer: ['Números concretos', 'Evidências auditadas', 'Comunicação objetiva'],
  }
}

// Hook to load any brand YAML (placeholder for future API integration)
export function useBrandData<T = any>(category: string, filename: string): T | null {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: In production, fetch from API endpoint
    // For now, return null and log
    console.log(`Brand data requested: ${category}/${filename}`)

    // Placeholder: would call /api/brand/${category}/${filename}
    setData(null)
    setLoading(false)
  }, [category, filename])

  return data
}

// Hook for brand testimonials
export function useBrandTestimonials() {
  return {
    testimonials: [
      {
        id: 'test-001',
        author: 'Ricardo Costa',
        role: 'CEO, TechCorp',
        quote: 'Não tenho tempo de acompanhar mercado. A IA da Rentabiliza faz isso por mim.',
        result: '+42% em 8 meses',
      },
      {
        id: 'test-002',
        author: 'Ana Paula Lima',
        role: 'Médica Cirurgiã',
        quote: 'Com a Rentabiliza, estou 38% acima do mercado. A diferença? IA preditiva.',
        result: '+38% em 12 meses',
      },
      {
        id: 'test-003',
        author: 'Carlos Mendes',
        role: 'Diretor Comercial',
        quote: 'Antecipação de 48h faz toda diferença. Performance impressionante.',
        result: '+45% em 6 meses',
      },
    ],
  }
}
