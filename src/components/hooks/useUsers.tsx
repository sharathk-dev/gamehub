import apiClient, { CanceledError } from '@/services/apiClient';
import { useEffect, useState } from 'react';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useUsers = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchGameResponse>('/games', { signal: controller.signal })
      .then(res => setGames(res.data.results))
      .catch(err => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading, setGames, setError, setLoading };
};

export default useUsers;
