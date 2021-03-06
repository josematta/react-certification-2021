import React from 'react';
import { Icon, SearchContainer, IconContainer, InputContainer, Input } from './styled';
import icons from '../../icon-svg.json';

const Search = (props) => (
  <SearchContainer>
    <IconContainer>
      <Icon>
        <path d={icons.svg.magnifier}></path>
      </Icon>
    </IconContainer>
    <InputContainer>
      <Input type="text" onKeyPress={props.onSubmit} placeholder="wizeline" />
    </InputContainer>
  </SearchContainer>
);

export default Search;
