import platformsData from '@/data/platformsData';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ['platforms'],
    queryFn: () => new APIClient<Platform>('/platforms/lists/parents').getAll(),
    staleTime: ms('24h'),
    initialData: platformsData,
  });

export default usePlatforms;
