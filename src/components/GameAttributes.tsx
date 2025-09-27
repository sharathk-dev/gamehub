import { SimpleGrid, Text } from '@chakra-ui/react';
import CriticScore from './CriticScore';
import GameDefinitionItem from './GameDefinitionItem';
import type Game from './entities/Game';

interface Props {
  game: Game;
}
const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 4 }} gap="6" padding="10px" as="dl">
      <GameDefinitionItem term="Platforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </GameDefinitionItem>
      <GameDefinitionItem term="Metascore">
        <CriticScore score={game?.metacritic || 0} />
      </GameDefinitionItem>
      <GameDefinitionItem term="Genres">
        {game?.genres.map(genre => (
          <Text key={genre.id}>{genre.name}</Text>
        ))}
      </GameDefinitionItem>
      <GameDefinitionItem term="Publishers">
        {game?.publishers.map(publisher => (
          <Text key={publisher.id}>{publisher.name}</Text>
        ))}
      </GameDefinitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
