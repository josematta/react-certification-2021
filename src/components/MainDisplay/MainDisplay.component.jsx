import React from 'react';
import Styled from './styled';
import { getFilteredItems } from '../../utils/filter-videos';
import { useVideos } from '../../providers/Context';
import Video from '../../components/Video';
import VideoDetail from '../../components/VideoDetail';

const MainDisplay = ({ state, filter }) => {
  if (state.video) {
    return <VideoDetail videoId={state.video.id} videoName={state.video.name} />;
  }

  const visibleItems = getFilteredItems(state.videos.items, filter);

  return visibleItems.map(({ etag, snippet, id }) =>
    snippet ? <Video id={id} key={etag} etag={etag} snippet={snippet} /> : void 0
  );
};

export default MainDisplay;
