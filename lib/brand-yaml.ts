import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

// Base path for brand YAML files
const BRAND_DOCS_PATH = path.join(process.cwd(), 'docs', 'brand')

// Type definitions for brand data
export interface BrandData {
  metadata: {
    schema: string
    version: string
    business_unit?: string
    extracted_at?: string
    last_updated?: string
    status?: string
  }
  [key: string]: any
}

/**
 * Load a YAML file from the brand docs directory
 */
export function loadBrandYaml(category: string, filename: string): BrandData | null {
  try {
    const filePath = path.join(BRAND_DOCS_PATH, category, `${filename}.yaml`)

    if (!fs.existsSync(filePath)) {
      console.warn(`Brand YAML not found: ${filePath}`)
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const data = yaml.load(fileContents) as BrandData

    return data
  } catch (error) {
    console.error(`Error loading brand YAML ${category}/${filename}:`, error)
    return null
  }
}

/**
 * Load all YAMLs from a specific category
 */
export function loadBrandCategory(category: string): Record<string, BrandData> {
  try {
    const categoryPath = path.join(BRAND_DOCS_PATH, category)

    if (!fs.existsSync(categoryPath)) {
      console.warn(`Brand category not found: ${category}`)
      return {}
    }

    const files = fs.readdirSync(categoryPath).filter((file) => file.endsWith('.yaml'))

    const result: Record<string, BrandData> = {}

    for (const file of files) {
      const filename = file.replace('.yaml', '')
      const data = loadBrandYaml(category, filename)

      if (data) {
        result[filename] = data
      }
    }

    return result
  } catch (error) {
    console.error(`Error loading brand category ${category}:`, error)
    return {}
  }
}

/**
 * Load all brand data
 */
export function loadAllBrandData() {
  const categories = ['identity', 'foundation', 'evidence', 'narrative']

  const allData: Record<string, Record<string, BrandData>> = {}

  for (const category of categories) {
    allData[category] = loadBrandCategory(category)
  }

  return allData
}

/**
 * Get specific value from brand data using dot notation
 * Example: getBrandValue('identity', 'brand-core', 'brand_promise')
 */
export function getBrandValue(category: string, filename: string, path: string): any {
  const data = loadBrandYaml(category, filename)

  if (!data) return null

  const keys = path.split('.')
  let current: any = data

  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return null
    }
  }

  return current
}

// Convenience functions for specific categories
export const BrandIdentity = {
  core: () => loadBrandYaml('identity', 'brand-core'),
  voice: () => loadBrandYaml('identity', 'brand-voice'),
  positioning: () => loadBrandYaml('identity', 'positioning'),
  archetypes: () => loadBrandYaml('identity', 'archetypes'),
}

export const BrandFoundation = {
  colors: () => loadBrandYaml('foundation', 'color-system'),
  typography: () => loadBrandYaml('foundation', 'typography-system'),
  logo: () => loadBrandYaml('foundation', 'logo-guidelines'),
  spacing: () => loadBrandYaml('foundation', 'spacing-grid'),
  components: () => loadBrandYaml('foundation', 'components'),
}

export const BrandEvidence = {
  metrics: () => loadBrandYaml('evidence', 'performance-metrics'),
  testimonials: () => loadBrandYaml('evidence', 'testimonials'),
  competitive: () => loadBrandYaml('evidence', 'competitive-analysis'),
}

export const BrandNarrative = {
  messaging: () => loadBrandYaml('narrative', 'messaging-framework'),
  journey: () => loadBrandYaml('narrative', 'customer-journey'),
  content: () => loadBrandYaml('narrative', 'content-guidelines'),
}
