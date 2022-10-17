/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{html,js}'
  ],
  theme: {
    screens: {
      'xx': '11.25rem',
      'xs': '23.5rem',
      'sm': '40rem',
      'md': '48rem',
      'lg': '64rem',
      'xl': '80rem',
      '2xl': '96rem',
    },
    extend: {
      colors: {
        primary: 'rgb(var(--clr-primary) / <alpha-value>)',
        secondary: 'rgb(var(--clr-secondary) / <alpha-value>)'
      },
      keyframes: {
        'up-and-down': {
          '0%': { top: '0.25rem', transform: 'translateY(0)' },
          '100%': { top: 'calc(100% - 0.25rem)', transform: 'translateY(-100%)' },
        }
      },
      animation: {
        'up-and-down':
          'up-and-down 1500ms cubic-bezier(0.78, 0.16, 0.26, 0.73) infinite alternate'
      }
    },
  },
  plugins: [],
};
