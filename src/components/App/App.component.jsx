import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import { ContextProvider } from '../../providers/Context';
import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import Favorites from '../../pages/Favorites';
import Details from '../../pages/Details';
import FavoriteDetails from '../../pages/FavoriteDetails';
import Search from '../../pages/Search';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    text-align: center;
    margin: 0 0 15px 0;
  }
`;

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <AuthProvider>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <HomePage filter="video" />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/favoritedetails/:id">
              <FavoriteDetails />
            </Route>
            <Route path="/search/:criteria">
              <Search />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
