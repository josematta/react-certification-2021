import React, { useState, useEffect } from 'react';
import { VideoFrame, UnorderedList, LinkVideo } from './styled';
import Grid from '@material-ui/core/Grid';
import { storage } from '../../utils/storage';
import { youtube } from '../../api/youtube';

const VideoDetail = ({ videoId, videoName, favorite }) => {
  favorite = favorite ?? 'false';
  const [related, setRelated] = useState([]);
  const path = favorite === 'true' ? 'favoritedetails' : 'details';
  const cache = storage.get('cache');

  videoName = cache[videoId] ? cache[videoId].snippet.title : videoName; //TODO: if is not in the cache, fetch it from the youtube API (use the useState hook)

  useEffect(() => {
    if (favorite === 'true') {
      const visibleItems = [];
      const favorites = storage.get('favorites');
      for (var propertyName in favorites) {
        visibleItems.push(favorites[propertyName]);
      }
      const related = {};
      related.data = { items: visibleItems };
      setRelated(related);
    } else {
      youtube
        .related(videoId)
        .then((data) => {
          setRelated(data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <VideoFrame
            title={videoId}
            src={`https://www.youtube.com/embed/${videoId}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></VideoFrame>

          <h2> {videoName} </h2>
        </Grid>
        <Grid item xs={5}>
          <UnorderedList>
            {related.data
              ? related.data.items.map(({ etag, snippet, id }, index) =>
                  snippet ? (
                    <li key={index}>
                      <Grid container spacing={1}>
                        <Grid item xs={7}>
                          <img
                            src={snippet.thumbnails.default.url}
                            width={snippet.thumbnails.default.width}
                            height={snippet.thumbnails.default.height}
                            alt="thumbnail"
                          />
                        </Grid>
                        <Grid item xs={5}>
                          <LinkVideo to={`/${path}/${id.videoId}`}>
                            {snippet.title}
                          </LinkVideo>
                        </Grid>
                      </Grid>
                    </li>
                  ) : (
                    void 0
                  )
                )
              : void 0}
          </UnorderedList>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12}></Grid>
      </Grid>
    </>
  );
};

export default VideoDetail;
