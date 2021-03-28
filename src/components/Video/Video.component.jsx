import React from 'react';
import { Container, Image, InfoContainer, Title, Description } from './styled';
import FavoriteCheckbox from '../FavoriteCheckbox';
import { useHistory } from 'react-router-dom';

function Video({ etag, snippet, id, favorite, route }) {
  const history = useHistory();
  const updateVideoDetail = (e, prop) => {
    const currentRoute = prop.route ?? 'details';
    e.preventDefault();
    console.log(prop);
    history.push(`/${currentRoute}/${prop.id.videoId}`);
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
