import { Grid, GridItem, HStack } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
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
        <NavBar onSearch={searchText => setGameQuery({ ...gameQuery, searchText })} />
      </GridItem>
      <GridItem area="aside" display={{ base: 'none', lg: 'block' }} padding="5">
        <GenreList
          selectedGenreId={gameQuery.genreId}
          onSelectGenre={genreId => setGameQuery({ ...gameQuery, genreId })}
        />
      </GridItem>
      <GridItem area="main">
        <GameHeading gameQuery={gameQuery} />
        <HStack spaceX={5} paddingLeft={2} marginBottom={3}>
          <PlatformSelector
            selectedPlatformId={gameQuery.platformId}
            onSelectPlatform={platformId => setGameQuery({ ...gameQuery, platformId })}
          />
          <SortSelector
            selectedSortOrder={gameQuery.sortOrder}
            onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
