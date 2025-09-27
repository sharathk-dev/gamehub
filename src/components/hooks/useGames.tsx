import type { Platform } from './usePlatforms';
import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import ms from 'ms';
import useGameQueryStore from '@/store';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: [
      'games',
      {
        genreId: gameQuery.genreId ?? null,
        platformId: gameQuery.platformId ?? null,
        sortOrder: gameQuery.sortOrder || null,
        searchKey: gameQuery.searchText || null,
      },
    ],
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
    staleTime: ms('24h'),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;
