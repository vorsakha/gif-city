import React, { useState } from 'react';
import Loading from '../../components/Loading';
import { MODES } from '../../constants';
import useGiphy from '../../hooks/useGiphy';
import usePagination from '../../hooks/usePagination';

export default function Search() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState();

  const [results, loading, getError, refetch] = useGiphy({ query, mode: MODES.SEARCH });
  const [data, quantity, loadMoreData] = usePagination(results);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search === query) {
      return refetch();
    }

    setQuery(search);
  };

  return (
    <div className="row text-center mx-auto home-container">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="input-group mb-5 mx-auto justify-content-center">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search a GIF"
        />
        <button
          className="btn btn-outline-secondary search-btn"
          style={{ boxShadow: 'none' }}
          type="submit">
          Search
        </button>
      </form>
      <br />
      <div className="col-12 mx-auto mb-5">
        {loading ? (
          <Loading />
        ) : (
          data.map((data, key) => <img className="trend m-2" key={key} alt="" src={data}></img>)
        )}
        {getError && <p className="text-center">No gifs found!</p>}
      </div>
      {results && results.length > quantity && (
        <button
          className="btn btn-outline-secondary mb-5 mx-auto"
          style={{ boxShadow: 'none' }}
          onClick={loadMoreData}>
          Load More
        </button>
      )}
    </div>
  );
}
