import axios from 'axios';

const API_KEY = 'AIzaSyAN8BNOmhJQ8d6jPsYEx2SXDBnKusT7eNY';

export const youtube = (function () {
  var init = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      part: 'snippet',
      maxResults: 5,
      key: API_KEY,
    },
  });

  return {
    search: async function (search) {
      const response = await init.get('/search', {
        params: {
          q: search,
        },
      });

      return response;
    },
    related: async function (videoId) {
      console.log(videoId);
      const response = await init.get('/search', {
        params: {
          part: 'snippet',
          relatedToVideoId: videoId.videoId,
          type: 'video',
        },
      });
      return response;
    },
  };
})();
