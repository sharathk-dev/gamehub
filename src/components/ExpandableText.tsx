import { Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const LIMIT = 300;
  const [expanded, setExpanded] = useState(false);

  if (children.length < LIMIT) return <Text>{children}</Text>;

  const summary = children.substring(0, LIMIT) + '...';

  return (
    <>
      <Text>{expanded ? children : summary}</Text>
      <Button
        colorPalette="yellow"
        rounded="lg"
        size="xs"
        fontWeight="bold"
        variant="solid"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Show Less' : 'Show More'}
      </Button>
    </>
  );
};

export default ExpandableText;
