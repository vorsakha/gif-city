import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RandomGif from './RandomGif';

describe('Random Gif Page', () => {
  it('renders properly', () => {
    render(
      <Router>
        <RandomGif />
      </Router>
    );

    expect(screen.getByPlaceholderText('Search a random GIF')).toBeInTheDocument();
  });
});
