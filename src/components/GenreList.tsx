import useGenres from './hooks/useGenres';
import { Text } from '@chakra-ui/react';

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {!isLoading && (
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GenreList;
