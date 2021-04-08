import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import VideoDetail from '../../components/VideoDetail';

function Details({ filter }) {
  const param = useParams('id');

  return (
    <Layout>
      <h2>Details</h2>
      <VideoDetail videoId={param.id} videoName="name" />
    </Layout>
  );
}

export default Details;
