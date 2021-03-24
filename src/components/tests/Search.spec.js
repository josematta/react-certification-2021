import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../Search';
import App from '../App'
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

describe('selector types', () => {
  it('select the search and test if only one input is rendered', () => {
    render(<Search />);
    expect(screen.getAllByRole('textbox').length).toBe(1);
  });


});

jest.mock('../../api/youtube');

describe('Search functionality' , ()=>{
  beforeEach(() => {
    render(<App />);
  });

  describe('Init test', ()=>{
    it('Test the initial render',()=>{
      expect(screen.getByText("Video Tour | Welcome to Wizeline Guadalajara"));
    })

    it('Test the search', async ()=>{
           

      const input = screen.getByRole('textbox')
      fireEvent.change(input, { target: { value: 'happy' } })
      fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });

      expect(screen.getByText('Adele - Hello'))
    })
  })
})
