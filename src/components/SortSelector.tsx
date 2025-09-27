import useGameQueryStore from '@/store';
import { Button, Menu, Portal } from '@chakra-ui/react';
import { LuChevronDown } from 'react-icons/lu';

const SortSelector = () => {
  const selectedSortOrder = useGameQueryStore(s => s.gameQuery.sortOrder);
  const setSortOrder = useGameQueryStore(s => s.setSortOrder);
  const sortOrders: { value: string; label: string }[] = [
    { value: '', label: 'Relevance' },
    { value: '-created', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: 'metacritic', label: 'Popularity' },
    { value: 'rating', label: 'Average rating' },
  ];

  const currentSortOrder = sortOrders.find(order => order.value == selectedSortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button size="sm" variant="outline">
          Order by: {currentSortOrder?.label || 'Relevance'} <LuChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sortOrders.map(order => (
              <Menu.Item onClick={() => setSortOrder(order.value)} key={order.value} value={order.value}>
                {order.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
