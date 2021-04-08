import React, { createContext, useContext, useReducer } from 'react';
import dataInit from '../../youtube-videos-mock.json';

const VideoContext = createContext();
const initialState = { dark: false, videos: dataInit };

function useVideos() {
  return useContext(VideoContext);
}

function reducer(state, action) {
  switch (action.type) {
    case 'changeTheme':
      return { dark: !state.dark, videos: dataInit };
    default:
      return state;
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function toggleTheme(e, data) {
    dispatch({ type: 'changeTheme' });
  }

  return (
    <VideoContext.Provider value={{ state: state, toggleTheme: toggleTheme }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideos, ContextProvider };
