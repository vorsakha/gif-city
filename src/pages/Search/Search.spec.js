import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Search from './Search';

describe('Random Gif Page', () => {
  it('renders properly', () => {
    render(
      <Router>
        <Search />
      </Router>
    );

    expect(screen.getByPlaceholderText('Search a GIF')).toBeInTheDocument();
  });
});
