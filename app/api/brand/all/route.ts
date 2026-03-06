import { NextResponse } from 'next/server'
import { loadAllBrandData } from '@/lib/brand-yaml'

export async function GET() {
  try {
    const allData = loadAllBrandData()

    return NextResponse.json(allData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error loading all brand data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
