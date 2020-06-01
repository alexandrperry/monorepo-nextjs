import Layout from 'components/Layout';
import { Button } from 'components-library';

const IndexPage = () => {
  return (
    <Layout>
      <Button onClick={() => alert('click')}>Click</Button>
    </Layout>
  );
};

export default IndexPage;
