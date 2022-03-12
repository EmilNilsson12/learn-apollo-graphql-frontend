// resolver structure
// key: (parent, args, context, info) => {},
// parent desctructured
// args omitted and denoted with __
// context destructured
// info omitted completely

const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) =>
      dataSources.trackAPI.getTracksForHome(),
    track: (_, { id }, { dataSources }) => {
      dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) =>
      dataSources.trackAPI.getAuthor(authorId),
  },
};

export { resolvers };
