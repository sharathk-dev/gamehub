import APIClient from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';
import type Screenshot from '../entities/Screenshot';

const useScreenshots = (gameId: number) =>
  useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => new APIClient<Screenshot>(`/games/${gameId}/screenshots`).getAll(),
  });

export default useScreenshots;
