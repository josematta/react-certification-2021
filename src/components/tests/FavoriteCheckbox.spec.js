import React from 'react';
import { render, screen } from '@testing-library/react';
import FavoriteCheckbox from '../FavoriteCheckbox';

describe('selector types', () => {
  it('select the FavoriteCheckbox and test if the checkbox is rendered once', () => {
    render(<FavoriteCheckbox id={{ videoId: 1 }} snippet="" etag="" favorite="true" />);
    expect(screen.getAllByRole('checkbox').length).toBe(1);
  });
});
