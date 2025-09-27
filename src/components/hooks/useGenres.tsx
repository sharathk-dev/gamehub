import genresData from '@/data/genresData';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import type Genre from '../entities/Genre';

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => new APIClient<Genre>('/genres').getAll(),
    staleTime: ms('24h'),
    initialData: genresData,
  });

export default useGenres;
