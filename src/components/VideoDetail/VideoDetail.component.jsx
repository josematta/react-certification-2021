import React, { useState, useEffect } from 'react';
import { VideoFrame, UnorderedList, LinkVideo } from './styled';
import Grid from '@material-ui/core/Grid';

import { youtube } from '../../api/youtube';

const VideoDetail = ({ videoId, videoName }) => {
  const [related, setRelated] = useState([]);
  useEffect(() => {
    const response = youtube
      .related(videoId)
      .then((data) => {
        setRelated(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={7}>
          <VideoFrame
            title={videoId}
            src={`https://www.youtube.com/embed/${videoId.videoId}`}
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
                          <LinkVideo href={`/videos/${id.videoId}/${snippet.title}`}>
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
        <Grid item xs={12}>
          {/* <button onClick={(e) => {}}> Back</button> */}
        </Grid>
      </Grid>
    </>
  );
};

export default VideoDetail;
