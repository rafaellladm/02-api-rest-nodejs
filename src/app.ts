import cookie from '@fastify/cookie'
import fastfy from 'fastify'
import { transactionsRoutes } from './routes/transactions'

export const app = fastfy()

app.register(cookie)

app.register(transactionsRoutes, {
  prefix: 'transactions',
})
