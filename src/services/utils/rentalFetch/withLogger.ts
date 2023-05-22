import {BASE_API_URL} from '@env';

import {buildQueryParams} from './buildQueryParams';
import {Data, RequestFunc} from './rentalFetch.types';

export const withLogger = async (
  func: RequestFunc,
  path: string,
  data: Data,
) => {
  let isFinished = false;
  const queryParams = buildQueryParams(data);
  const url = `${BASE_API_URL}/${path}${queryParams}`;

  console.info(url);
  data.signal?.addEventListener('abort', () => {
    if (isFinished) {
      return;
    }

    console.info('<<Aborted>>', url);
  });

  const result = await func(path, data);
  isFinished = true;
  return result;
};
