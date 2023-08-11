import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    fetch(url, { signal: controller.signal })
      .then((data) => {
        if (!data.ok) {
          setError("Network error");
        }
        setLoading(false);
        return data.json();
      })
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        if (error.name === "AbortError") {
          // Handle the aborted request gracefully (optional)
        } else {
          setError(error);
        }
        setLoading(false);
      })
      .finally(() => setLoading(false));
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data, loading, error };
}
