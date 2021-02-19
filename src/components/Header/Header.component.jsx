import React from 'react';
import Styled from './styled';
import MenuButton from '../MenuButton';
import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginAvatar from '../LoginAvatar';

const Header = () => (
  <Styled.Header>
    <MenuButton />
    <Search />
    <ThemeToggle />
    <LoginAvatar />
  </Styled.Header>
);

export default Header;
