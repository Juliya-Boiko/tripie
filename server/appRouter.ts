import { t } from './trpc'
import { userRouter } from './routers/user'

/**
 * Main tRPC application router
 * Combines all sub-routers (user, pet, etc.) into a single entry point
 */
export const appRouter = t.router({
  user: userRouter, // Routes related to user management
})

/**
 * Type definition for the entire tRPC router
 * Useful for typing clients or procedures
 */
export type AppRouter = typeof appRouter