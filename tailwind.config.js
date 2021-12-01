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
        poppins: ["Poppins", "sans-serif"],
        monts: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
};
