import React from 'react';
import { render, screen } from '@testing-library/react';
import UseGiphyMock from './UseGiphyMock';

let mockedUseGiphyResult = [['sample.result'], false, false];

jest.mock('./useGiphy', () => {
  return jest.fn(() => {
    return mockedUseGiphyResult;
  });
});

describe('useGiphy', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render driver data', () => {
    render(<UseGiphyMock />);

    expect(screen.getByTestId('json_data').textContent).toContain('sample.result');
    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('error').textContent).toBe('false');
  });

  it('returns the loading state properly', () => {
    mockedUseGiphyResult = [null, true, false];

    render(<UseGiphyMock />);

    expect(screen.getByTestId('loading').textContent).toBe('true');
    expect(screen.getByTestId('error').textContent).toBe('false');
  });

  it('returns the error state properly', () => {
    mockedUseGiphyResult = [null, false, true];

    render(<UseGiphyMock />);

    expect(screen.getByTestId('loading').textContent).toBe('false');
    expect(screen.getByTestId('error').textContent).toBe('true');
  });
});
