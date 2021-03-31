import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../../pages/Search';

describe('selector types', () => {
  it('select the Search Page and test if the page is rendered', () => {
    render(<Search />);
    expect(screen.getByText('Search')).toBeTruthy();
  });
});
