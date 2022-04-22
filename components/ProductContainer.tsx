import {Flex, Text} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {useState, useEffect} from "react";

import {useCurrentListProducts} from "store/Products";
import Product from "components/Product";
import ProductNav from "components/ProductNav";
import type {Product as ProductType} from "types";

const Wrapper = styled.div`
  margin: 3rem auto;
  display: grid;
  width: min(100%, 1227px);
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr));
  place-items: center;
  gap: 25px;
`;

const Button = styled.button`
  background-color: #ededed;
  width: 163px;
  height: 48px;
  color: #a3a3a3;
  font-size: 1.2rem;
  border-radius: 20.5px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

type sorts = "recent" | "lowestPrice" | "highestPrice";

export default function ProductContainer() {
  const {dataArray: listProduct, setDataArray, error, loading} = useCurrentListProducts();
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<sorts>("recent");
  const [recent, setRecent] = useState<ProductType[]>([]);
  const [first, setFirst] = useState(true);

  useEffect(() => {
    if (listProduct !== null && first) {
      const arr = [...listProduct];

      setRecent(arr);
      setFirst(false);
    }
    if (sort === "lowestPrice") {
      const sortedList = [...listProduct].sort(
        (value: ProductType, valueB: ProductType) => value.cost - valueB.cost,
      );

      setDataArray(sortedList);
    } else if (sort === "highestPrice") {
      const sortedList = [...listProduct].sort(
        (value: ProductType, valueB: ProductType) => valueB.cost - value.cost,
      );

      setDataArray(sortedList);
    } else if (sort === "recent") {
      setDataArray([...recent]);
    }
  }, [sort]);

  if (error) {
    return <div>ERROR</div>;
  }

  return (
    <>
      <ProductNav countProducts={listProduct && listProduct.length} page={page} setPage={setPage}>
        <>
          <Text borderLeft="1px solid #d9d9d9" color="#a3a3a3" fontSize="1.2rem" pl={24}>
            Sorted by:
          </Text>
          <Button className={sort === "recent" ? "active" : null} onClick={() => setSort("recent")}>
            Most Recent
          </Button>
          <Button
            className={sort === "lowestPrice" ? "active" : null}
            onClick={() => setSort("lowestPrice")}
          >
            Lowest Price
          </Button>
          <Button
            className={sort === "highestPrice" ? "active" : null}
            onClick={() => setSort("highestPrice")}
          >
            Highest Price
          </Button>
        </>
      </ProductNav>
      {loading && (
        <Flex justifyContent="center" my={30}>
          <div className="spinner" />
        </Flex>
      )}
      {listProduct && (
        <Wrapper>
          {page === 1
            ? listProduct
                .slice(0, 16)
                .map((value: ProductType, index) => <Product key={String(index)} pro={value} />)
            : listProduct
                .slice(16)
                .map((value: ProductType) => <Product key={value._id} pro={value} />)}
        </Wrapper>
      )}
      <ProductNav countProducts={listProduct && listProduct.length} page={page} setPage={setPage} />
    </>
  );
}
