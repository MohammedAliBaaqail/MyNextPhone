import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero': "url('../public/images/hero.jpg')",
      },
      backgroundSize: {
        
        '100000%': '11850%',
        
      },
      backgroundPosition: {
        'zoomed': '32% 8834%',
      },
    },
  },
  plugins: [],
}
export default config
