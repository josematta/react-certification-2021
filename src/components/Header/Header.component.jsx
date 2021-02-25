import React from 'react';
import { HeaderContainer, FloatedItem } from './styled';
import MenuButton from '../MenuButton';
import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginAvatar from '../LoginAvatar';

const Header = () => (
  <HeaderContainer>
    <ul>
      <FloatedItem float="left">
        <MenuButton />
      </FloatedItem>
      <FloatedItem float="left">
        <Search />
      </FloatedItem>
      <FloatedItem float="right">
        <LoginAvatar />
      </FloatedItem>
      <FloatedItem float="right">
        <ThemeToggle />
      </FloatedItem>
    </ul>
  </HeaderContainer>
);

export default Header;
