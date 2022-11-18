import { useEffect, useState } from 'react';

const usePagination = (results) => {
  const [paginated, setPaginated] = useState([]);
  const [load, setLoad] = useState(8);

  const handleLoadMore = () => {
    setLoad(load + 8);
  };

  useEffect(() => {
    if (results?.length) {
      setPaginated(results.slice(0, load));
    }
  }, [results, load]);

  return [paginated, load, handleLoadMore];
};

export default usePagination;
