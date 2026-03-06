'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Início', href: '/' },
    { name: 'Rentabiliza', href: '/rentabiliza' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Casos de Sucesso', href: '/casos-sucesso' },
    { name: 'Metodologia', href: '/metodologia' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Brand Book', href: '/brand-book' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#040812]/95 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="text-3xl font-black text-[#DCA405]" style={{ fontFamily: 'Playfair Display' }}>
              R
            </div>
            <span className="text-lg font-black text-white tracking-[0.2em] hidden sm:block">
              RENTABILIZA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/60 hover:text-[#DCA405] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contato">
              <Button className="bg-[#DCA405] text-[#040812] hover:bg-[#F5C542] font-bold">
                CONTATO
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white/60 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 text-sm font-medium text-white/60 hover:text-[#DCA405] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contato" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-[#DCA405] text-[#040812] hover:bg-[#F5C542] font-bold">
                CONTATO
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
