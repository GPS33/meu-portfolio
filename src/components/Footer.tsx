'use client'

import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'
import { motion } from 'framer-motion'

export function Footer() {
  return (
    <footer className="relative bg-neutral-950 text-gray-400 border-t border-white/10 mt-32">
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center gap-6">

        {/* Texto de direitos autorais */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-center"
        >
          © {new Date().getFullYear()} Gustavo – Todos os direitos reservados
        </motion.p>

        {/* Ícones de redes sociais (embaixo dos direitos autorais) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center gap-6"
        >
          <Link
            href="https://github.com/GPS33"
            target="_blank"
            className="hover:text-white transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gustavo-pereira-dos-santos-9b7640352/"
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
