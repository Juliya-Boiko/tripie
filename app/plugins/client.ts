import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { AppRouter } from '../../server/appRouter';

export default defineNuxtPlugin(() => {
  // Create a tRPC client for the app
  const client = createTRPCNuxtClient<AppRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc', // tRPC endpoint
      }),
    ],
  })

  return {
    provide: {
      client, // make client available globally as $client
    },
  }
})