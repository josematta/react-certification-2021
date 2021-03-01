import React from 'react';
import { Menu, IconButton, SvgButton } from './styled';
import icons from '../../icon-svg.json';

const MenuButton = () => (
  <Menu>
    <IconButton>
      <SvgButton focusable="false" viewBox="0 0 24 24" aria-hidden="true">
        <path d={icons.svg.lines}></path>
      </SvgButton>
    </IconButton>
  </Menu>
);

export default MenuButton;
