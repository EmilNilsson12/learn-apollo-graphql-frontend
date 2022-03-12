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
  Mutation: {
    incrementTrackViews: async (_, { id }, { dataSources }) => {
      const track = await dataSources.incrementTrackViews(id);
      return {
        code: 200,
        success: true,
        message: `Successfully invremented views for track with id: "${id}"`,
        track,
      };
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({ id }, _, { dataSources }) => {
      return dataSources.trackAPI.getTrackModules(id);
    },
  },
};

export { resolvers };
