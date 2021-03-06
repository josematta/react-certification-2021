import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../Search';

describe('selector types', () => {
  it('select the search and test if only one input is rendered', () => {
    render(<Search />);
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });
});
