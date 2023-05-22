import RCTAsyncStorage from '@react-native-async-storage/async-storage';

import {rentalFetch} from './rentalFetch';
import {Data} from './rentalFetch.types';
import {withLogger} from './withLogger';

export const rentalFetchAuthorized = async (
  path: string,
  data: Omit<Data, 'accessToken'>,
) => {
  const user = await RCTAsyncStorage.getItem('user');
  const accessToken = JSON.parse(user || '{}')?.token;

  return await withLogger(rentalFetch, path, {...data, accessToken});
};
