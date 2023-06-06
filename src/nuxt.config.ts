// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/appbase.css',
  },
  css: [
    '~/assets/css/orugaflow.css',
  ],
})
