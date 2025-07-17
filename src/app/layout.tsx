// src/app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'

export const metadata = {
  title: 'Gustavo | Portfólio',
  description: 'Desenvolvedor Front-End com foco em React, Next.js, Tailwind e TypeScript.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-neutral-950 text-white font-sans">
        {/* Navbar fixa no topo */}
        <Navbar />

        {/* Conteúdo da página */}
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
