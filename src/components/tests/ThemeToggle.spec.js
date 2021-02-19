import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeToggle from '../ThemeToggle';

describe('selector types', () => {
  it('select the search and test if only one input is rendered', () => {
    render(<ThemeToggle />);
    expect(screen.getAllByRole('checkbox').length).toBe(1);
  });
});
