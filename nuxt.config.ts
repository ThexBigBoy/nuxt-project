// https://nuxt.com/docs/api/configuration/nuxt-config
// export default defineNuxtConfig({
//   compatibilityDate: '2025-07-15',
//   devtools: { enabled: true },
//   modules: ['@nuxt/ui']
// })

// nuxt.config.ts
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  app: {
    baseURL: '/nuxt-project/',
    head: {
      title: 'Match Tracker',
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    }
  },
  vite: {
    plugins: [svgLoader()],
  },
})






