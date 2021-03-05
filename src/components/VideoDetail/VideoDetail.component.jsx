import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { VideoFrame, UnorderedList, LinkVideo } from './styled';
import Grid from '@material-ui/core/Grid';

import youtube from '../../api/youtube';

const handleFetch = (criteria, setRelated) => {
  youtube
    .get('/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: criteria,
        type: 'video',
      },
    })
    .then(
      (response) => {
        setRelated(response);
      },
      (error) => {
        console.log('error: ', error);
      }
    );
};

const VideoDetail = (props) => {
  const params = useParams();
  const videoId = params.videoId;
  const videoName = params.name;
  const [related, setRelated] = useState([]);
  useEffect(() => {
    youtube
      .get('/search', {
        params: {
          part: 'snippet',
          relatedToVideoId: videoId,
          type: 'video',
        },
      })
      .then((response) => {
        console.log(JSON.stringify(response));
        setRelated(response);
      });
  }, []);

  return (
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
          {related.data ? (
            related.data.items.map(({ etag, snippet, id }, index) =>
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
                <></>
              )
            )
          ) : (
            <></>
          )}
        </UnorderedList>
      </Grid>
    </Grid>
  );
};

export default VideoDetail;
