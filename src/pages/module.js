import { Layout, ModuleDetail, QueryResult } from '../components';
import { useQuery } from '@apollo/client';
import { GET_MODULE } from '../queries/module';

const Module = ({ moduleId }) => {
  const { data, loading, error } = useQuery(GET_MODULE, {
    variables: { moduleId },
  });
  console.log('data: ', data);
  console.log('error: ', error);
  return (
    <Layout>
      <QueryResult data={data} loading={loading} error={error}>
        {/* <p>{data?.module?.title}</p> */}
        <ModuleDetail module={data?.module} track={data?.module?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Module;
