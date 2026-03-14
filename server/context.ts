// import type { H3Event } from 'h3'
// import { getCookie } from 'h3'

import { inferAsyncReturnType } from "@trpc/server"

// /**
//  * Creates the tRPC context for each request
//  * - Extracts the `auth_token` cookie
//  * - Verifies the JWT and attaches `userId` to the context
//  *
//  * @param event - H3Event representing the request/response
//  * @returns Context object with the event and optionally userId
//  */
// export async function createContext({ event }: { event: H3Event }) {
//   return {
//     event,
//   }
// }

// /**
//  * Type for tRPC context
//  * - Unwraps the Promise returned by createContext
//  */
// export type Context = Awaited<ReturnType<typeof createContext>>
export const createContext = () => ({})

export type Context = inferAsyncReturnType<typeof createContext>