// src/components/Hero.tsx

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import profileImg from '@/../public/images/img.jpg'

export function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Animação do container */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl"
      >
        {/* Título com sombra neon */}
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_#f72585]">
          Gustavo Pereira dos Santos
        </h1>

        {/* Subtítulo */}
        <p className="text-secondary mt-2 text-lg md:text-xl">
          Desenvolvedor Web
        </p>
        {/* Botões com animação hover neon */}
        <p className="text-sm md:text-base text-white mt-4 tracking-wide flex flex-wrap gap-2 max-w-xl">
  {[
    { name: 'HTML/CSS', color: 'bg-orange-500' },
    { name: 'JavaScript', color: 'bg-yellow-400 text-black' },
    { name: 'TypeScript', color: 'bg-blue-600' },
    { name: 'NextJS', color: 'bg-black text-white' },
    { name: 'ReactJS', color: 'bg-cyan-500' },
    { name: 'PHP', color: 'bg-blue-500' },
    { name: 'Bootstrap', color: 'bg-purple-600' },
    { name: 'Vite', color: 'bg-indigo-500' },
    { name: 'Tailwind', color: 'bg-sky-500' },
  ].map((tech, idx) => (
    <span
      key={idx}
      className={`${tech.color} px-3 py-1 rounded-lg font-semibold shadow-[0_0_12px_#f72585] animate-pulse`}
    >
      {tech.name}
    </span>
  ))}
</p>


<div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="/Currículo - Gustavo Pereira dos Santos.pdf"
    download
    className="bg-primary text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-secondary hover:shadow-[0_0_15px_#f72585]"
  >
    Baixar Currículo
  </a>

  <a
    href="#contato"
    className="bg-secondary text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300 hover:bg-primary hover:shadow-[0_0_15px_#4361ee]"
  >
    Fale Comigo
  </a>
</div>

      </motion.div>

      {/* Imagem com moldura animada e efeito hover */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-12 relative rounded-full border-4 border-primary shadow-[0_0_20px_#f72585] hover:shadow-[0_0_35px_#f72585] transition-shadow duration-500"
      >
        <Image
          src={profileImg}
          alt="Foto de perfil"
          width={200}
          height={200}
          className="rounded-full object-cover"
        />
      </motion.div>
    </section>
  )
}
