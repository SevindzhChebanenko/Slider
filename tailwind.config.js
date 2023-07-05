/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      backgroundImage: {
        bgImage: "url('/public/bg.svg')",
      },
      colors: {
        darkBlue: "rgba(0, 48, 95, 1)",
        backg: "rgba(241, 234, 224, 1)",
        bgBtn: "rgba(186, 159, 103, 1)",
      },
    },
    plugins: [],
  },
};
