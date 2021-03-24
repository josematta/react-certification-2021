import React from 'react';
import Layout from '../../components/Layout';
import Video from '../../components/Video';
import { storage } from '../../utils/storage';

function Favorites({ filter }) {
  const favorites = storage.get('favorites');

  const visibleItems = [];

  for (var propertyName in favorites) {
    visibleItems.push(favorites[propertyName]);
  }

  return (
    <Layout>
      <h2>Favorites</h2>
      {visibleItems.map(({ etag, snippet, id }) => {
        const favorite = favorites ? (favorites[id.videoId] ? true : false) : false;

        return snippet ? (
          <Video id={id} key={etag} etag={etag} snippet={snippet} favorite={favorite} />
        ) : (
          void 0
        );
      })}
    </Layout>
  );
}

export default Favorites;
