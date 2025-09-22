import getCroppedImageUrl from '@/services/imageClient';
import useGenres from './hooks/useGenres';
import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}
      {!isLoading && (
        <List.Root>
          {data.map(genre => (
            <ListItem key={genre.id} paddingY="5px">
              <HStack>
                <Image boxSize="32px" borderRadius="8" src={getCroppedImageUrl(genre.image_background)} />
                <Text fontSize="large">{genre.name}</Text>
              </HStack>
            </ListItem>
          ))}
        </List.Root>
      )}
    </>
  );
};

export default GenreList;
