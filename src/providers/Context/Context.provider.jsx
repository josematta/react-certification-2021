import React, { useState, createContext } from 'react';
import dataInit from '../../youtube-videos-mock.json';
import youtube from '../../api/youtube';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState(dataInit);

  const searchVideos = async (criteria) => {
    const response = await youtube.get('/search', {
      params: {
        q: criteria,
      },
    });
    setVideos(response.data.items);
  };
  return <Context.Provider value={{ videos, searchVideos }}>{children}</Context.Provider>;
};

export default ContextProvider;
