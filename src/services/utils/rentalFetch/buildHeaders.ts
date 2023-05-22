import {HttpHeader} from '@type/http.types';

import {Data} from './rentalFetch.types';

export const buildHeaders = ({accessToken}: Data) => {
  const headers: HttpHeader = {};
  headers['Content-Type'] = 'application/json';
  headers.accept = '*/*';
  if (accessToken) {
    headers.Authorization = accessToken;
  }

  return headers;
};
