import { gql } from '@apollo/client';

export const TRACKS = gql`
  query ExampleQuery {
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
