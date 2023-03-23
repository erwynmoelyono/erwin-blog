import { useState, useEffect } from "react";
import debounce from "lodash.debounce";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await (await fetch(url)).json();
      setData(data);
      setIsPending(false);
      setError(null);
      // console.log(data);
    };
    const debounced = debounce(() => {
      fetchData().catch((e) => {
        setError(e.message);
        setIsPending(false);
      });
    }, 1000);
    debounced();
    // setTimeout(() => {
    //   fetchData().catch(console.error);
    // }, 1000);
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
