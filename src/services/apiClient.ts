import axios, { AxiosError, CanceledError, type AxiosRequestConfig } from 'axios';

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosClient = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_RAWG_KEY,
  },
});

export default class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  async getAll(config?: AxiosRequestConfig) {
    return axiosClient.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data);
  }

  async get(id: number | string) {
    return axiosClient.get<T>(this.endpoint + '/' + id).then(res => res.data);
  }

  async post(data: T) {
    return axiosClient.post<T>(this.endpoint, data).then(res => res.data);
  }
}

export { AxiosError, CanceledError };
