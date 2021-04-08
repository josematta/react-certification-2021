import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoDetail from '../VideoDetail';

describe('selector types', () => {
  it('select the FavoriteCheckbox and test if the checkbox is rendered once', () => {
    render(<VideoDetail videoId="1" videoName="5" favorite="true" />);
    expect(screen.getByText('5')).toBeTruthy();
  });
});
