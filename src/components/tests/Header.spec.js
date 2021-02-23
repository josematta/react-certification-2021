import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('selector types', () => {
  it('select the Header and test if the list is rendered once', () => {
    render(<Header />);
    expect(screen.getAllByRole('list').length).toBe(1);
  });
});
