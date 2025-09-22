import { SimpleGrid, Text } from '@chakra-ui/react';
import useUsers from './hooks/useUsers';
import GameCard from './GameCard';

const GameGrid = () => {
  const { games, error, isLoading } = useUsers();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} gap={10} padding={10}>
        {!isLoading && games.map(game => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
