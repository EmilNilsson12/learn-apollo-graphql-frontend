// resolver structure
// key: (parent, args, context, info) => {},
// parent desctructured
// args omitted and denoted with __
// context destructured
// info omitted completely

const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    track: (_, { id }, { dataSources }) => {
      return dataSources.trackAPI.getTrack(id);
    },
  },
  Track: {
    author: ({ authorId }, __, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, __, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

export { resolvers };
