import { Button, Menu, Portal, Spinner } from '@chakra-ui/react';
import usePlatforms from './hooks/usePlatforms';
import { LuChevronDown } from 'react-icons/lu';

interface Props {
  selectedPlatformId?: number;
  onSelectPlatform: (platformId: number) => void;
}
const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) {
    console.error('Platforms error:', error);
    return <div>Error loading platforms: {error.message}</div>;
  }

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatformId ? data?.results.find(d => d.id == selectedPlatformId)?.name : <>Platforms</>}
          {isLoading ? <Spinner /> : <LuChevronDown />}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data?.results.map(platform => (
              <Menu.Item
                key={platform.id}
                value={platform.name}
                onClick={() => onSelectPlatform(platform.id)}
              >
                {platform.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
