/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primaryB: "#151925",
        primaryC: "#01EEFF",
        primaryG: "#323846",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        sen: ["Sen", "sans-serif"],

      },
      fontWeight: {
        extrabold: 800,
      },
    },
  },
  plugins: [require("daisyui")],
}
