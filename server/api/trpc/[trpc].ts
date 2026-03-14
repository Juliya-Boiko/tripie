import { createNuxtApiHandler } from 'trpc-nuxt/server'
import { appRouter } from '../../appRouter'
import { createContext as trpcCreateContext } from '../../context'
import type { H3Event } from 'h3'

/**
 * Nuxt API handler for tRPC
 * - Uses `appRouter` to handle all procedures
 * - Creates context for each request (extracts userId from auth token)
 */
export default createNuxtApiHandler({
  router: appRouter,
  createContext: async (event: H3Event) => {
    // `event` is the H3Event object for the request
    return trpcCreateContext({ event })
  },
})