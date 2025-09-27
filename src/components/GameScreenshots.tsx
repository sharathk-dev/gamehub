import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenshots from './hooks/useScreenshots';

interface Props {
  gameId: number;
}
const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) return null;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="6" padding="10px">
      {data?.results.map(ss => (
        <Image key={ss.id} src={ss.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
