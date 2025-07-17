// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Rosa neon vibrante
        primary: '#f72585',

        // Azul elétrico suave
        secondary: '#4361ee',

        // Fundo escuro profundo (quase preto com toque roxo)
        background: '#0b0f1a',
      },
    },
  },
  plugins: [],
}

export default config
