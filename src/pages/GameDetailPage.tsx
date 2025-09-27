import useGame from '@/components/hooks/useGame';
import ProgressIndefinite from '@/components/ProgressIndefinite';
import { Box, Heading, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Notification from '../components/Notification';

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (!isLoading && (error || !game))
    return <Notification status="error" message={error?.message || 'Something went wrong!'} />;

  return (
    <Box padding="10px">
      {isLoading && !error && <ProgressIndefinite />}
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </Box>
  );
};

export default GameDetailPage;
