import { NextRequest, NextResponse } from 'next/server'
import { loadBrandYaml } from '@/lib/brand-yaml'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ category: string; file: string }> }
) {
  const { category, file } = await params

  try {
    // Remove .yaml extension if present
    const filename = file.replace('.yaml', '')

    // Load the YAML file
    const data = loadBrandYaml(category, filename)

    if (!data) {
      return NextResponse.json({ error: 'Brand data not found' }, { status: 404 })
    }

    // Return the data
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('Error loading brand data:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
