// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  build: {
    transpile: ['@trpc/server', 'trpc-nuxt/server'],
  },
  nitro: {
    preset: 'vercel-edge', // або 'vercel-node' якщо потрібен node lambda
    serveStatic: true
  },
  typescript: {
    shim: false // для правильних типів TS, не треба імпортувати augments
  }
})
