import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MenuButton from '../MenuButton';

describe('selector types', () => {
  it('select the MenuButton and test if the button is rendered', () => {
    render(<MenuButton />);
    expect(screen.getByTestId('menu-svg')).toBeTruthy();
  });

  it('Click the MenuButton and test if the Home is rendered', () => {
    render(<MenuButton />);
    const menu = screen.getByTestId('menu-svg');
    fireEvent.click(menu);
    expect(screen.getByText('Home')).toBeTruthy();
  });

  it('Click the MenuButton and test if the Favorites is rendered', () => {
    render(<MenuButton />);
    const menu = screen.getByTestId('menu-svg');
    fireEvent.click(menu);
    expect(screen.getByText('Favorites')).toBeTruthy();
  });
});
