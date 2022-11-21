import React from 'react';
import usePagination from './usePagination';

const mockedResults = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20'
];

const UsePaginationMock = () => {
  const [data, quantity, loadMoreData] = usePagination(mockedResults);

  return (
    <div>
      <div data-testid="quantity">{quantity}</div>
      {data && <span data-testid="json_data">{JSON.stringify(data)}</span>}
      <button onClick={loadMoreData}>Load More</button>
    </div>
  );
};

export default UsePaginationMock;
