import {Text, Image as ChakraImage, Box, Flex} from "@chakra-ui/react";
import Image from "next/image";

import {useCurrentUser} from "../store/User";
import buyBlue from "../public/icons/buy-blue.svg";
import buyWhite from "../public/icons/buy-white.svg";
import coin from "../public/icons/coin.svg";

import type {Product} from "types";

const token = process.env.NEXT_PUBLIC_TOKEN;

type props = {
  pro: Product;
  key: string;
};

export default function Product({pro}: props) {
  const {category, cost, img, name, _id: id} = pro;
  const {data: userData, setData} = useCurrentUser();

  const handleRedeem = () => {
    fetch("https://coding-challenge-api.aerolab.co/redeem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({productId: id}),
    })
      .then(() => {
        fetch("https://coding-challenge-api.aerolab.co/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => setData(data));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      backgroundColor="white"
      boxShadow="2px 2px 4px 0 rgba(0,0,0,0.10);"
      className="product"
      height="275px"
      overflow="hidden"
      p="12px"
      position="relative"
      width="275px"
    >
      <Box position="absolute" right="10px">
        {userData && userData.points > cost ? (
          <Image alt="shop icon" height={30} src={buyBlue} width={30} />
        ) : (
          <Flex
            alignItems="center"
            backgroundColor="#616161"
            borderRadius={100}
            opacity={0.8}
            pl={5}
          >
            <Text color="#ffffff" fontSize="0.8rem">
              You need {cost - userData?.points}
            </Text>
            <Flex alignItems="center" pt={5}>
              <Image alt="coin icon" height={30} src={coin} width={30} />
            </Flex>
          </Flex>
        )}
      </Box>
      <ChakraImage alt="product image" src={img.url} />
      <Box borderTop="1px solid black" py={14}>
        <Text fontSize="1rem" opacity={0.5}>
          {category}
        </Text>
        <Text as="h3" fontSize="1.1rem">
          {name}
        </Text>
      </Box>
      <Flex
        alignItems="center"
        backgroundColor="rgba(37, 187, 241, 0.8);"
        flexDirection="column"
        height="275px"
        inset={0}
        justifyContent="center"
        position="absolute"
        transform="translateY(100%)"
        transition="transform 0.6s"
        width="275px"
      >
        <Box position="absolute" right="5px" top="10px">
          <Image alt="shop icon" height={35} src={buyWhite} width={35} />
        </Box>
        <Text
          color="#ffffff;"
          display="flex"
          fontSize="2rem"
          gap={5}
          letterSpacing="-0.08px"
          lineHeight="23px"
        >
          {cost}
          <Image alt="coin icon" height={30} src={coin} width={30} />
        </Text>
        <button onClick={handleRedeem}>Redeem Now</button>
      </Flex>
    </Box>
  );
}
