import { initTRPC } from '@trpc/server'
import type { Context } from './context'

// Initialize tRPC with context type
export const t = initTRPC.context<Context>().create()


// Basic procedure with no middleware (public)
export const publicProcedure = t.procedure
