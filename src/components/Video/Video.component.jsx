import React from 'react';
import { Container, Image, InfoContainer, Title, Description } from './styled';

const Video = ({ etag, snippet, id }) => {
  return (
    <Container key={etag}>
      <Image
        src={snippet.thumbnails.medium.url}
        width={snippet.thumbnails.medium.width}
        height={snippet.thumbnails.medium.height}
        alt="image"
      />
      <InfoContainer>
        <Title href={`/videos/${id.videoId}/${snippet.title}`}>{snippet.title}</Title>
        <Description>{snippet.description}</Description>
      </InfoContainer>
    </Container>
  );
};

export default Video;
