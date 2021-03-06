import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import VideoDetail from '../VideoDetail';
import youtube from '../../api/youtube';

afterEach(cleanup);

it('Fetches related videos from the player', async () => {
  //axios.get.mockImplementationOnce(() => Promise.resolve(data));
  const data = {
    data: {
      kind: 'youtube#searchListResponse',
      etag: 'Amk9tEZ5vcdQiiBnTrQQOLnP7ZQ',
      nextPageToken: 'CAUQAA',
      regionCode: 'MX',
      pageInfo: {
        totalResults: 133,
        resultsPerPage: 5,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'R-YOcNM4rB19XTO5p8BK-Qd4XXI',
          id: {
            kind: 'youtube#video',
            videoId: 'cSzI0bCykNo',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'bbJwwxMKSg6CF1Wj50gy9D5BKhw',
          id: {
            kind: 'youtube#video',
            videoId: 'YQHsXMglC9A',
          },
          snippet: {
            publishedAt: '2015-10-22T12:51:17Z',
            channelId: 'UComP_epzeKzvBX156r6pm1Q',
            title: 'Adele - Hello',
            description:
              "â€˜Hello' is taken from the new album, 25, out November 20. http://adele.com\nAvailable now from iTunes http://smarturl.it/itunes25 \nAvailable now from Amazon http://smarturl.it/25amazon \nAvailable now from Google Play http://smarturl.it/25gplay\nAvailable now at Target (US Only): http://smarturl.it/target25\n\nDirected by Xavier Dolan, @XDolan\n\nFollow Adele on:\n\nFacebook - https://www.facebook.com/Adele\nTwitter - https://twitter.com/Adele \nInstagram - http://instagram.com/Adele\n\nhttp://vevo.ly/jzAuJ1\n\nCommissioner: Phil Lee\nProduction Company: Believe Media/Sons of Manual/Metafilms\nDirector: Xavier Dolan\nExecutive Producer: Jannie McInnes\nProducer: Nancy Grant/Xavier Dolan\nCinematographer:  AndrÃ© Turpin\nProduction design : Colombe Raby\nEditor: Xavier Dolan\nAdele's lover : Tristan Wilds",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/YQHsXMglC9A/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/YQHsXMglC9A/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'AdeleVEVO',
            liveBroadcastContent: 'none',
            publishTime: '2015-10-22T12:51:17Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'ghNBSvNkJ4cBCHq__fOJuflqvpU',
          id: {
            kind: 'youtube#video',
            videoId: 'BHU-onfa9_Q',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'r7pYurOv7-2UrYsXXPXjb_fCo1k',
          id: {
            kind: 'youtube#video',
            videoId: 'rtOvBOTyX00',
          },
          snippet: {
            publishedAt: '2011-10-26T20:30:40Z',
            channelId: 'UC2gMECGMn5TVbRN5S5tKb8Q',
            title: 'Christina Perri - A Thousand Years [Official Music Video]',
            description:
              'Â© 2011 WMG\ndirected by: jay martin\n\n"a thousand years" is a brand new song me + my best friend david hodges wrote for bella + edward. we wrote it after we so luckily screened the movie + i couldn\'t be more proud of this song. to all my fellow twihards, thanks for hearing the e/b love :)\n\nCheck out more Christina Perri:\nhttp://facebook.com/christinaperrimusic\nhttp://christinaperri.com\nhttp://christinaperriblogs.tumblr.com/\nhttp://twitter.com/christinaperri\nhttp://myspace.com/christinaperri\n\nFollow Christina Perri on Spotify: http://bit.ly/HRJrB7',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/rtOvBOTyX00/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/rtOvBOTyX00/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/rtOvBOTyX00/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/rtOvBOTyX00/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/rtOvBOTyX00/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Christina Perri',
            liveBroadcastContent: 'none',
            publishTime: '2011-10-26T20:30:40Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'mdtQBc9YmDbISaXU5n8KYE8T-Jg',
          id: {
            kind: 'youtube#video',
            videoId: 'lp-EO5I60KA',
          },
          snippet: {
            publishedAt: '2014-10-07T11:34:31Z',
            channelId: 'UC0C-w0YjGpqDXGB8IHb662A',
            title: 'Ed Sheeran - Thinking Out Loud (Official Music Video)',
            description:
              "The official music video for Ed Sheeran - Thinking Out Loud\n \nEd learnt to dance! Featuring and taught by @dance10Brittany and @dance10Paul\n\nGo behind the scenes of the video: http://bit.ly/ThinkingOutLoudBTS\n\nTaken from the studio album X (multiply) released in 2014, which featured the hit singles 'Sing', 'Don't', 'Thinking Out Loud', 'Bloodstream', & 'Photograph'. \n \nSubscribe to the Ed Sheeran channel for all the best and latest official music videos, behind the scenes and live performances.â€¯ \nhttp://bit.ly/SubscribeToEdSheeran \n \nSee more official videos from Ed Sheeran here: \nhttps://www.youtube.com/watch?v=ryJgDL9jzKk&list=PLjp0AEEJ0-fGKG_3skl0e1FQlJfnx-TJz \n\nListen to more from the album x (multiply): \nhttps://www.youtube.com/playlist?list=PLjp0AEEJ0-fEuKWBJV30ebHCGoi1Ny69U\n \nFollow Ed Sheeran on: \nFacebook: http://www.facebook.com/EdSheeranMusic  \nTwitter: http://twitter.com/edsheeran  \nInstagram: http://instagram.com/teddysphotos  \nOfficial Website: http://edsheeran.com  \n  \nAbout Ed Sheeran: \nEd Sheeranâ€¯may be the quintessential pop star of the 2010s: an internationally acclaimed, multi-award winning singer/songwriter who seems to acknowledge no boundaries between styles or eras with elements of folk, hip-hop, pop, dance, soul, and rock woven throughout his music. \n\nHis incredible catalogue includes the studio albums â€˜+â€™ (plus), â€˜xâ€™ (multiply) and â€˜Ã·â€™ (divide) which spawned hit singles such as â€˜The A teamâ€™ , â€™Lego Houseâ€™, â€˜Sing', â€˜Thinking Out Loudâ€™, â€˜Photographâ€™, â€˜Shape Of Youâ€™, â€˜Castle on The Hillâ€™ and â€˜Perfectâ€™. \n \nIn 2019, Ed Sheeran released the genre-spanning â€˜No.6 Collaborations Projectâ€™ which featured a wide-range of artists including â€˜Justin Bieberâ€™, â€˜Camillaâ€™ Cabelloâ€™, â€˜Travis Scottâ€™, â€˜Eminemâ€™, â€˜Cardi B, â€˜Paulo Londraâ€™, â€˜Bruno Marsâ€™ and â€˜Stormzyâ€™ amongst many others, producing hits such as â€˜I Donâ€™t Careâ€™, â€˜Beautiful Peopleâ€™, â€˜South of The Borderâ€™ and â€˜Take Me Back To Londonâ€™. \n \n#EdSheeran #ThinkingOutLoud #multiply",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/lp-EO5I60KA/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/lp-EO5I60KA/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/lp-EO5I60KA/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/lp-EO5I60KA/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/lp-EO5I60KA/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            channelTitle: 'Ed Sheeran',
            liveBroadcastContent: 'none',
            publishTime: '2014-10-07T11:34:31Z',
          },
        },
      ],
    },
    status: 200,
    statusText: '',
    headers: {
      'cache-control': 'private',
      'content-encoding': 'gzip',
      'content-length': '2638',
      'content-type': 'application/json; charset=UTF-8',
      date: 'Fri, 05 Mar 2021 16:22:07 GMT',
      server: 'scaffolding on HTTPServer2',
      vary: 'Origin, X-Origin, Referer',
    },
    config: {
      url: '/search',
      method: 'get',
      headers: {
        Accept: 'application/json, text/plain, */*',
      },
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyAN8BNOmhJQ8d6jPsYEx2SXDBnKusT7eNY',
        relatedToVideoId: 'hLQl3WQQoQ0',
        type: 'video',
      },
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      transformRequest: [null],
      transformResponse: [null],
      timeout: 0,
      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',
      maxContentLength: -1,
      maxBodyLength: -1,
    },
    request: {},
  };
  jest.mock('../../api/youtube', () =>
    jest.fn().mockImplementationOnce(() => {
      return data;
    })
  );

  await expect(
    youtube.get('/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: 'bvC_0foemLY',
        type: 'video',
      },
    })('react')
  ).resolves.toEqual(data);
});
