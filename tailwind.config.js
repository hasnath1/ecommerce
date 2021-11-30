const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @type {import("tailwindcss")}
 */

module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./components/**/**/*.{js,ts,jsx,tsx}",
  ],
  darkTheme: false,
  theme: {
    extend: {
      fontFamily: {
        pop: ["poppins"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        "@font-face": {
          fontFamily: "poppins",
          src: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap",
        },
      });
    }),
  ],
};
