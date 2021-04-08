import React from 'react';
import Layout from '../../components/Layout';
import { useParams } from 'react-router-dom';
import VideoDetail from '../../components/VideoDetail';

function FavoriteDetails({ filter }) {
  const param = useParams('id');

  return (
    <Layout>
      <h2>Favorite Details</h2>
      <VideoDetail videoId={param.id} videoName="name" favorite="true" />
    </Layout>
  );
}

export default FavoriteDetails;
