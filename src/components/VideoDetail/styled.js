import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const VideoFrame = styled.iframe`
  width: 100%;
  min-height: 400px;
`;

export const UnorderedList = styled.ul`
  list-style-type: none;
`;

export const LinkVideo = styled(Link)`
  &:link {
    text-decoration: inherit;
    color: inherit;
  }
  &:visited {
    text-decoration: inherit;
    color: inherit;
  }
`;
