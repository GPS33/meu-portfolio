'use client'

import { useState } from 'react'
import { WrapperFadeIn } from './WrapperFadeIn'
import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'
import emailjs from 'emailjs-com'

export function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [enviando, setEnviando] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setEnviando(true)

    const templateParams = {
      from_name: form.nome,
      from_email: form.email,
      message: form.mensagem,
    }

    emailjs
  .send(
    'service_bn1koxs',       // ID do serviço de e-mail
    'template_wg4xz83',      // ID do template criado
    templateParams,          // Dados preenchidos do formulário
    'qMWYeFxfjlr7pJDMV'       // Public Key (API Key)
  )
  .then(() => {
    alert('Mensagem enviada com sucesso!')
    setForm({ nome: '', email: '', mensagem: '' })
  })
  .catch(() => {
    alert('Ocorreu um erro ao enviar. Tente novamente mais tarde.')
  })
  .finally(() => setEnviando(false))
  }

  return (
    <section id="contato" className="px-6 max-w-xl mx-auto py-20 scroll-mt-20">
      <WrapperFadeIn>
        <h2 className="text-4xl font-bold text-center mb-12 drop-shadow-[0_0_10px_#f72585]">
          Entre em Contato
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 bg-[#151529] p-8 rounded-xl border border-white/10 shadow-lg">
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-gray-200 mb-1">
              Nome
            </label>
            <motion.input
              type="text"
              name="nome"
              id="nome"
              value={form.nome}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full p-3 rounded bg-neutral-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">
              E-mail
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full p-3 rounded bg-neutral-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-gray-200 mb-1">
              Mensagem
            </label>
            <motion.textarea
              name="mensagem"
              id="mensagem"
              rows={5}
              value={form.mensagem}
              onChange={handleChange}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="w-full p-3 rounded bg-neutral-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            ></motion.textarea>
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            disabled={enviando}
            className="bg-primary hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded w-full transition flex items-center justify-center gap-2 disabled:opacity-60"
          >
            <FiSend /> {enviando ? 'Enviando...' : 'Enviar'}
          </motion.button>
        </form>
      </WrapperFadeIn>
    </section>
  )
}
