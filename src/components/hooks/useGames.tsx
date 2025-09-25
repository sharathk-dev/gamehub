import type { GameQuery } from '@/App';
import type { Platform } from './usePlatforms';
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/apiClient';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      'games',
      {
        genreId: gameQuery.genreId ?? null,
        platformId: gameQuery.platformId ?? null,
        sortOrder: gameQuery.sortOrder || null,
        searchKey: gameQuery.searchText || null,
      },
    ],
    initialPageParam: 1,
    queryFn: ({ pageParam }) =>
      new APIClient<Game>('/games').getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });

export default useGames;
