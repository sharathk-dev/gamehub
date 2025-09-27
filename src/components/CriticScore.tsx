import { Badge } from '@chakra-ui/react';

interface Props {
  score?: number;
}
const CriticScore = ({ score }: Props) => {
  const color = (score && (score > 75 ? 'green' : score > 60 ? 'yellow' : 'red')) || 'gray';
  return (
    <Badge fontSize="14px" paddingX="2" borderRadius="4px" colorPalette={color}>
      {score || '-'}
    </Badge>
  );
};

export default CriticScore;
