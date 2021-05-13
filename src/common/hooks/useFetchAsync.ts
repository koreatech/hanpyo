/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface FetchCallback {
  onCompleted?: Function;
  onError?: Function;
}

interface FetchParams {
  queryData?: {};
  bodyData?: {};
}

const INIT_REQUEST_OPTION = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

function useFetchAsync(
  url: string,
  option: RequestInit = INIT_REQUEST_OPTION,
  callback?: FetchCallback,
): [({ queryData, bodyData }: FetchParams) => Promise<void>, boolean] {
  const [loading, setLoading] = useState(true);

  const executeCallback = (response: Response, data: any, callbacks: FetchCallback) => {
    const { onCompleted, onError } = callbacks;

    if (response.ok && onCompleted) {
      onCompleted(data);
      return;
    }

    if (onError) {
      onError();
    }
  };

  const concatURLParams = (urlStr: string, queryParams: {}): string => {
    return `${urlStr}?${new URLSearchParams(queryParams)}`;
  };

  const fetchData = async ({ queryData, bodyData }: FetchParams) => {
    const fetchUrl = queryData ? concatURLParams(url, queryData) : url;
    const response = await fetch(fetchUrl, { ...option, body: JSON.stringify({ ...bodyData }) });
    const data = response.bodyUsed ? await response.json() : null;

    if (callback) {
      executeCallback(response, data, callback);
    }

    setLoading(false);
  };

  return [fetchData, loading];
}

export default useFetchAsync;
