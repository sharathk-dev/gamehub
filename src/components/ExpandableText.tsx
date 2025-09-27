import { Text, Button } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const LIMIT = 700;
  const [expanded, setExpanded] = useState(false);

  if (!children) return null;

  if (children.length < LIMIT) return <Text>{children}</Text>;

  const summary = children.substring(0, LIMIT) + '...';

  return (
    <>
      <Text>
        {expanded ? children : summary}
        <Button
          colorPalette="yellow"
          rounded="lg"
          size="xs"
          marginLeft={1}
          fontWeight="bold"
          variant="solid"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show Less' : 'Show More'}
        </Button>
      </Text>
    </>
  );
};

export default ExpandableText;
