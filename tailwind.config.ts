// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{md,mdx}',           // si usas MDX
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],  // tu fuente principal
      },
      colors: {
        moyblue: {
          DEFAULT: 'var(--color-moyblue)',
          90:      'var(--color-moyblue-90)',
          80:      'var(--color-moyblue-80)',
          // …etc…
        },
      },
    },
  },
  plugins: [],
}

export default config
