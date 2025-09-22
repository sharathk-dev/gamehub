import { Button, Menu, Portal } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Order by: Relevance <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>Relevance</Menu.Content>
          <Menu.Content>Date added</Menu.Content>
          <Menu.Content>Name</Menu.Content>
          <Menu.Content>Release date</Menu.Content>
          <Menu.Content>Popularity</Menu.Content>
          <Menu.Content>Average rating</Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
