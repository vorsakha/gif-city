import React, { useState } from 'react';
import Loading from '../components/Loading';
import { MODES } from '../constants';
import useGiphy from '../hooks/useGiphy';

export default function AsyncHooks() {
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState();
  const [results, loading, getError, refetch] = useGiphy({ query, mode: MODES.RANDOM });

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
          placeholder="Search a random GIF"
        />
        <button
          className="btn btn-outline-secondary search-btn"
          style={{ boxShadow: 'none' }}
          type="submit">
          Search
        </button>
      </form>
      <br />
      {loading ? (
        <Loading />
      ) : (
        <div className="col-md-12 column mx-auto mb-5">
          <img className="random-gif" alt="" src={results} />
        </div>
      )}
      {!loading && getError && <p className="text-center">No gifs found!</p>}
    </div>
  );
}
