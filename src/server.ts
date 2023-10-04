import fastfy from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastfy()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
