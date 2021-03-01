import React from 'react';
import { Icon, SearchContainer, IconContainer, InputContainer, Input } from './styled';
import icons from '../../icon-svg.json';

const Search = () => (
  <SearchContainer>
    <IconContainer>
      <Icon>
        <path d={icons.svg.magnifier}></path>
      </Icon>
    </IconContainer>
    <InputContainer>
      <Input type="text" readOnly value="wizeline" />
    </InputContainer>
  </SearchContainer>
);

export default Search;
