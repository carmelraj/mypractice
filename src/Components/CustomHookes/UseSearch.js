import React, { useState, useEffect } from "react";
import axios from "axios";
const UseSearch = (query, pageNumber) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [hadMore, setHasMore] = useState(false);

  useEffect(() => {
    setData([]);
  }, [query]);

  useEffect(() => {
    let cancel;
    setLoading(true);
    setError(false);
    axios({
      method: "GET",
      url: "http://openlibrary.org/search.json",
      params: { q: query, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((response) => {
        console.log(response.data);
        setData((prev) => {
          return [
            ...new Set([...prev, ...response.data.docs.map((b) => b.title)]),
          ];
        });
        setHasMore(response.data.docs.length > 0);
        setLoading(false);
        setError(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);
  return { data, loading, error, hadMore };
};
export default UseSearch;
