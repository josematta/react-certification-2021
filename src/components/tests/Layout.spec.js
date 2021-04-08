import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../Layout';

describe('selector types', () => {
  it('select the Header and test if the list is rendered once', () => {
    render(<Layout />);
    expect(screen.getByTestId('layout-header')).toBeTruthy();
  });
});
