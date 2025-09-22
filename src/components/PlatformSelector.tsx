import { Button, Menu, Portal, Spinner } from '@chakra-ui/react';
import usePlatforms from './hooks/usePlatforms';
import { LuChevronDown } from 'react-icons/lu';

const PlatformSelector = () => {
  const { data, error, isLoading } = usePlatforms();

  if (error) return;
  if (isLoading) return <Spinner />;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Platforms <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map(platform => (
              <Menu.Item key={platform.id} value={platform.name}>
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
