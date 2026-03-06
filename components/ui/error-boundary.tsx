'use client'

import { Component, ReactNode } from 'react'
import { Button } from './button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-screen bg-[#040812] flex items-center justify-center p-4">
          <div className="max-w-md text-center">
            <div className="w-16 h-16 bg-red-500/10 border border-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <h1 className="text-display-h3 text-white mb-4">Algo deu errado</h1>
            <p className="text-body-m text-white/60 mb-8">
              Desculpe, ocorreu um erro inesperado. Nossa equipe foi notificada.
            </p>

            {this.state.error && (
              <details className="mb-8 text-left">
                <summary className="text-sm text-white/40 font-mono cursor-pointer mb-2">
                  Detalhes técnicos
                </summary>
                <pre className="text-xs text-red-400 bg-black/30 p-4 rounded-lg overflow-auto">
                  {this.state.error.message}
                </pre>
              </details>
            )}

            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => this.setState({ hasError: false })}
                className="bg-[#DCA405] text-[#040812] hover:bg-[#F5C542]"
              >
                Tentar Novamente
              </Button>
              <Button
                onClick={() => (window.location.href = '/')}
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                Voltar ao Início
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
