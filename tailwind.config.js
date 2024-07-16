/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#126321",
        secondary: "bg-gray-800",
      },
    },
  },
  plugins: [require("daisyui")],
};
