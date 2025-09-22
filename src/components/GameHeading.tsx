import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''}
  Games`;
  return (
    <Heading size="2xl" paddingLeft={2} marginBottom={3}>
      {heading.trim()}
    </Heading>
  );
};

export default GameHeading;
