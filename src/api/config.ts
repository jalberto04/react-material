/**
 * You can modify this file
 *
 * @version 6
 *
 */
import Axios, { AxiosRequestConfig, AxiosError, AxiosResponse, AxiosInstance } from 'axios';

const baseConfig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json; charset=UTF-8'
  }
};

let axiosInstance: AxiosInstance;

export type ApiResponse<R> = R;

function getAxiosInstance(): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = Axios.create(baseConfig);

    // Response interceptor
    axiosInstance.interceptors.response.use(
      async (response: AxiosResponse): Promise<ApiResponse<any>> => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
        return response.data;
      },
      (error: AxiosError<any>) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        if (error.response) {
          // return Promise.reject();
          throw {
            message: error.response.data?.message ?? 'Sorry, something went wrong. Please try again later',
            response: error.response,
            status: error.response.status
          };
        }

        if (error.isAxiosError) {
          throw {
            message: 'No Internet Connection',
            response: error.response,
            status: 500
          };
        }
        return Promise.reject(error);
      }
    );
  }

  // ًًRequest interceptor
  axiosInstance.interceptors.request.use(
    async (requestConfig) => {
      /** Example on how to add authorization based on security */
      // const { auth } = Store.getState();
      // requestConfig.headers.Authorization = auth?.token ? `Bearer ${auth.token.access_token}` : '';
      return requestConfig;
    }
    // (error) => {
    //   // Do something with request error
    //   return Promise.reject(error);
    // }
  );

  return axiosInstance;
}

export { getAxiosInstance };
