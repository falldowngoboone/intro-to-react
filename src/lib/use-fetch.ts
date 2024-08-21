import { useEffect, useState } from 'react';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
} as const;

export type UseFetchStatus = (typeof Status)[keyof typeof Status];

function useFetch(url: string, options?: RequestInit) {
  const [status, setStatus] = useState<UseFetchStatus>(Status.IDLE);
  const [data, setData] = useState();

  useEffect(() => {
    let ignore = false;

    setStatus(Status.PENDING);

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        return response.json();
      })
      .then((data) => {
        if (!ignore) {
          setData(data);
          setStatus(Status.RESOLVED);
        }
      })
      .catch(() => {
        setStatus(Status.REJECTED);
      });

    return () => {
      ignore = true;
    };
  }, [url, options]);

  return { data, status };
}

export { useFetch, Status };
