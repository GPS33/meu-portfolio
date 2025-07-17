'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FaGraduationCap, FaTools, FaDraftingCompass, FaLaptop } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { WrapperFadeIn } from './WrapperFadeIn'

export function Sobre() {
  return (
    <section id="sobre" className="px-6 max-w-7xl mx-auto py-20 scroll-mt-20">
      <WrapperFadeIn>
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_#f72585]">Sobre Mim</h2>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Imagem com efeito sutil ao passar o mouse */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative w-72 h-72 rounded-xl overflow-hidden shadow-[0_0_20px_#f72585] border border-primary"
          >
            <Image
              src="/images/eu.jpg"
              alt="Minha foto"
              fill
              className="object-cover h-[130%] top-[-15%]"
              priority
            />
          </motion.div>

          {/* Conteúdo à direita */}
          <div className="flex-1 space-y-8">
            {/* Grid de cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card icon={<FaGraduationCap size={28} />} title="Técnico em Informática" desc="Formado no IFSul Campus Charqueadas (2018–2022)" />
              <Card icon={<FaLaptop size={28} />} title="Desenvolvedor Web" desc="Experiência com React, Vite, Tailwind, PHP, MySQL" />
              <Card icon={<FaDraftingCompass size={28} />} title="Desenhista Técnico – Topografia" desc="Agro Engenharia (set/2022 – abr/2024)" />
              <Card icon={<FaTools size={28} />} title="Manutenção de Computadores" desc="Limpeza, formatação, remoção de vírus" />
            </div>

            {/* Texto de apresentação */}
            <p className="text-gray-300 leading-relaxed">
              Sou desenvolvedor web e técnico em informática. Trabalhei como desenhista técnico na Agro Engenharia,
              atuei de forma autônoma com manutenção de computadores e trabalhei na empresa Making Publicidade
              como desenvolvedor web. Atualmente curso Análise e Desenvolvimento de Sistemas na UniBF.
            </p>

            {/* Botão de contato com animação */}
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                href="#contato"
                className="inline-block bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-medium transition shadow hover:shadow-[0_0_10px_#f72585]"
              >
                Fale Comigo
              </Link>
            </motion.div>
          </div>
        </div>
      </WrapperFadeIn>
    </section>
  )
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-[#151529] p-6 rounded-lg shadow-md border border-white/5 flex flex-col items-center text-center hover:shadow-[0_0_12px_#f72585] transition"
    >
      <div className="text-primary mb-3 text-2xl">{icon}</div>
      <h5 className="font-semibold text-lg mb-1">{title}</h5>
      <small className="text-gray-400">{desc}</small>
    </motion.div>
  )
}
