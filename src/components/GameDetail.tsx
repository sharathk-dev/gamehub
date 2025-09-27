import ExpandableText from './ExpandableText';
import useGame from '@/components/hooks/useGame';
import ProgressIndefinite from '@/components/ProgressIndefinite';
import { Box, Heading } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Notification from '../components/Notification';
import GameAttributes from './GameAttributes';
import GameTrailer from './GameTrailer';

const GameDetail = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return null;
  if (error || !game)
    return <Notification status="error" message={error?.message || 'Something went wrong!'} />;

  return (
    <Box padding="10px">
      {isLoading && !error && <ProgressIndefinite />}
      <Heading>{game?.name}</Heading>
      <ExpandableText>{game?.description_raw ?? ''}</ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer gameId={game.id} />
    </Box>
  );
};

export default GameDetail;
