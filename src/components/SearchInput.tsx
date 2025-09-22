import { Input, InputGroup, Kbd } from '@chakra-ui/react';
import { useRef } from 'react';
import { LuSearch } from 'react-icons/lu';

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<LuSearch />}>
        <Input ref={ref} borderRadius="20px" placeholder="Search" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
