//TODO
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.mjs'
import { resolvers } from './resolvers.mjs'

const server = new ApolloServer({ typeDefs, resolvers })
// console.log(Object.keys(server), ': server keys')

server.listen().then(({ port }) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port: ${port}
    📭  Query at https://studio.apollographql.com/dev
    `)
  }
)
