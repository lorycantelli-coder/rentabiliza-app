'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Menu, X } from 'lucide-react'

const sections = [
  { id: '01', title: 'Identity System' },
  { id: '02', title: 'Typography' },
  { id: '03', title: 'Color' },
  { id: '04', title: 'Logo' },
  { id: '05', title: 'Manifesto' },
  { id: '06', title: 'Symbols' },
  { id: '07', title: 'Naming' },
  { id: '08', title: 'Positioning' },
  { id: '09', title: 'Archetypes' },
  { id: '10', title: 'Evidence' },
  { id: '11', title: 'Narrative' },
  { id: '12', title: 'Voices' },
  { id: '13', title: 'Voice' },
]

export default function GuidelinesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('01')

  const scrollToSection = (id: string) => {
    const element = document.getElementById(`section-${id}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setSidebarOpen(false)
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-[#040812] text-white">
      {/* Mobile Menu */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-6 left-6 z-50 lg:hidden bg-[#DCA405] text-[#040812] p-3 rounded hover:bg-[#F5C542] transition-colors"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-72 bg-black border-r border-[#DCA405]/20 z-40
          overflow-y-auto transition-transform duration-300
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#DCA405]/20">
          <Link href="/brandbook" className="block">
            <p className="text-[#DCA405] text-[10px] font-mono tracking-[0.3em] mb-2">RENTABILIZA</p>
            <h1 className="text-xl font-black text-white tracking-tight mb-0.5">BRAND</h1>
            <h2 className="text-lg font-black text-[#DCA405] tracking-tight">GUIDELINES</h2>
            <p className="text-[10px] text-white/20 mt-2 font-mono">v2.0 • 2026</p>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <p className="text-[10px] font-mono text-white/30 mb-4 tracking-[0.2em] px-3">SECTIONS</p>
          <ul className="space-y-0.5">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded transition-all group
                    ${activeSection === section.id
                      ? 'bg-[#DCA405] text-[#040812]'
                      : 'hover:bg-[#DCA405]/5 text-white'
                    }
                  `}
                >
                  <div className={`
                    w-1.5 h-1.5 rounded-full
                    ${activeSection === section.id ? 'bg-[#040812]' : 'bg-[#DCA405]/30'}
                  `} />
                  <div className="flex-1 text-left">
                    <p className={`
                      text-[10px] font-mono tracking-[0.2em] font-bold
                      ${activeSection === section.id ? 'text-[#040812]/60' : 'text-[#DCA405]/70'}
                    `}>
                      {section.id}
                    </p>
                    <p className={`
                      text-sm font-bold tracking-tight
                      ${activeSection === section.id
                        ? 'text-[#040812]'
                        : 'text-white group-hover:text-[#DCA405]'
                      }
                    `}>
                      {section.title}
                    </p>
                  </div>
                  <ChevronRight
                    size={14}
                    className={`
                      transition-all
                      ${activeSection === section.id
                        ? 'text-[#040812]/60 translate-x-0.5'
                        : 'text-white/10 group-hover:text-[#DCA405]/50 group-hover:translate-x-0.5'
                      }
                    `}
                  />
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-[#DCA405]/20 mt-auto">
          <div className="flex gap-2 mb-4">
            <div className="w-4 h-4 bg-[#040812] border border-white/20 rounded-sm" />
            <div className="w-4 h-4 bg-[#DCA405] border border-[#DCA405] rounded-sm" />
            <div className="w-4 h-4 bg-white border border-white rounded-sm" />
          </div>
          <p className="text-[10px] text-white/20 font-mono leading-relaxed tracking-wide">
            PRECISION<br/>
            CLARITY<br/>
            PROSPERITY
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="lg:ml-72 min-h-screen bg-[#040812]">
        {children}
      </main>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}
