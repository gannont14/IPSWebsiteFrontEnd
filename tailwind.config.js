/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#126321",
        secondary: "#1f2937",
      },
      screens: {
        "md": "860px"
      }
    },
  },
  plugins: [require("daisyui")],
  daisui: {
    themes: ["light"],
  },
};
