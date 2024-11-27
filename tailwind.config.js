import forms from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0EA5E9',
          dark: '#0284C7',
          light: '#38BDF8'
        },
        secondary: {
          DEFAULT: '#64748B',
          dark: '#475569',
          light: '#94A3B8'
        }
      }
    }
  },
  plugins: [forms]
}
