import { SimpleGrid } from '@chakra-ui/react';
import useGames from './hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import type { GameQuery } from '@/App';
import ProgressIndefinite from './ProgressIndefinite';
import Notification from './Notification';

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (error) return <Notification status="error" message={error} />;

  return (
    <>
      {isLoading && !error && <ProgressIndefinite />}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="6" padding="10px">
        {isLoading
          ? skeletons.map(sk => (
              <GameCardContainer key={sk}>
                <GameCardSkeleton key={sk} />
              </GameCardContainer>
            ))
          : data.map(game => (
              <GameCardContainer key={game.id}>
                <GameCard key={game.id} game={game} />
              </GameCardContainer>
            ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
