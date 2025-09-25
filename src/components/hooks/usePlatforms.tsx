import APIClient, { type FetchResponse } from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => new APIClient<Platform>('/platforms/lists/parents').getAll(),
  });

export default usePlatforms;
