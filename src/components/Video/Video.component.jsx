import React from 'react';
import { Container, Image, InfoContainer, Title, Description } from './styled';
import FavoriteCheckbox from '../FavoriteCheckbox';
import { useHistory } from 'react-router-dom';
import { storage } from '../../utils/storage';

function Video({ etag, snippet, id, favorite, route }) {
  const history = useHistory();
  const updateVideoDetail = (e, { route, id }) => {
    const cache = storage.get('cache') ?? {};

    cache[id.videoId] = { id: id, snippet: snippet, etag: etag };
    storage.set('cache', cache);

    const currentRoute = route ?? 'details';
    e.preventDefault();

    history.push(`/${currentRoute}/${id.videoId}`);
  };

  return (
    <Container key={etag}>
      <Image
        src={snippet.thumbnails.medium.url}
        width={snippet.thumbnails.medium.width}
        height={snippet.thumbnails.medium.height}
        alt="image"
      />
      <InfoContainer>
        <Title
          onClick={(e) =>
            updateVideoDetail(e, { id: id, name: snippet.title, route: route })
          }
        >
          {snippet.title}
        </Title>
        <FavoriteCheckbox
          favorite={favorite}
          etag={etag}
          snippet={snippet}
          id={id}
        ></FavoriteCheckbox>
        <Description>{snippet.description}</Description>
      </InfoContainer>
    </Container>
  );
}

export default Video;
