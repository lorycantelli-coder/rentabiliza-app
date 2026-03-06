export function Loading() {
  return (
    <div className="min-h-screen bg-[#040812] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block relative">
          <div className="w-16 h-16 border-4 border-[#DCA405]/20 border-t-[#DCA405] rounded-full animate-spin"></div>
        </div>
        <p className="mt-4 text-sm text-white/60 font-mono">Carregando...</p>
      </div>
    </div>
  )
}

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  }

  return (
    <div className={`${sizes[size]} border-[#DCA405]/20 border-t-[#DCA405] rounded-full animate-spin`}></div>
  )
}
