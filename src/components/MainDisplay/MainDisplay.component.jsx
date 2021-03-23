import React from 'react';
import Styled from './styled';
import { getFilteredItems } from '../../utils/filter-videos';
import { useVideos } from '../../providers/Context';
import Video from '../../components/Video';
import VideoDetail from '../../components/VideoDetail';

const MainDisplay = ({ state, filter }) => {
  if (state.state.video) {
    return (
      <VideoDetail videoId={state.state.video.id} videoName={state.state.video.name} />
    );
  }

  console.log(state);
  const visibleItems = getFilteredItems(state.state.videos.items, filter);

  return visibleItems.map(({ etag, snippet, id }) =>
    snippet ? <Video id={id} key={etag} etag={etag} snippet={snippet} /> : void 0
  );
};

export default MainDisplay;
