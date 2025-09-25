import type { GameQuery } from '@/App';
import { Heading } from '@chakra-ui/react';
import useGenres from './hooks/useGenres';
import usePlatforms from './hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const genre = genres?.results?.find(g => g.id == gameQuery.genreId);
  const platform = platforms?.results?.find(p => p.id == gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''}
  Games`;
  return (
    <Heading size="2xl" paddingLeft={2} marginBottom={3}>
      {heading.trim()}
    </Heading>
  );
};

export default GameHeading;
