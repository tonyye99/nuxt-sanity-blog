const colors = require("tailwindcss/colors");
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Nuxt 3 Sanity Blog",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt 3 Sanity Blog",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  modules: [
    "@nuxtjs/sanity",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    configPath: "./tailwind.config.js",
  },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || "2024-03-15",
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || "http://localhost:3333",
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },
});