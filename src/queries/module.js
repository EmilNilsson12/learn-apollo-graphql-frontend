import { gql } from '@apollo/client';

export const GET_MODULE = gql`
  query GetModuleQuery($moduleId: ID!) {
    module(id: $moduleId) {
      id
      title
      content
      videoUrl
      track {
        title
        modules {
          length
          title
          id
        }
      }
    }
  }
`;
