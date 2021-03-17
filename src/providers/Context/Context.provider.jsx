import React, { useState, createContext, useContext } from 'react';
import dataInit from '../../youtube-videos-mock.json';
import dataSearch from '../../youtube-videos-mock-search.json';

const VideoContext = createContext();
const VideoUpdateContext = createContext();

function useVideos() {
  return useContext(VideoContext);
}

function useVideosUpdate() {
  return useContext(VideoUpdateContext);
}

const ContextProvider = ({ children }) => {
  const [videos, setVideos] = useState(dataInit);

  function searchVideos(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (e.target.value.length === 0) {
        setVideos(dataInit);
      } else {
        setVideos(dataSearch);
      }
    }
  }

  return (
    <VideoContext.Provider value={videos}>
      <VideoUpdateContext.Provider value={searchVideos}>
        {children}
      </VideoUpdateContext.Provider>
    </VideoContext.Provider>
  );
};

export { useVideos, useVideosUpdate };
export default ContextProvider;
