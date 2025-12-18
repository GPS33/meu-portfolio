'use client'

import {
  FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaPhp,
  FaUnity, FaAutoprefixer, FaCogs, FaDatabase, FaFileWord, FaCode, FaLanguage,
  FaNodeJs
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMysql, SiJavascript, SiBootstrap, SiVite, SiTypescript, SiNextdotjs,
  SiDocker
} from 'react-icons/si'
import { WrapperFadeIn } from './WrapperFadeIn'
import { motion } from 'framer-motion'

export function Conhecimentos() {
  return (
    <section id="conhecimentos" className="px-6 max-w-7xl mx-auto py-20 scroll-mt-20">
      <WrapperFadeIn>
        <h2 className="text-4xl font-bold text-center mb-16 drop-shadow-[0_0_10px_#f72585]">
          Conhecimentos
        </h2>

        {/* Desenvolvimento Web */}
        <div className="mb-14">
          <h3 className="text-2xl font-semibold mb-6 text-primary border-b border-white/10 pb-2 w-fit">
            Desenvolvimento Web
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <Skill icon={<FaHtml5 />} label="HTML5" color="text-orange-500" />
            <Skill icon={<FaCss3Alt />} label="CSS3" color="text-blue-500" />
            <Skill icon={<SiJavascript />} label="JavaScript" color="text-yellow-400" />
            <Skill icon={<SiTypescript />} label="TypeScript" color="text-blue-300" />
            <Skill icon={<FaReact />} label="ReactJS" color="text-cyan-400" />
            <Skill icon={<SiNextdotjs />} label="Next.js" color="text-white" />
            <Skill icon={<SiTailwindcss />} label="Tailwind" color="text-sky-400" />
            <Skill icon={<SiBootstrap />} label="Bootstrap" color="text-purple-400" />
            <Skill icon={<SiVite />} label="Vite" color="text-violet-400" />
            <Skill icon={<FaPhp />} label="PHP" color="text-indigo-400" />
            <Skill icon={<FaDatabase />} label="Banco de Dados" color="text-emerald-400" />
            <Skill icon={<FaNodeJs />} label="Node" color="text-emerald-400" />
            <Skill icon={<SiMysql />} label="MySQL" color="text-blue-300" />
            <Skill icon={<SiDocker />} label="Docker" color="text-blue-300" />
            <Skill icon={<FaGitAlt />} label="Git" color="text-red-500" />
          </div>
        </div>

        {/* Outras Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-primary border-b border-white/10 pb-2 w-fit">
            Outras Competências
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            <Skill icon={<FaFileWord/>} label="Pacote Office" color="text-blue-500" />
            <Skill icon={<FaCode />} label="Linguagem C" color="text-green-300" />
            <Skill icon={<FaCogs />} label="Manutenção / Hardware" color="text-slate-300" />
            <Skill icon={<FaUnity />} label="Unity / C#" color="text-white" />
            <Skill icon={<FaAutoprefixer />} label="AutoCAD" color="text-orange-400" />
            <Skill icon={<FaLanguage />} label="Inglês" color="text-yellow-300" />
          </div>
        </div>
      </WrapperFadeIn>
    </section>
  )
}

function Skill({
  icon,
  label,
  color,
}: {
  icon: React.ReactNode
  label: string
  color: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, rotate: 1 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className={`bg-[#151529] hover:bg-[#1e1b3a] p-5 rounded-xl flex flex-col items-center justify-center gap-3 shadow border border-white/5 transition duration-300 hover:shadow-[0_0_12px_#f72585]`}
    >
      <div className={`text-4xl ${color}`}>{icon}</div>
      <p className="text-sm font-medium text-gray-200">{label}</p>
    </motion.div>
  )
}
