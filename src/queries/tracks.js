import { gql } from '@apollo/client';

export const TRACKS = gql`
  query GetTracksForHomeQuery {
    tracksForHome {
      durationInSeconds
      thumbnail
      title
      id
      modulesCount
      numberOfViews
      author {
        photo
        name
        id
      }
    }
  }
`;
