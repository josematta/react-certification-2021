import React, { useState } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { storage } from '../../utils/storage';

const FavoriteCheckbox = function ({ id, favorite }) {
  const [fav, setFav] = useState(favorite);
  const toggleFavorite = function (event) {
    const favorites = storage.get('favorites') ?? {};

    if (event.target.checked) {
      favorites[id] = id;
      storage.set('favorites', favorites);
    } else {
      delete favorites[id];
      storage.set('favorites', favorites);
    }
    setFav(event.target.checked);
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