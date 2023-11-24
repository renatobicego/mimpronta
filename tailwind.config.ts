import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'paper-texture': 'url("/papel.jpg")',
        'magnifier-input': 'url("/icons/magnifier.png")',
      },
      colors: {
        'azul': '#004991',
        'negro': '#1F1F1F',
        'rosa': '#D5B8D6',
        'amarillo': '#D2DA54',
        'celeste': '#2D7DAC',
      },
      fontFamily: {
        'title': ['var(--font-montAlter)'],
        'text': ['var(--font-mont)']
      },
      screens: {
        'xsm': '350px',
        '3xl': '1720px'
      },
      backgroundPosition: {
        'left-6': 'center left 1.5rem',
      }
    },
  },
  plugins: [],
}
export default config
