import React from 'react';
import YoutubeClientApp from '../YoutubeClientApp';
import { ContextProvider } from '../../providers/Context';

function App() {
  return (
    <ContextProvider>
      <YoutubeClientApp />
    </ContextProvider>
  );
}

export default App;
