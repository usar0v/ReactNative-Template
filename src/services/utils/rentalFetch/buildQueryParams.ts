import {stringify} from 'query-string';

import {Data} from './rentalFetch.types';

export const buildQueryParams = ({queryParams}: Data) => {
  return queryParams
    ? `?${stringify(queryParams, {arrayFormat: 'bracket'})}`
    : '';
};
