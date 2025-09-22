import { Text } from '@chakra-ui/react';
import useUsers from './hooks/useUsers';

const GameGrid = () => {
  const { games, error, isLoading } = useUsers();

  return (
    <ul>
      {error && <Text>{error}</Text>}
      {!isLoading && games.map(game => <li key={game.id}>{game.name}</li>)}
    </ul>
  );
};

export default GameGrid;
