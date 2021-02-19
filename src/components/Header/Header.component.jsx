import React from 'react';
import Styled from './styled';
import MenuButton from '../MenuButton';
import Search from '../Search';
import ThemeToggle from '../ThemeToggle';
import LoginAvatar from '../LoginAvatar';

const Header = () => (
  <Styled.Header>
    <ul>
      <Styled.LeftItem>
        <MenuButton />
      </Styled.LeftItem>
      <Styled.LeftItem>
        <Search />
      </Styled.LeftItem>
      <Styled.RightItem>
        <LoginAvatar />
      </Styled.RightItem>
      <Styled.RightItem>
        <ThemeToggle />
      </Styled.RightItem>
    </ul>
  </Styled.Header>
);

export default Header;
