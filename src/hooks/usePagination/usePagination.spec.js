import React from 'react';
import { render, screen } from '@testing-library/react';
import UsePaginationMock from './UsePaginationMock';
import userEvent from '@testing-library/user-event';

describe('usePagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders paginated data', () => {
    render(<UsePaginationMock />);

    expect(screen.getByTestId('json_data').textContent).toContain('1');
  });

  it('renders the correct data size', () => {
    render(<UsePaginationMock />);

    const quantity = screen.getByTestId('quantity');

    expect(quantity.textContent).toBe('8');

    userEvent.click(screen.getByText('Load More'));

    expect(quantity.textContent).toBe('16');
  });
});
