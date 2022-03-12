import { gql, useQuery } from '@apollo/client';
import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';

export const GET_TRACK = gql`
  query track($trackId: ID!) {
    track(id: $trackId) {
      id
      title
      thumbnail
      length
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

const Track = ({ trackId }) => {
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <Layout>
      <QueryResult data={data} loading={loading} error={error}>
        <p>Success</p>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export { Track };
