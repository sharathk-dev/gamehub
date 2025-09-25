import apiClient from '@/services/apiClient';
import { useQuery, type QueryKey } from '@tanstack/react-query';
import type { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T,>(endpoint: string, key: QueryKey, requestConfig?: AxiosRequestConfig) => {
  const { data, error, isLoading } = useQuery<FetchResponse<T>, Error>({
    queryKey: key,
    queryFn: () => apiClient.get<FetchResponse<T>>(endpoint, requestConfig).then(res => res.data),
  });

  return { data: data?.results || [], count: data?.count || 0, error, isLoading };
};

export default useData;
