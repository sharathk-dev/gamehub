import { Box, SimpleGrid } from '@chakra-ui/react';
import useGames from './hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import type { GameQuery } from '@/App';
import ProgressIndefinite from './ProgressIndefinite';
import Notification from './Notification';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameGridSkeleton from './GameGridSkeleton';

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames(gameQuery);

  if (error) return <Notification status="error" message={error.message} />;

  return (
    <Box padding="10px">
      {isLoading && !error && <ProgressIndefinite />}
      <InfiniteScroll
        dataLength={data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<GameGridSkeleton />}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap="6" padding="10px">
          {data?.pages.map((page, pageIndex) => (
            <React.Fragment key={pageIndex}>
              {page.results.map(game => (
                <GameCardContainer key={game.id}>
                  <GameCard key={game.id} game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </Box>
  );
};

export default GameGrid;
