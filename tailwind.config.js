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
    },
  },
  plugins: [require("daisyui")],
};
