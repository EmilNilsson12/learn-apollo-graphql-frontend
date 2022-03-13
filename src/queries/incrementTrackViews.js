import { gql } from '@apollo/client';

export const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViewMutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code
      success
      message
      track {
        numberOfViews
        id
      }
    }
  }
`;
