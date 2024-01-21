/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200': '50rem',
      },
      colors: {
        'selector': 'rgba(var(--color-selector), <alpha-value>)',
        'selector-hover': 'rgba(var(--color-selector-hover), <alpha-value>)',
        'color-bg': 'rgba(var(--color-bg), <alpha-value>)'
      },
      grayscale: {
        '80': '80%'
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(8rem, 1fr))',
        'autoo': '1fr repeat(3, 1.5fr)',
        'auto-4': 'minmax(16rem ,1fr) repeat(4, 1.5fr)',

      },
      gridTemplateRows: {
        '2-sm': 'minmax(1fr, 1fr)'
      },
      fontSize: {
        'inherit': 'inherit'
      }
    },
  },
  plugins: [],
}

