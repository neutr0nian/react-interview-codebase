import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  return { data, loading, setLoading, fetchData };
};

export default useFetch;
