'use client'

import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-[#040812] flex">
      <nav className="fixed left-0 top-0 h-screen w-64 bg-black border-r border-white/10 overflow-y-auto z-50">
        <div className="p-6 border-b border-white/10">
          <Link href="/" className="text-sm font-mono tracking-[0.3em] text-white font-bold flex items-center gap-2 hover:text-[#DCA405] transition-colors">
            BRANDBOOK <span className="text-[#DCA405]">▲</span>
          </Link>
        </div>
        <div className="py-4">
          <div className="border-b border-white/5 pb-2 mb-2">
            <p className="px-6 py-2 text-[10px] font-mono text-white/40 tracking-[0.3em]">COMPONENTS</p>
            <Link href="/components" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Overview</Link>
            <Link href="/buttons" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Buttons</Link>
            <Link href="/cards" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Cards</Link>
            <Link href="/forms" className="block px-6 py-2 text-xs font-mono tracking-wider text-[#DCA405] bg-[#DCA405]/5 hover:text-[#F5C542] transition-colors">Forms</Link>
            <Link href="/feedback" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Feedback</Link>
            <Link href="/states" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">States</Link>
            <Link href="/tables" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Tables</Link>
            <Link href="/lists" className="block px-6 py-2 text-xs font-mono tracking-wider text-white/60 hover:text-[#F5C542] hover:bg-[#DCA405]/5 transition-colors">Lists</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-black">
          <p className="text-[10px] font-mono text-white/20 tracking-[0.2em]">VERSION 2.0</p>
        </div>
      </nav>

      <main className="ml-64 flex-1">
        <div className="max-w-6xl mx-auto px-12 py-16">
          <div className="mb-16">
            <Badge variant="outline" className="mb-4 border-[#DCA405] text-[#DCA405] font-mono text-[10px] tracking-[0.3em]">COMPONENTS</Badge>
            <h1 className="text-5xl font-serif text-white mb-6 tracking-tight">Forms</h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl font-light">
              Inputs, selects, checkboxes e outros elementos para captura de dados do usuário.
            </p>
          </div>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Text Inputs</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#DCA405] focus:outline-none transition-colors" placeholder="João Silva" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#DCA405] focus:outline-none transition-colors" placeholder="joao@exemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Valor de Investimento</label>
                <div className="relative">
                  <span className="absolute left-4 top-3 text-[#DCA405] font-medium">R$</span>
                  <input type="text" className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:border-[#DCA405] focus:outline-none transition-colors" placeholder="300.000" />
                </div>
              </div>
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Select & Checkboxes</h2>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                <label className="block text-sm font-medium text-white mb-2">Tipo de Investimento</label>
                <select className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-[#DCA405] focus:outline-none transition-colors">
                  <option>Selecione...</option>
                  <option>Revenda Rápida</option>
                  <option>Renda Passiva</option>
                  <option>Diversificação</option>
                </select>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-8 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-[#DCA405] focus:ring-[#DCA405]" />
                  <span className="text-white">Aceito os termos</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-5 h-5 rounded border-white/20 bg-white/5 text-[#DCA405] focus:ring-[#DCA405]" />
                  <span className="text-white">Quero receber atualizações</span>
                </label>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-serif text-white mb-8 tracking-tight">Form Completo</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <h3 className="text-xl font-serif text-white mb-6">Cadastro de Interesse</h3>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Nome</label>
                    <input type="text" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-[#DCA405] focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Telefone</label>
                    <input type="tel" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-[#DCA405] focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-[#DCA405] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Mensagem</label>
                  <textarea rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-[#DCA405] focus:outline-none resize-none"></textarea>
                </div>
                <button className="w-full px-6 py-3 bg-[#DCA405] text-black font-medium rounded-lg hover:bg-[#F5C542] transition-colors">
                  Enviar Cadastro
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
