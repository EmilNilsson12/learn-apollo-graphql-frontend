const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => dataSources.trackAPI.getTracksForHome()
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) => dataSources.trackAPI.getAuthor(authorId)
  }
};

export { resolvers }