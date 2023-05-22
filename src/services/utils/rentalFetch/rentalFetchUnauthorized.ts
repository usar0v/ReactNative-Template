import {rentalFetch} from './rentalFetch';
import {Data} from './rentalFetch.types';
import {withLogger} from './withLogger';

export type RentalFetchUnauthorizedPath = 'auth/app' | 'check';

export const rentalFetchUnauthorized = async (
  path: RentalFetchUnauthorizedPath,
  data: Data,
) => {
  return await withLogger(rentalFetch, path, data);
};
