import { Card, HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GameCardSkeleton = () => {
  return (
    <Card.Root>
      <Skeleton height="200px" />
      <Card.Body>
        <HStack justifyContent="space-between" marginTop={4}>
          <HStack margin="10px">
            <SkeletonText noOfLines={1} width="100px" />
          </HStack>
          <SkeletonText noOfLines={1} width="50px" />
        </HStack>
        <SkeletonText noOfLines={2} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCardSkeleton;
