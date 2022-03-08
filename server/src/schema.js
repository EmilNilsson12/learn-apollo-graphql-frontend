import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }

"A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`

export { typeDefs }
