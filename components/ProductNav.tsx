import {Flex, Text} from "@chakra-ui/react";

interface props {
  children?: React.ReactNode;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  countProducts: Number;
  page: Number;
}

export default function ProductNav({children, countProducts, page, setPage}: props) {
  return (
    <Flex
      borderBottom="1px solid #D9D9D9"
      justifyContent="space-between"
      margin="0 auto"
      mt={64}
      pb={24}
      width="min(100%, 1227px)"
    >
      <Flex alignItems="center" gap={24}>
        <Text color="#616161" fontSize="1.5rem">
          {page === 1 ? 16 : 32} of {countProducts} products
        </Text>
        {children}
      </Flex>
      <Flex gap={12}>
        {page > 1 ? (
          <Flex
            alignItems="center"
            border="1px solid #D9D9D9"
            borderRadius="50%"
            cursor="pointer"
            height={46}
            justifyContent="center"
            width={46}
            onClick={() => setPage(1)}
          >
            {"<"}
          </Flex>
        ) : null}
        <Flex
          alignItems="center"
          border="1px solid #D9D9D9"
          borderRadius="50%"
          cursor="pointer"
          height={46}
          justifyContent="center"
          width={46}
          onClick={() => setPage(2)}
        >
          {">"}
        </Flex>
      </Flex>
    </Flex>
  );
}
