import APIClient from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';
import type { Game } from './useGames';

const useGame = (slug: string) =>
  useQuery({
    queryKey: ['game', slug],
    queryFn: () => new APIClient<Game>('/games').get(slug),
  });

export default useGame;
