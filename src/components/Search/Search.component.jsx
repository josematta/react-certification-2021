import React from 'react';
import { Icon, SearchContainer, IconContainer, InputContainer, Input } from './styled';
import icons from '../../icon-svg.json';
import { useVideos } from '../../providers/Context';

function Search(props) {
  const updateVideo = useVideos().searchVideos;

  return (
    <SearchContainer>
      <IconContainer>
        <Icon>
          <path d={icons.svg.magnifier}></path>
        </Icon>
      </IconContainer>
      <InputContainer>
        <Input type="text" onKeyPress={updateVideo} placeholder="wizeline" />
      </InputContainer>
    </SearchContainer>
  );
}

export default Search;
