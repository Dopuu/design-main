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
      'desktop7': {'max': '1195px'},
      'desktop6': {'max': '1220px', 'min': '1196px'},
      'desktop5': {'max': '1256px', 'min': '1221px'},
      'desktop4': {'max': '1400px', 'min': '1257px'},
      'desktop3': {'max': '1540px', 'min': '1401px'},
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