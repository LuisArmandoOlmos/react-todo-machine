/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    extend: {
      colors: {
        "main-white": "#FAFAFA",
        "main-black": "#202329",
        "main-dark": "#1E1E1F",
        "main-gray": "#A5A5A5",
        "main-cian": "#61DAFA;",
        "main-green": "#4caf50",
        "main-darkGreen": "#082023"
      },
    },
  },
  plugins: [],
};
