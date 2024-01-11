import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/node-js-icon-1817x2048-g8tzf91e.png";
import React from "react";

const Navbar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>Navbar</Text>
    </HStack>
  );
};

export default Navbar;
