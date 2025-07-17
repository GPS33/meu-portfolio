'use client'

import Image from 'next/image'
import { WrapperFadeIn } from './WrapperFadeIn'
import { motion } from 'framer-motion'
import { FaLink } from 'react-icons/fa'

interface ProjetoProps {
  title: string
  description: string
  imageUrl: string
  link?: string
}

const projetos: ProjetoProps[] = [
  {
    title: 'Gerador de Senha',
    description: 'Um site simples que gera uma senha aleatória com o número de caracteres desejado.',
    imageUrl: '/images/projeto1.png',
    link: 'https://gerador-de-senha-beta.vercel.app/'
  },
  {
    title: 'Testes JavaScript',
    description: 'Executa algumas funções utilizando JavaScript',
    imageUrl: '/images/projeto2.png',
    link: 'https://teste-javascript.vercel.app/'
  },
  {
    title: 'Projeto POMME',
    description: 'Projeto feito em uma hackaton do IFSul, um site onde os usuários podem comprar produtos orgânicos.',
    imageUrl: '/images/projeto.png',
    link: 'https://pomme-projeto-hackaton.vercel.app/'
  },
  // Adicione mais projetos aqui...
]

export function Projetos() {
  return (
    <section id="projetos" className="px-6 max-w-7xl mx-auto py-20 scroll-mt-20">
      <WrapperFadeIn>
        <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-[0_0_10px_#f72585]">
          Projetos
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projetos.map((projeto, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#151529] border border-white/10 rounded-xl overflow-hidden shadow-lg hover:shadow-[0_0_15px_#f72585] transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={projeto.imageUrl}
                  alt={projeto.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-primary drop-shadow-sm">{projeto.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{projeto.description}</p>
                {projeto.link && (
                  <a
                    href={projeto.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition"
                  >
                    <FaLink /> Ver projeto
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </WrapperFadeIn>
    </section>
  )
}
