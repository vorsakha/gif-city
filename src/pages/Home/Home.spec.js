import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('Home Page', () => {
  it('renders properly', () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    expect(screen.getByText('Trending Gifs')).toBeInTheDocument();
  });
});
