import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import VideoDetail from '../VideoDetail';
import youtube from '../../api/youtube';
import testData from 'test-data.json'

afterEach(cleanup);

it('Fetches related videos from the player', async () => {
  //axios.get.mockImplementationOnce(() => Promise.resolve(data));
  const data = testData;
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
