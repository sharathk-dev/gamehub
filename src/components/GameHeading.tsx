import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';
import usePlatform from './hooks/usePlatform';
import useGenre from './hooks/useGenre';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''}
  Games`;
  return (
    <Heading size="2xl" paddingLeft={2} marginBottom={3}>
      {heading.trim()}
    </Heading>
  );
};

export default GameHeading;
