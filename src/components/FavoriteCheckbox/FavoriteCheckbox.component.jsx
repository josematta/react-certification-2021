import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { storage } from '../../utils/storage';

const FavoriteCheckbox = function ({ id, snippet, etag, favorite }) {
  const videoId = id.videoId;
  const [fav, setFav] = useState(favorite);
  const toggleFavorite = function ({ target = {} } = {}) {
    const favorites = storage.get('favorites') ?? {};

    if (target.checked) {
      favorites[videoId] = { id: id, snippet: snippet, etag: etag };
      storage.set('favorites', favorites);
    } else {
      delete favorites[videoId];
      storage.set('favorites', favorites);
    }
    setFav(target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          onClick={toggleFavorite}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          name="checkedH"
          checked={fav}
        />
      }
      label="Favorite"
    />
  );
};

export default FavoriteCheckbox;
