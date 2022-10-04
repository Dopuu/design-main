module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {

        inriasans: ["InriaSans"],
        inder: ["Inder"]
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }
      'desktop3': {'max': '1540px'},
      'desktop2': {'max': '1869px', 'min': '1541px'},
      'desktop': '1870px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [require("daisyui"),
  require('tailwind-scrollbar')],

  daisyui: {
    themes: false
  }
}