import React from 'react';
import { render, screen } from '@testing-library/react';
import Video from '../Video';
import mockedTest from '../../youtube-videos-mock-test.json';
describe('selector types', () => {
  it('select the Video and test if the info is correctly rendered rendered', () => {
    const element = mockedTest.items[0];

    render(<Video key={element.etag} etag={element.etag} snippet={element.snippet} />);

    expect(
      screen.queryByText('Video Tour | Welcome to Wizeline Guadalajara')
    ).toBeTruthy();
  });
});
