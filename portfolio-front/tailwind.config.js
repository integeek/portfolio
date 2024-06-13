/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: { colors: {
      "primaryB": "#151925",
      "primaryC": "#01EEFF",


    },},
  },
  plugins: [require("daisyui"),],
}

