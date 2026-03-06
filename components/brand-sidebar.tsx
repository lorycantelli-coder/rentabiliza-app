'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

const navItems: NavItem[] = [
  {
    label: 'FOUNDATIONS',
    href: '/brand-book#foundations',
    children: [
      { label: 'Color System', href: '/brand-book#color' },
      { label: 'Typography', href: '/brand-book#typography' },
      { label: 'Spacing Grid', href: '/brand-book#spacing' },
    ]
  },
  {
    label: 'IDENTITY',
    href: '/brand-book#identity',
    children: [
      { label: 'Brand Core', href: '/brand-book#brand-core' },
      { label: 'Brand Voice', href: '/brand-book#voice' },
      { label: 'Positioning', href: '/brand-book#positioning' },
    ]
  },
  {
    label: 'LOGO',
    href: '/brand-book#logo',
  },
  {
    label: 'COMPONENTS',
    href: '/brand-book#components',
  },
  {
    label: 'BRAND STRATEGY',
    href: '/brand-book#strategy',
  },
]

export function BrandSidebar() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-[#040812] border-r border-white/10 overflow-y-auto z-50">
      {/* Header */}
      <div className="p-6 border-b border-white/10">
        <Link href="/brand-book" className="block">
          <h1 className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </h1>
        </Link>
      </div>

      {/* Navigation */}
      <div className="py-4">
        {navItems.map((item, idx) => (
          <div key={idx}>
            <Link
              href={item.href}
              className={cn(
                "block px-6 py-3 text-sm font-mono tracking-wider transition-colors border-l-2 border-transparent",
                "text-[#DCA405] hover:text-[#F5C542] hover:bg-[#DCA405]/5"
              )}
            >
              {item.label}
            </Link>

            {item.children && (
              <div className="pl-4">
                {item.children.map((child, childIdx) => (
                  <Link
                    key={childIdx}
                    href={child.href}
                    className={cn(
                      "block px-6 py-2 text-xs font-mono tracking-wide transition-colors",
                      "text-white/40 hover:text-white/80"
                    )}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Version */}
      <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10">
        <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">
          VERSION 2.0
        </p>
      </div>
    </nav>
  )
}
