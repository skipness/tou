import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#ffd700',
        lightgrey: '#d3d3d3',
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
      },
    },
  },
  plugins: [],
}
export default config
