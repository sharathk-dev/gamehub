import { Progress } from '@chakra-ui/react';

const ProgressIndefinite = () => {
  return (
    <Progress.Root maxW="100%" size="xs" value={null}>
      <Progress.Track>
        <Progress.Range />
      </Progress.Track>
    </Progress.Root>
  );
};

export default ProgressIndefinite;
