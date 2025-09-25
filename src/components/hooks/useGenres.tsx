import genresData from '@/data/genresData';
import APIClient, { type FetchResponse } from '@/services/apiClient';
import { useQuery } from '@tanstack/react-query';

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: () => new APIClient<Genre>('/genres').getAll(),
    initialData: genresData,
  });

export default useGenres;
