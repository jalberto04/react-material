import axios, { CancelToken } from 'axios';
import { getAxiosInstance } from './config';
import type { ApiResponse } from './config';

/**
 * Cancellation handled here, you can cancel request by call promise.cancel()
 *
 * @example
 *   const promise = getUsers();
 *   setTimeout(() => promise.cancel(), 30000);
 *   const { data } = await promise;
 *
 * @param getPromise
 * @returns
 */
function cancellation<T = unknown>(getPromise: (cancelToken: CancelToken) => Promise<T>): Promise<T> {
  const source = axios.CancelToken.source();
  const promise = getPromise(source.token);
  // @ts-ignore - library definition is wrong
  promise.cancel = () => {
    source.cancel('request canceled');
  };
  return promise;
}

export const Http = {
  getRequest(url: string, params?: any, requestBody?: any): Promise<ApiResponse<any>> {
    return cancellation((cancelToken) =>
      getAxiosInstance().get(url, {
        cancelToken,
        params: params
      })
    );
  },
  postRequest(url: string, params?: any, requestBody?: any): Promise<ApiResponse<any>> {
    return cancellation((cancelToken) =>
      getAxiosInstance().post(url, requestBody, {
        cancelToken,
        params: params
      })
    );
  },
  putRequest(url: string, params?: any, requestBody?: any): Promise<ApiResponse<any>> {
    return cancellation((cancelToken) =>
      getAxiosInstance().put(url, requestBody, {
        cancelToken,
        params: params
      })
    );
  },
  patchRequest(url: string, params?: any, requestBody?: any): Promise<ApiResponse<any>> {
    return cancellation((cancelToken) =>
      getAxiosInstance().patch(url, requestBody, {
        cancelToken,
        params: params
      })
    );
  },
  deleteRequest(url: string, params?: any, requestBody?: any): Promise<ApiResponse<any>> {
    return cancellation((cancelToken) =>
      getAxiosInstance().delete(url, {
        data: requestBody,
        cancelToken,
        params: params
      })
    );
  }
};
