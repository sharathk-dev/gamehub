import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import type { Genre } from './components/hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { type Platform } from './components/hooks/useGames';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" display={{ base: 'none', lg: 'block' }} padding="5">
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={genre => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem area="main">
        <HStack spaceX={5} paddingLeft={10}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={platform => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
