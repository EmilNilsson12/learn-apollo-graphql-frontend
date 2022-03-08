//TODO
import { ApolloServer } from 'apollo-server'
import { typeDefs } from './schema.mjs'

const mocks = {
  Track: () => ({
    id: () => 'track_01',
    title: () => 'Astro Kitty, Space Explorer',
    author: () => {
      return {
        name: 'Grumpy Cat',
        photo:
          'https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg',
      };
    },
    thumbnail: () =>
      'https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg',
    length: () => 1210,
    modulesCount: () => 6,
  }),
}

const server = new ApolloServer({ typeDefs, mocks: mocks })
// console.log(Object.keys(server), ': server keys')

server.listen().then(({ port }) => {
    console.log(`
    🚀  Server is running!
    🔉  Listening on port: ${port}
    📭  Query at https://studio.apollographql.com/dev
    `)
  }
)