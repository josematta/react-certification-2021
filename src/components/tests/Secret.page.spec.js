import React from 'react';
import { render, screen } from '@testing-library/react';
import Secret from '../../pages/Secret';

describe('selector types', () => {
  it('select the Favorites Page and test if the page is rendered', () => {
    render(<Secret />);
    expect(screen.getByText(' ← go back')).toBeTruthy();
  });
});
