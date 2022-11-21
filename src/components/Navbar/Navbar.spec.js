import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Navbar', () => {
  it('renders properly', () => {
    const { container } = render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders menu items', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText('Trending')).toBeInTheDocument();
    expect(screen.getByText('Random')).toBeInTheDocument();
    expect(screen.getByText('Search')).toBeInTheDocument();
  });
});
