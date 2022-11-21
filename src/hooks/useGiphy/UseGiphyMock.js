import React from 'react';
import useGiphy from './useGiphy';

const UseGiphyMock = () => {
  const [results, loading, getError] = useGiphy();

  return (
    <div>
      <div data-testid="loading">{JSON.stringify(loading)}</div>
      <div data-testid="error">{JSON.stringify(getError)}</div>
      {results && <span data-testid="json_data">{JSON.stringify(results)}</span>}
    </div>
  );
};

export default UseGiphyMock;
