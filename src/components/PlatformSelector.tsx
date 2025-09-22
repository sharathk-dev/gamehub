import { Button, Menu, Portal, Spinner } from '@chakra-ui/react';
import usePlatforms from './hooks/usePlatforms';
import { LuChevronDown } from 'react-icons/lu';
import type { Platform } from './hooks/useGames';

interface Props {
  selectedPlatform: Platform | null;
  onSelectPlatform: (platform: Platform) => void;
}
const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props) => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          {selectedPlatform ? selectedPlatform.name : <>Platforms</>}
          {isLoading ? <Spinner /> : <LuChevronDown />}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(platform => (
              <Menu.Item key={platform.id} value={platform.name} onClick={() => onSelectPlatform(platform)}>
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
