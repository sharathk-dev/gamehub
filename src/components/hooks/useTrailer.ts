import APIClient from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';
import type Trailer from '../entities/Trailer';

const useTrailer = (id: number) =>
  useQuery({
    queryKey: ['trailers', id],
    queryFn: () => new APIClient<Trailer>(`/games/${id}/movies`).getAll(),
  });

export default useTrailer;
