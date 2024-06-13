/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': { max: '640px' },
      // => @media (max-width: 640px) { ... }

      'lg': { max:'1024px' },
      // => @media (max-width: 1024px) { ... }
    },
    extend: {
      backgroundImage:{
        'hero': "url(/src/assets/Uni_9.jpg)"
      },
    },
  },
  plugins: [],
}

