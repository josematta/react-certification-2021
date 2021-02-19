import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('selector types', () => {
  it('select the search and test if the icon is rendered', () => {
    render(<Header />);
    expect(screen.getAllByRole('list').length).toBe(1);
  });
});
