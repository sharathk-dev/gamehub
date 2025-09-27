import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gamehub-logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <HStack justify="space-between" padding={10}>
      <Link to={'/'}>
        <Image src={logo} boxSize={'60px'} />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
