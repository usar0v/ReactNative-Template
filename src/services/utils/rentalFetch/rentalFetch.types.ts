export type Sort<T extends string> = Array<Partial<Record<T, 'asc' | 'desc'>>>;

export type Data = {
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE';
  accessToken?: string;
  body?: Record<string, unknown>;
  signal?: AbortSignal;
  queryParams?: Record<string, any>;
};

export type RequestFunc = (path: string, data: Data) => Promise<Response>;
