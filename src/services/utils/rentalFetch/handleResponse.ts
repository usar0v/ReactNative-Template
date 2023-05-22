import {isSuccess} from '@services/utils/rentalFetch';
import {TError} from '@type/http.types';

export const handleResponse = async (response: Response) => {
  if (isSuccess(response.status)) {
    return response;
  }

  const errorRes = await response.json();

  const error: TError = {
    status: response.status,
    statusText: response.statusText,
    message: errorRes.message,
  };

  console.error(
    `${response.url} responded with status ${response.status}. Message: ${error?.message}`,
  );

  throw error;
};
