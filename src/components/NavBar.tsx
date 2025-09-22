import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/gamehub-logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justify="space-between" padding={10}>
      <Image src={logo} boxSize={'60px'} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
