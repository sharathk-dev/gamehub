import useGameTrailer from './hooks/useTrailer';
import { Text } from '@chakra-ui/react';

interface Props {
  gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameTrailer(gameId);

  if (isLoading) return null;

  if (error) return <Text>Something went wrong</Text>;

  const firstVideo = data?.results[0];

  return firstVideo ? <video src={firstVideo.data[480]} poster={firstVideo.preview} controls /> : null;
};

export default GameTrailer;
