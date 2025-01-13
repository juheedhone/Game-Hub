import { HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./searchInput";

const NavBar = () => {
  return (
    <HStack  padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput/>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
// 0c3f617a41084405b1a95ca7ac9cb25e