import Image from "next/image";
import {Box, Text} from "@chakra-ui/react";

import Navbar from "./Navbar";

import headerImage from "@public/header-x1.png";

export default function Header() {
  return (
    <Box as="header">
      <Navbar />
      <Box mt={60} position="relative">
        <Image priority alt="header image" layout="responsive" src={headerImage} />
        <Text bottom={20} color="white" fontSize="2rem" left={20} position="absolute">
          Electronics
        </Text>
      </Box>
    </Box>
  );
}
