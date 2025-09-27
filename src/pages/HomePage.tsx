import GameGrid from '@/components/GameGrid';
import GameHeading from '@/components/GameHeading';
import GenreList from '@/components/GenreList';
import PlatformSelector from '@/components/PlatformSelector';
import SortSelector from '@/components/SortSelector';
import { Grid, GridItem, HStack } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem area="aside" display={{ base: 'none', lg: 'block' }} padding="5">
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <GameHeading />
        <HStack spaceX={5} paddingLeft={2} marginBottom={3}>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
