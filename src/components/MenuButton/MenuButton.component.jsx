import React from 'react';
import Styled from './styled';

const MenuButton = (
  <Styled.MenuButton>
    <Styled.IconButton>
      <Styled.SvgButton focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </Styled.SvgButton>
    </Styled.IconButton>
  </Styled.MenuButton>
);

export default MenuButton;
