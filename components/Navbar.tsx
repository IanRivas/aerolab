import Image from "next/image";
import {Flex, Text} from "@chakra-ui/react";

import coin from "../public/icons/coin.svg";

import Logo from "@components/Logo";
import {useCurrentUser} from "store/User";

export default function Navbar() {
  const {data: User, error} = useCurrentUser();

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <Flex
      alignItems="center"
      as="nav"
      backgroundColor="#ffffff"
      justifyContent="space-between"
      position="fixed"
      px={25}
      py={10}
      top={0}
      w="100%"
      zIndex={2}
    >
      <Logo />
      <Flex alignItems="center" gap={10} justifyContent="center">
        {User && (
          <>
            <Text>{User.name}</Text>
            <Flex
              alignItems="center"
              borderRadius={20}
              gap={10}
              justifyContent="center"
              px={10}
              py={5}
              style={{backgroundColor: "#ededed"}}
            >
              {User.points}
              <Image priority alt="coin image" height={30} src={coin} width={30} />
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
