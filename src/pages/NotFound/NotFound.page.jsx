import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { HeaderContainer } from '../../components/Header/styled';
import './NotFound.styles.css';

function NotFoundPage() {
  return (
    <>
      <HeaderContainer>
        <Button variant="contained">
          <Link to="/">home</Link>
        </Button>
      </HeaderContainer>
      <h3>Oops. Something went wrong. Page not found !!!</h3>
    </>
  );
}

export default NotFoundPage;
