import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../../pages/NotFound';

describe('selector types', () => {
  it('select the FavoriteCheckbox and test if the checkbox is rendered once', () => {
    render(<NotFound />);
    expect(
      screen.getByText('Oops. Something went wrong. Page not found !!!')
    ).toBeTruthy();
  });
});
