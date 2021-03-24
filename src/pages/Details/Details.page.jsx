import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
function Details({ filter }) {
  const param = useParams('id');

  return <Layout>Details {param.id}</Layout>;
}

export default Details;
