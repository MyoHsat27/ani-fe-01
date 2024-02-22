// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  devtools: { enabled: true },

  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/google-fonts",
  ],

  build: {
    transpile: ["pinia-plugin-persistedstate"],
  },

  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },

  tailwindcss: {
    configPath: "~/tailwind.config.ts",
  },

  css: ["~/assets/css/main.css"],

  googleFonts: {
    families: {
      Nunito: true,
      "Pathway Extreme": true,
      Anta: true,
      preload: true,
    },
  },

  colorMode: {
    preference: "system",
    fallback: "light",
    classSuffix: "",
  },
});
