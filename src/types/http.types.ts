export type HttpHeader = {
  Authorization?: string;
  'Content-Type'?: string;
  accept?: string;
};

export type TError = {
  message: string;
  status: number;
  statusText?: string;
};
