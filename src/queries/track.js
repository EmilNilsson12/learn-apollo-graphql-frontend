import { gql } from '@apollo/client';

export const GET_TRACK = gql`
  query track($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      durationInSeconds
      modulesCount
      description
      numberOfViews
      author {
        photo
        name
        id
      }
      modules {
        length
        title
        id
      }
    }
  }
`;
