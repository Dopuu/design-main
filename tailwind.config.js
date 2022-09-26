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
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false
  }
}