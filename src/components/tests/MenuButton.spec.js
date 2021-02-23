import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuButton from '../MenuButton';

describe('selector types', () => {
  it('select the MenuButton and test if the button is rendered', () => {
    render(<MenuButton />);
    expect(screen.getAllByRole('button').length).toBe(1);
  });
});
