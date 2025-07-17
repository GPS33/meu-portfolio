'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type WrapperFadeInProps = {
  children: ReactNode
  delay?: number
}

export function WrapperFadeIn({ children, delay = 0 }: WrapperFadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  )
}
