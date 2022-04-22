import {useState, useEffect} from "react";

import type {Product, User} from "types";

const token = process.env.NEXT_PUBLIC_TOKEN;

export default function useFetch(url: string) {
  const [data, setData] = useState<User | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {data, setData, error, loading};
}

export function useFetchArray(url: string) {
  const [dataArray, setDataArray] = useState<Product[] | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setDataArray(data))
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {dataArray, setDataArray, error, loading};
}
