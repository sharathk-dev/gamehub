import { Card, HStack, Image } from '@chakra-ui/react';
import type { Game } from './hooks/useUsers';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={'hidden'}>
      <Image src={game.background_image} alt={game.name} />
      <Card.Body>
        <Card.Title fontSize={'2xl'}>{game.name}</Card.Title>
        <HStack margin={'10px'}>
          <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)} />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
