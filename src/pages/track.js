import { Layout, QueryResult } from '../components';
import TrackDetail from '../components/track-detail';
import { useQuery } from '@apollo/client';
import { GET_TRACK } from '../queries/track';

const Track = ({ trackId }) => {
  const { data, loading, error } = useQuery(GET_TRACK, {
    variables: { trackId },
  });
  return (
    <Layout>
      <QueryResult data={data} loading={loading} error={error}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export { Track };
