'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaTools,
  FaDraftingCompass,
  FaLaptop,
} from 'react-icons/fa'

import { WrapperFadeIn } from './WrapperFadeIn'

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const HIGHLIGHTS = [
  {
    icon: FaGraduationCap,
    title: 'Técnico em Informática',
    desc: 'Formado pelo IFSul – Campus Charqueadas (2018–2022)',
  },
  {
    icon: FaLaptop,
    title: 'Desenvolvedor Web',
    desc: 'Experiência com React, Next.js, TypeScript, Tailwind, Bootstrap e Vite',
  },
  {
    icon: FaDraftingCompass,
    title: 'Desenho Técnico / Topografia',
    desc: 'Agro Engenharia (set/2022 – abr/2024)',
  },
  {
    icon: FaTools,
    title: 'Manutenção de Computadores',
    desc: 'Limpeza, formatação e remoção de vírus',
  },
]

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export function Sobre() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24"
    >
      <WrapperFadeIn>
        {/* HEADER */}
        <header className="text-center mb-20">
          <h2 className="text-4xl font-bold drop-shadow-[0_0_10px_#f72585]">
            Sobre Mim
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Um panorama claro da minha formação, experiência e trajetória
            profissional.
          </p>
        </header>

        {/* IMAGEM + CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 items-stretch mb-20">
          {/* FOTO */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 180, damping: 14 }}
            className="relative w-full max-w-sm aspect-[3/4] mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_24px_#f72585]/40"
          >
            <Image
              src="/images/eu.jpg"
              alt="Foto de perfil de Gustavo"
              fill
              className="object-cover object-top"
              priority
            />
          </motion.div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <InfoCard
                key={title}
                icon={<Icon />}
                title={title}
                desc={desc}
              />
            ))}
          </div>
        </div>

        {/* TEXTO CENTRALIZADO */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="max-w-3xl mx-auto text-center rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 md:p-8 shadow-[0_0_16px_#f72585]/20 mb-16"
        >
          <p className="text-neutral-300 leading-relaxed text-base md:text-lg">
            Desenvolvedor web e técnico em informática, atuei como desenhista
            técnico de topografia na Agro Engenharia e como desenvolvedor web na
            Making Publicidade. Também trabalhei de forma autônoma com manutenção
            de computadores. Atualmente curso Análise e Desenvolvimento de
            Sistemas pela UniBF e sigo aprofundando meus conhecimentos em
            tecnologias modernas de desenvolvimento web.
          </p>
        </motion.div>

        {/* CTA */}
        <div className="flex justify-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 font-semibold text-white shadow transition hover:bg-pink-600 hover:shadow-[0_0_14px_#f72585] focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Fale Comigo
            </Link>
          </motion.div>
        </div>
      </WrapperFadeIn>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                               SUBCOMPONENTS                                */
/* -------------------------------------------------------------------------- */

function InfoCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="
        group
        relative
        flex
        flex-col
        justify-center
        rounded-2xl
        bg-gradient-to-br from-[#17172f] to-[#111126]
        border border-white/10
        p-7
        shadow-md
        hover:shadow-[0_0_18px_#f72585]/40
      "
    >
      {/* ÍCONE */}
      <div
        className="
          mb-4
          inline-flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-primary/15
          text-primary
          text-xl
          shadow-[0_0_12px_#f72585]/40
          transition
          group-hover:scale-110
        "
      >
        {icon}
      </div>

      {/* TÍTULO */}
      <h3 className="text-lg font-semibold tracking-wide text-white mb-2">
        {title}
      </h3>

      {/* DESCRIÇÃO */}
      <p className="text-sm leading-relaxed text-neutral-400">
        {desc}
      </p>

      {/* DETALHE DECORATIVO */}
      <span
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-gradient-to-r from-transparent via-primary/40 to-transparent
          opacity-0
          transition
          group-hover:opacity-100
        "
      />
    </motion.div>
  )
}
