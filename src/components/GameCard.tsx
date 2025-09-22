import { Card, HStack, Image } from '@chakra-ui/react';
import type { Game } from './hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '@/services/imageClient';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image height="200px" src={getCroppedImageUrl(game.background_image)} alt={game.name} />
      <Card.Body>
        <Card.Title fontSize={'2xl'}>{game.name}</Card.Title>
        <HStack justifyContent="space-between">
          <HStack margin={'10px'}>
            <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
          </HStack>
          <CriticScore score={game.metacritic} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
