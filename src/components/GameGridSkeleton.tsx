import { SimpleGrid } from '@chakra-ui/react';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

const GameGridSkeleton = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="6" padding="10px">
      {skeletons.map(sk => (
        <GameCardContainer key={sk}>
          <GameCardSkeleton key={sk} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGridSkeleton;
