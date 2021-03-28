import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Video from '../../components/Video';
import { storage } from '../../utils/storage';
import { useParams } from 'react-router-dom';
import { youtube } from '../../api/youtube';

function Favorites({ filter }) {
  const params = useParams('criteria');
  const favorites = storage.get('favorites');
  const [visibleItems, setVisibleItems] = useState([]);
  useEffect(() => {
    const response = youtube
      .search(params.criteria)
      .then((data) => {
        setVisibleItems(data.data.items);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Layout>
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
