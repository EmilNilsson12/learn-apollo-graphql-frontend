//TODO
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.mjs'

const server = new ApolloServer({ typeDefs })
// console.log(Object.keys(server), ': server keys')

server.listen().then(({ port }) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port: ${port}
    📭  Query at https://studio.apollographql.com/dev
    `)
  }
)
