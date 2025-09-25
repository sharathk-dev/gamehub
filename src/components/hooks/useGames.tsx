import type { GameQuery } from '@/App';
import useData from './useData';
import type { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const key = [
    'games',
    {
      genreId: gameQuery.genre?.id ?? null,
      platformId: gameQuery.platform?.id ?? null,
      sortOrder: gameQuery.sortOrder || null,
      searchKey: gameQuery.searchText || null,
    },
  ];
  return useData<Game>('/games', key, {
    params: {
      genres: gameQuery.genre?.id,
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    },
  });
};

export default useGames;
