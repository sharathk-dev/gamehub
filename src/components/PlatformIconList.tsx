import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Icon } from '@chakra-ui/react';
import { BsGlobe } from 'react-icons/bs';

import { type Platform } from './entities/Platform';
import type { IconType } from 'react-icons';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    andoird: FaAndroid,
    web: BsGlobe,
  };
  return (
    <>
      {platforms &&
        platforms.length != 0 &&
        platforms.map(
          platform =>
            iconMap[platform.slug] && (
              <Icon key={platform.slug} color={'gray.500'} as={iconMap[platform.slug]} />
            )
        )}
    </>
  );
};

export default PlatformIconList;
