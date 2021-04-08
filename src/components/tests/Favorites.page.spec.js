import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorite from '../../pages/Favorite';

describe('selector types', () => {
  it('select the Favorites Page and test if the page is rendered', () => {
    render(<Favorite />);
    expect(screen.getByText('Favorites')).toBeTruthy();
  });
});
