import React from 'react';
import Styled from './styled';
import { getFilteredItems } from '../../utils/filter-videos';
import { useVideos } from '../../providers/Context';
import Video from '../../components/Video';
import VideoDetail from '../../components/VideoDetail';
import { storage } from '../../utils/storage';

const MainDisplay = ({ state, filter }) => {
  if (state.state.video) {
    return (
      <VideoDetail videoId={state.state.video.id} videoName={state.state.video.name} />
    );
  }
  const favorites = storage.get('favorites');
  const visibleItems = getFilteredItems(state.state.videos.items, filter);

  return visibleItems.map(({ etag, snippet, id }) => {
    const favorite = favorites ? (favorites[id.videoId] ? true : false) : false;

    return snippet ? (
      <Video id={id} key={etag} etag={etag} snippet={snippet} favorite={favorite} />
    ) : (
      void 0
    );
  });
};

export default MainDisplay;
