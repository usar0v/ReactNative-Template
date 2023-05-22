import {Data} from './rentalFetch.types';

export const buildBody = ({body}: Data) => {
  if (body) {
    return JSON.stringify(body);
  }
};
