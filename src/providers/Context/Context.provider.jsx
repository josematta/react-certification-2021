import React, { createContext, useContext, useReducer } from 'react';
import dataInit from '../../youtube-videos-mock.json';
import dataSearch from '../../youtube-videos-mock-search.json';
import { youtube } from '../../api/youtube';

const VideoContext = createContext();
const VideoUpdateContext = createContext();
const VideoDetailedContext = createContext();

function useVideos() {
  return useContext(VideoContext);
}

function useVideosUpdate() {
  return useContext(VideoUpdateContext);
}

function useVideoDetailed() {
  return useContext(VideoDetailedContext);
}

function reducer(state, action) {
  switch (action.type) {
    case 'grid':
      return { videos: action.payload.data, video: null };
    case 'detail':
      return { videos: null, video: action.payload.data };
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { videos: dataInit });

  function searchVideos(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (e.target.value.length === 0) {
        dispatch({ type: 'grid', payload: { data: dataInit } });
      } else {
        const response = youtube
          .search(e.target.value)
          .then((response) => {
            dispatch({ type: 'grid', payload: { data: response.data } });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }

  function selectVideo(e, data) {
    e.preventDefault();
    const video = data;
    dispatch({ type: 'detail', payload: { data: video } });
  }

  return (
    <VideoContext.Provider value={state}>
      <VideoUpdateContext.Provider value={searchVideos}>
        <VideoDetailedContext.Provider value={selectVideo}>
          {children}
        </VideoDetailedContext.Provider>
      </VideoUpdateContext.Provider>
    </VideoContext.Provider>
  );
};

export { useVideos, useVideosUpdate, useVideoDetailed };
export default ContextProvider;
