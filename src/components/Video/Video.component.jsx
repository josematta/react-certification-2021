import React from 'react';
import Styled from './styled';

const Video = ({ etag, snippet }) => {
  return (
    <Styled.Container key={etag}>
      <Styled.Image
        src={snippet.thumbnails.medium.url}
        width={snippet.thumbnails.medium.width}
        height={snippet.thumbnails.medium.height}
        alt="image"
      />
      <Styled.InfoContainer>
        <Styled.Title>{snippet.title}</Styled.Title>
        <Styled.Description>{snippet.description}</Styled.Description>
      </Styled.InfoContainer>
    </Styled.Container>
  );
};

export default Video;
