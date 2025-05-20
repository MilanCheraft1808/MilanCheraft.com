// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  icon: {
    serverBundle: {
      collections: ['uil', 'mdi', 'uiw']
    }
  },
  vite: {
    plugins: [tailwindcss(),
    ],
  },

  modules: ['@nuxt/icon', '@nuxt/image'],
})