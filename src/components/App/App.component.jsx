import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';

import mockedData from '../../youtube-videos-mock.json';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: sans-serif;
    text-align: center;
    margin: 0 0 15px 0;
  }
`;

function App() {
  const [data, setData] = useState(mockedData.items);

  const search = (e) => {
    e.preventDefault();
    console.log(e.key);
    //TODO: Rest call and setData
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout onSubmit={search}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <HomePage items={data} filter="video" />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Private exact path="/secret">
              <SecretPage />
            </Private>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
