import React from 'react';
import { render, screen } from '@testing-library/react';
import Details from '../../pages/Details';

describe('selector types', () => {
  it('select the Details Page and test if the page is rendered', () => {
    render(<Details />);
    expect(screen.getByText('Details')).toBeTruthy();
  });
});
