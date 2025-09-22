import getCroppedImageUrl from '@/services/imageClient';
import useGenres, { type Genre } from './hooks/useGenres';
import { Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return;
  if (isLoading) return <Spinner />;
  return (
    <>
      {!isLoading && (
        <List.Root variant="plain">
          {data.map(genre => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image boxSize="32px" borderRadius="8" src={getCroppedImageUrl(genre.image_background)} />
                <Button onClick={() => onSelectGenre(genre)} fontSize="large" variant="ghost">
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;
