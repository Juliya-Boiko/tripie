import { t, publicProcedure } from '../trpc'

export const userRouter = t.router({
  test: publicProcedure.query(async () => {
    return 'Test SUCCESS!!!!!'
  }),
})