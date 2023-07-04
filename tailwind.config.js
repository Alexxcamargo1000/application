/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: 'var(--font-inter)'
      },
      maxHeight: {
        category: "calc(100vh - (10rem))",
        list: "calc(100vh - (22rem))",
      },
      minHeight: {
        content: 'calc(100vh - (3rem))'
      },

      animation: {
        fade: 'fade .3s'
      },

      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/forms'),
  ],
}
