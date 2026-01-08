'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaPhp,
  FaUnity,
  FaCogs,
  FaDatabase,
  FaFileWord,
  FaCode,
  FaLanguage,
  FaNodeJs,
} from 'react-icons/fa'
import {
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiBootstrap,
  SiVite,
  SiTypescript,
  SiNextdotjs,
  SiDocker,
  SiPostgresql,
} from 'react-icons/si'

import { WrapperFadeIn } from './WrapperFadeIn'

/* -------------------------------------------------------------------------- */
/*                                    DATA                                    */
/* -------------------------------------------------------------------------- */

const WEB_SKILLS = [
  { icon: FaHtml5, label: 'HTML5', color: 'text-orange-500' },
  { icon: FaCss3Alt, label: 'CSS3', color: 'text-blue-500' },
  { icon: SiJavascript, label: 'JavaScript', color: 'text-yellow-400' },
  { icon: SiTypescript, label: 'TypeScript', color: 'text-blue-300' },
  { icon: FaReact, label: 'ReactJS', color: 'text-cyan-400' },
  { icon: SiNextdotjs, label: 'Next.js', color: 'text-white' },
  { icon: SiTailwindcss, label: 'Tailwind CSS', color: 'text-sky-400' },
  { icon: SiBootstrap, label: 'Bootstrap', color: 'text-purple-400' },
  { icon: SiVite, label: 'Vite', color: 'text-violet-400' },
  { icon: FaPhp, label: 'PHP', color: 'text-indigo-400' },
  { icon: FaNodeJs, label: 'Node.js', color: 'text-emerald-400' },
  { icon: SiMysql, label: 'MySQL', color: 'text-blue-300' },
  { icon: SiPostgresql, label: 'PostgreSQL', color: 'text-blue-300' },
  { icon: SiDocker, label: 'Docker', color: 'text-blue-300' },
  { icon: FaGitAlt, label: 'Git', color: 'text-red-500' },
  { icon: FaDatabase, label: 'Banco de Dados', color: 'text-emerald-300' },
]

const OTHER_SKILLS = [
  { icon: FaFileWord, label: 'Pacote Office', color: 'text-blue-500' },
  { icon: FaCode, label: 'Linguagem C', color: 'text-green-300' },
  { icon: FaUnity, label: 'Unity / C#', color: 'text-white' },
  { icon: FaCogs, label: 'Manutenção & Hardware', color: 'text-slate-300' },
  { icon: FaLanguage, label: 'Inglês', color: 'text-yellow-300' },
]

/* -------------------------------------------------------------------------- */
/*                                  COMPONENT                                 */
/* -------------------------------------------------------------------------- */

export function Conhecimentos() {
  return (
    <section
      id="conhecimentos"
      className="scroll-mt-24 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28"
      >
      <WrapperFadeIn>
        <header className="mb-20 text-center">
          <h2 className="text-4xl font-bold tracking-tight drop-shadow-[0_0_10px_#f72585]">
            Conhecimentos
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Tecnologias, ferramentas e competências que utilizo no desenvolvimento
            de soluções modernas, eficientes e bem estruturadas.
          </p>
        </header>

        <SkillSection title="Desenvolvimento Web" skills={WEB_SKILLS} />
        <SkillSection title="Outras Competências" skills={OTHER_SKILLS} />
      </WrapperFadeIn>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                               SUBCOMPONENTS                                */
/* -------------------------------------------------------------------------- */

function SkillSection({
  title,
  skills,
}: {
  title: string
  skills: {
    icon: React.ElementType
    label: string
    color: string
  }[]
}) {
  return (
    <section className="mb-20">
      <h3 className="text-2xl font-semibold mb-8 border-b border-white/10 pb-2 w-fit">
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map(({ icon: Icon, label, color }) => (
          <Skill key={label} icon={<Icon />} label={label} color={color} />
        ))}
      </div>
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
      whileHover={{ scale: 1.08 }}
      transition={{ type: 'spring', stiffness: 220, damping: 15 }}
      className="group bg-[#151529] hover:bg-[#1e1b3a] p-5 rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/5 shadow transition-all duration-300 hover:shadow-[0_0_14px_#f72585]"
    >
      <div
        className={`text-4xl ${color} transition-transform duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      <span className="text-sm font-medium text-gray-200 text-center">
        {label}
      </span>
    </motion.div>
  )
}
