import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  content: [
    "components/**/*.vue",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "plugins/**/*.js",
    "nuxt.config.js",
  ],
  theme: {
    extend: {
      colors: {
        mirage: {
          DEFAULT: "#151F2C",
          50: "#6488B5",
          100: "#5C81B1",
          200: "#4F74A5",
          300: "#466894",
          400: "#3E5C82",
          500: "#365071",
          600: "#2E4360",
          700: "#25374F",
          800: "#1D2B3D",
          900: "#151F2C",
          950: "#0C1219",
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["myanmar"],
    },
  },
  plugins: [],
};
