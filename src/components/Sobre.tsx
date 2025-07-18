'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap, FaTools, FaDraftingCompass, FaLaptop } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { WrapperFadeIn } from './WrapperFadeIn'

export function Sobre() {
  return (
    <section
      id="sobre"
      className="px-6 max-w-7xl mx-auto py-20 scroll-mt-20"
    >
      <WrapperFadeIn>
        {/* Título da seção */}
        <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-[0_0_10px_#f72585] text-white">
          Sobre Mim
        </h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Imagem do perfil com animação sutil no hover */}
          <motion.div
            whileHover={{ scale: 1.12, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative w-72 h-90 rounded-xl overflow-hidden shadow-[0_0_20px_#f72585] border border-primary"
          >
            <Image
              src="/images/eu.jpg"
              alt="Foto de perfil de Gustavo"
              fill
              className="object-cover h-[130%] top-[-15%]"
              priority
            />
          </motion.div>

          {/* Conteúdo textual e cards à direita */}
          <div className="flex-1 space-y-10">
            {/* Cards com formação e experiência */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card
                icon={<FaGraduationCap size={28} />}
                title="Técnico em Informática"
                desc="Formado no IFSul Campus Charqueadas (2018–2022)"
              />
              <Card
                icon={<FaLaptop size={28} />}
                title="Desenvolvedor Web"
                desc="Experiência com HTML/CSS, JavaScript, TypeScript, NextJS, ReactJS, Bootstrap, Vite e Tailwind"
              />
              <Card
                icon={<FaDraftingCompass size={28} />}
                title="Desenhista Técnico – Topografia"
                desc="Trabalhando na empresa Agro Engenharia (set/2022 – abr/2024)"
              />
              <Card
                icon={<FaTools size={28} />}
                title="Manutenção de Computadores"
                desc="Limpeza, formatação e remoção de vírus"
              />
            </div>

            {/* Texto de apresentação com destaque neon rosa */}
<div className="hover:ring-1 hover:ring-[#f72585]/60 hover:scale-[1.01] transition-all duration-300 ease-in-out rounded-xl">
  <p className="text-neutral-300 text-justify leading-relaxed text-base md:text-lg px-4 py-4
    backdrop-blur-sm bg-white/5 rounded-xl shadow-[0_0_12px_#f72585]/20
    transition-opacity duration-700 ease-in-out animate-fade-in">
    Desenvolvedor web e técnico em informática, trabalhei na empresa Agro Engenharia como desenhista técnico de topografia e na empresa Making Publicidade como desenvolvedor web. Também atuei de forma autônoma com manutenção de computadores. Atualmente curso Análise e Desenvolvimento de Sistemas pela UniBF e sigo aprofundando meus conhecimentos em tecnologias modernas do desenvolvimento web.
  </p>
</div>


            {/* Botão "Fale Comigo" */}
            <div className="flex">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 250 }}
              >
                <Link
                  href="#contato"
                  className="bg-primary hover:bg-pink-600 text-white px-6 py-3 rounded-full font-semibold transition shadow hover:shadow-[0_0_12px_#f72585] focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  Fale Comigo
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </WrapperFadeIn>
    </section>
  )
}

// Componente reutilizável de card com ícone, título e descrição
function Card({
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
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-[#151529] p-6 rounded-lg shadow-md border border-white/5 flex flex-col items-center text-center hover:shadow-[0_0_12px_#f72585] transition"
    >
      <div className="text-primary mb-3 text-2xl">{icon}</div>
      <h5 className="font-semibold text-lg mb-1 text-white">{title}</h5>
      <small className="text-gray-400">{desc}</small>
    </motion.div>
  )
}
