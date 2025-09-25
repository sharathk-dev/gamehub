import getCroppedImageUrl from '@/services/imageClient';
import useGenres from './hooks/useGenres';
import { Button, Heading, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genreId: number) => void;
  selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) {
    console.error('Genres error:', error);
    return <div>Error loading genres: {error.message}</div>;
  }
  if (isLoading) return <Spinner />;
  return (
    <>
      {!isLoading && (
        <>
          <Heading fontSize="lg" marginTop={7}>
            Genres
          </Heading>
          <List.Root variant="plain">
            {data?.results.map(genre => (
              <ListItem key={genre.id} paddingY="5px">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius="8"
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                  />
                  <Button
                    whiteSpace="normal"
                    textAlign="left"
                    fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
                    onClick={() => onSelectGenre(genre.id)}
                    fontSize="large"
                    variant="ghost"
                    width="100%"
                    justifyContent="flex-start"
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
          </List.Root>
        </>
      )}
    </>
  );
};

export default GenreList;
