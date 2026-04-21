import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1F3A',
        'primary-mid': '#1E3A5F',
        accent: '#C8963E',
        'accent-dark': '#A87830',
        bg: '#F5F3EE',
        surface: '#FFFFFF',
        text: '#0D1B2A',
        'text-muted': '#4A6375',
        border: '#E2D9CC',
        whatsapp: '#25D366',
        'whatsapp-dark': '#1fba58',
      },
      fontFamily: {
        lora: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(11,31,58,0.08)',
        'card-hover': '0 4px 24px 0 rgba(11,31,58,0.13)',
        float: '0 8px 32px 0 rgba(11,31,58,0.22)',
      },
    },
  },
  plugins: [],
}

export default config
