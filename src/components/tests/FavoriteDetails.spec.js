import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteDetails from '../../pages/FavoriteDetails';

describe('selector types', () => {
  it('select the Favorite Details Page and test if the page is rendered', () => {
    render(<FavoriteDetails />);
    expect(screen.getByText('Favorite Details')).toBeTruthy();
  });
});
