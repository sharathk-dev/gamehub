import { HStack, IconButton } from '@chakra-ui/react';
import { useColorMode } from './ui/color-mode';
import { LuSun, LuMoon } from 'react-icons/lu';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <IconButton onClick={toggleColorMode} variant="outline" size="sm">
        {colorMode === 'light' ? <LuSun /> : <LuMoon />}
      </IconButton>
    </HStack>
  );
};

export default ColorModeSwitch;
