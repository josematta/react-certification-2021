import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginAvatar from '../LoginAvatar';

describe('selector types', () => {
  it('select the search and test if the icon is rendered', () => {
    render(<LoginAvatar />);
    expect(screen.getAllByRole('img').length).toBe(1);
  });
});
