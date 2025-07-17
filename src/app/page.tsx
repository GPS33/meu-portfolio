// src/app/page.tsx

// Componentes principais da aplicação
import { NeonBackground } from '@/components/NeonBackground'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Sobre } from '@/components/Sobre'
import { Conhecimentos } from '@/components/Conhecimentos'
import { Projetos } from '@/components/Projetos'
import { Contato } from '@/components/Contato'
import { Footer } from '@/components/Footer'

/**
 * Página principal do portfólio
 */
export default function Home() {
  return (
    <>
      {/* Canvas com fundo animado estilo synthwave */}
      <NeonBackground />

      {/* Navbar fixa sobre o fundo */}
      <Navbar />

      {/* Seções do conteúdo com espaçamento vertical e z-index acima do fundo */}
      <main className="flex flex-col gap-32 relative z-10">
        <section id="inicio">
          <Hero />
        </section>

        <section id="sobre">
          <Sobre />
        </section>

        <section id="conhecimentos">
          <Conhecimentos />
        </section>

        <section id="projetos">
          <Projetos />
        </section>

        <section id="contato">
          <Contato />
        </section>

        <Footer />
      </main>
    </>
  )
}
