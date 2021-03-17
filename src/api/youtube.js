import axios from 'axios';

const API_KEY = 'AIzaSyAN8BNOmhJQ8d6jPsYEx2SXDBnKusT7eNY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: API_KEY,
  },
});
