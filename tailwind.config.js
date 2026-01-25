/** @type {import('tailwindcss').Config} */
export default {
  important: true, // 👈 THIS IS THE FIX
  content: ["./Frontend/index.html", "./Frontend/src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
