import React from 'react';
import { Container, Image, InfoContainer, Title, Description } from './styled';
import { useVideos } from '../../providers/Context';

function Video({ etag, snippet, id }) {
  const updateVideoDetail = useVideos().selectVideo;

  return (
    <Container key={etag}>
      <Image
        src={snippet.thumbnails.medium.url}
        width={snippet.thumbnails.medium.width}
        height={snippet.thumbnails.medium.height}
        alt="image"
      />
      <InfoContainer>
        <Title onClick={(e) => updateVideoDetail(e, { id: id, name: snippet.title })}>
          {snippet.title}
        </Title>
        <Description>{snippet.description}</Description>
      </InfoContainer>
    </Container>
  );
}

export default Video;
