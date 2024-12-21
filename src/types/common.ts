export type APIResult<T> = {
  responseCode?: number;
  responseMessage?: string;
  response: T;
};
