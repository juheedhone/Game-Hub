import { HStack, Icon } from "@chakra-ui/react";
import type { ReactNode } from "react";
import { BsGlobe } from "react-icons/bs";
import {
    FaAndroid,
    FaApple,
    FaLinux,
    FaPlaystation,
    FaWindows,
    FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import type { Platform } from "../hooks/useGames";

interface Props {
  platforms: Platform[];
}

const PlatformIconsList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: ReactNode } = {
    pc: <FaWindows />,
    playstation:< FaPlaystation/>,
    xbox:< FaXbox/>,
    nintendo:< SiNintendo/>,
    mac:< FaApple/>,
    linux:< FaLinux/>,
    android:< FaAndroid/>,
    ios:< MdPhoneIphone/>,
    web:< BsGlobe/>,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon color='gray.500'>{iconMap[platform.slug]}</Icon>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
