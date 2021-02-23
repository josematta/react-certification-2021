import React from 'react';
import Styled from './styled';
import MenuButton from '../MenuButton';
import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginAvatar from '../LoginAvatar';

const Header = () => (
  <Styled.Header>
    <ul>
      <Styled.FloatedItem float="left">
        <MenuButton />
      </Styled.FloatedItem>
      <Styled.FloatedItem float="left">
        <Search />
      </Styled.FloatedItem>
      <Styled.FloatedItem float="right">
        <LoginAvatar />
      </Styled.FloatedItem>
      <Styled.FloatedItem float="right">
        <ThemeToggle />
      </Styled.FloatedItem>
    </ul>
  </Styled.Header>
);

export default Header;
