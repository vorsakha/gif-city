import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { API_KEY, API_URL, MODES } from '../../constants';

const useGiphy = (props) => {
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);
  const [getError, setError] = useState(false);
  const [doRefetch, setDoRefetch] = useState(false);

  const URL_MODE = useMemo(() => {
    if (props?.mode === MODES.RANDOM) {
      return `random?api_key=${API_KEY}&tag=${props?.query}&rating=G`;
    }

    return props?.mode === MODES.SEARCH
      ? `search?api_key=${API_KEY}&q=${props?.query}&limit=200&offset=0&rating=G&lang=en`
      : `trending?api_key=${API_KEY}&limit=80&rating=G`;
  }, [props]);

  const URL = useMemo(() => API_URL + URL_MODE, [URL_MODE]);

  const fetchData = useMemo(async () => {
    if ((props?.mode && props?.query) || !props?.mode) {
      try {
        setLoading(true);
        const {
          data: { data }
        } = await axios.get(URL);
        setResults(
          data.length
            ? data.map((res) => res.images.fixed_height_downsampled.url)
            : data.images.fixed_height_downsampled.url
        );

        data.length === 0 ? setError(true) : setError(false);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
  }, [URL, doRefetch]);

  const toggleRefetch = () => setDoRefetch(!doRefetch);

  useEffect(() => {
    if (typeof fetchData === 'function') {
      fetchData();
    }
  }, [fetchData, props]);

  return [results, loading, getError, toggleRefetch];
};

export default useGiphy;
