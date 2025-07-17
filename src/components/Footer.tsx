'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowUp } from 'react-icons/fi'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-gray-400 border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 items-center gap-6">

        {/* Créditos */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-center md:text-left"
        >
          © {new Date().getFullYear()} Gustavo – Todos os direitos reservados
        </motion.p>

        {/* Espaço vazio (mantém o centro livre) */}
        <div className="hidden md:block" />

        {/* Redes sociais alinhadas à direita */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center md:justify-start gap-6"
        >
          <Link
            href="https://github.com/seu-usuario"
            target="_blank"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/seu-usuario"
            target="_blank"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </Link>
        </motion.div>
      </div>

      
       
    </footer>
  )
}
