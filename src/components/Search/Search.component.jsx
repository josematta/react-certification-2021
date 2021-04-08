import React from 'react';
import { Icon, SearchContainer, IconContainer, InputContainer, Input } from './styled';
import icons from '../../icon-svg.json';
import { useVideos } from '../../providers/Context';
import { useHistory } from 'react-router-dom';
import { youtube } from '../../api/youtube';

function Search(props) {
  let history = useHistory();

  function handleSearch({ key, preventDefault = () => {}, target: { value } = {} } = {}) {
    if (key === 'Enter') {
      preventDefault();
      history.push(`/search/${value}`);
    }
  }

  return (
    <SearchContainer>
      <IconContainer>
        <Icon>
          <path d={icons.svg.magnifier}></path>
        </Icon>
      </IconContainer>
      <InputContainer>
        <Input type="text" onKeyPress={handleSearch} placeholder="wizeline" />
      </InputContainer>
    </SearchContainer>
  );
}

export default Search;
