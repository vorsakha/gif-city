import React from 'react';
import Loading from '../../components/Loading';
import useGiphy from '../../hooks/useGiphy';
import usePagination from '../../hooks/usePagination';

export default function Home() {
  const [results, loading] = useGiphy();
  const [data, quantity, loadMoreData] = usePagination(results);

  return (
    <div className="row home-container mx-auto mt-5">
      <div className="col-md-12 text-info text-center mb-3">
        <h2>Trending Gifs</h2>
      </div>
      <div className="col-12 mx-auto text-center mb-5">
        {loading ? (
          <Loading />
        ) : (
          data.map((data, key) => <img className="trend m-2" key={key} alt="" src={data}></img>)
        )}
      </div>
      {results && results.length > quantity && (
        <button
          className="btn btn-outline-secondary mb-5"
          style={{ boxShadow: 'none' }}
          onClick={loadMoreData}>
          Load More
        </button>
      )}
    </div>
  );
}
