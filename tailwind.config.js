/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
      colors: {
        white: '#fff',
        black: '#273029',
        soft_green: {
          DEFAULT: '#85c7dc',
          secondary: '#f3f9fb',
        },
        grey: {
          DEFAULT: '#888',
          secondary: '#f8f8f8',
        },
        orange: '#f2994a',
        outline: '#f1f1f1',
        pink: '#f3d1d7',
        body: '#e5e5e5',
      },
      extend: {
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
        },
      },
      backgroundImage: {
        hero: 'url(/hero/bg.png)',
        hero2: 'url(/hero/Frontap1.jpeg)',
      },
    },
    plugins: [require('tailwindcss-animate')],
  },
}
