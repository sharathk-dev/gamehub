import { Card, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card.Root width="250px" borderRadius="10" overflow="hidden">
      <Skeleton height="200px" />
      <Card.Body>
        <SkeletonText noOfLines={2} />
        <HStack justifyContent="space-between" marginTop={4}>
          <HStack margin="10px">
            <SkeletonText noOfLines={1} width="100px" />
          </HStack>
          <SkeletonText noOfLines={1} width="50px" />
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
