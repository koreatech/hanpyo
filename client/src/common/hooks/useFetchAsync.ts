/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface FetchCallback {
  onCompleted?: Function;
  onError?: Function;
}

const INIT_REQUEST_OPTION = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

function useFetchAsync(url: string, option: RequestInit = INIT_REQUEST_OPTION, callback?: FetchCallback): [(bodyData: {}) => Promise<void>, boolean] {
  const [loading, setLoading] = useState(true);

  const executeCallback = (response: Response, data: any) => {
    if (!callback) return;

    const { onCompleted, onError } = callback;

    if (response.ok && onCompleted) {
      onCompleted(data);
      return;
    }

    if (onError) {
      onError();
    }
  };

  const fetchData = async (bodyData: {}) => {
    const response = await fetch(url, { ...option, body: JSON.stringify({ ...bodyData }) });
    const data = response.bodyUsed ? await response.json() : null;

    executeCallback(response, data);
    setLoading(false);
  };

  return [fetchData, loading];
}

export default useFetchAsync;
