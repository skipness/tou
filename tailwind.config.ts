import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        gold: '#ffd700',
        lightgrey: '#d3d3d3',
        secondary: '#1e1e1e'
      },
      fontSize: {
        '9xl': '7rem',
        '10xl': '8rem',
        '14xl': '12rem',
      },
    },
  },
  plugins: [],
}
export default config
