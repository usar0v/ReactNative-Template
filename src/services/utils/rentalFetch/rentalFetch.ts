import {BASE_API_URL} from '@env';

import {buildBody} from './buildBody';
import {buildHeaders} from './buildHeaders';
import {buildQueryParams} from './buildQueryParams';
import {handleResponse} from './handleResponse';
import {Data} from './rentalFetch.types';

export const rentalFetch = async (path: string, data: Data) => {
  const queryParams = buildQueryParams(data);
  const url = `${BASE_API_URL}/${path}${queryParams}`;

  const response = await fetch(url, {
    method: data.method,
    headers: buildHeaders(data),
    body: buildBody(data),
    signal: data.signal,
  });

  return await handleResponse(response);
};
