import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/node-js-icon-1817x2048-g8tzf91e.png";
import ColorModeSwitch from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="13px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
