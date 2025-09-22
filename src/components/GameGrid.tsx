import { SimpleGrid, Text } from '@chakra-ui/react';
import useUsers from './hooks/useUsers';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
  const { games, error, isLoading } = useUsers();
  const skeletons = [1, 2, 3, 4, 5, 6];


  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={10} padding={10}>
        {isLoading
          ? skeletons.map(sk => <GameCardSkeleton key={sk} />)
          : games.map(game => <GameCard key={game.id} game={game} />)
        }
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
