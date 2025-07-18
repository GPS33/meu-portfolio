'use client'

import { FaHome, FaUserAlt, FaTools, FaFolderOpen, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Link from 'next/link'

// Ícones e seções da navegação
const navItems = [
  { href: '#inicio', icon: <FaHome />, label: 'Início' },
  { href: '#sobre', icon: <FaUserAlt />, label: 'Sobre' },
  { href: '#conhecimentos', icon: <FaTools />, label: 'Conhecimentos' },
  { href: '#projetos', icon: <FaFolderOpen />, label: 'Projetos' },
  { href: '#contato', icon: <FaEnvelope />, label: 'Contato' },
]

export function Navbar() {
  return (
    <>
      {/* Barra de navegação inferior central com fundo transparente e borda neon */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex gap-4 px-6 py-3 rounded-full shadow-[0_0_10px_#f72585] border border-pink-500
                     bg-[#1e1b3a]/60 backdrop-blur-5px"
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2 }}
              className="text-white text-xl cursor-pointer hover:text-pink-400 transition duration-300"
            >
              <Link href={item.href} aria-label={item.label}>
                {item.icon}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Botão flutuante para voltar ao topo, permanece como está */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link href="#inicio" aria-label="Voltar ao topo">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-12 h-12 rounded-xl bg-primary border border-pink-500
                       shadow-[0_0_12px_#f72585] text-white font-bold text-xl
                       flex items-center justify-center hover:bg-pink-600
                       hover:shadow-[0_0_20px_#f72585] transition-all duration-300"
          >
            ↑
          </motion.button>
        </Link>
      </motion.div>
    </>
  )
}
