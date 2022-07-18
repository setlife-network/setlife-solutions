import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

import schema from './graphql/schema'
import { db } from './models'

const cors = Cors()

const apolloServer = new ApolloServer({
  schema,
  context: () => ({
    ...db
  }),
})
const startServer = apolloServer.start()

export default cors(async (req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return false;
  }
  await startServer
  await apolloServer.createHandler({
    path: '/api/v1',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false
  }
}