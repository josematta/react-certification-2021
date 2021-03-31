import React from 'react';
import { render, screen } from '@testing-library/react';
import Fortune from '../Fortune';

describe('selector types', () => {
  it('select the FavoriteCheckbox and test if the checkbox is rendered once', () => {
    render(<Fortune />);
    expect(screen.getByTestId('fortune-span')).toBeTruthy();
  });
});
