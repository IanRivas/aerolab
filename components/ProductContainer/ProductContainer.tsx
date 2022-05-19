import {Text} from "@chakra-ui/react";
import {useState, useEffect} from "react";

import {Wrapper, Button, H2} from "./ProductContainer.styles";

import useWindowDimensions from "hooks/useWindowDimensions";
import Filter from "@components/Filter";
import Pager from "@components/Pager";
import Product, {CardSkeleton} from "components/Product";
import ProductNav from "components/ProductNav";
import type {Product as ProductType} from "types";

type sorts = "recent" | "lowestPrice" | "highestPrice";
type filters = "All Products" | "Gaming" | "Audio" | "Smart Home" | "Monitors & TV";

type props = {
  products: ProductType[];
};

export default function ProductContainer({products}: props) {
  const recent = [...products];
  const lowestPrice = [...products].sort((a, z) => a.cost - z.cost);
  const highestPrice = [...products].sort((a, z) => z.cost - a.cost);

  const [productsState, setProductState] = useState<ProductType[]>([...products]);
  const [sort, setSort] = useState<sorts>("recent");
  const [filter, setFilter] = useState<filters>("All Products");

  const [page, setPage] = useState<number>(0);
  const [items, setItems] = useState<number>(8);
  const [finalPage, setFinalPage] = useState<number>(2);
  const {width} = useWindowDimensions();

  useEffect(() => {
    if (width <= 667) {
      setItems(8);
      setPage(0);
      setFinalPage(3);
    } else if (width < 1364) {
      setItems(12);
      setPage(0);
      setFinalPage(2);
    } else if (width > 1364) {
      setItems(16);
      setPage(0);
      setFinalPage(1);
    }
  }, [width]);

  useEffect(() => {
    if (sort === "highestPrice") {
      setProductState(highestPrice);
    } else if (sort === "lowestPrice") {
      setProductState(lowestPrice);
    } else if (sort === "recent") {
      setProductState(recent);
    }
  }, [sort]);

  return (
    <>
      <H2>
        <span>TECH</span> PRODUCTS
      </H2>
      <Filter filter={filter} setFilter={setFilter} />
      <Pager finalPage={finalPage} page={page} setPage={setPage} />
      <ProductNav countProducts={products && products.length} page={page} setPage={setPage}>
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
      {products ? (
        <Wrapper>
          {filter !== "All Products"
            ? productsState
                .filter((value: ProductType) => value.category === filter)
                .map((value: ProductType) => <Product key={value._id} pro={value} />)
            : productsState
                .slice(page * items, page * items + items)
                .map((value: ProductType) => <Product key={value._id} pro={value} />)}
        </Wrapper>
      ) : (
        <Wrapper>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((v, index) => (
            <CardSkeleton key={index} />
          ))}
        </Wrapper>
      )}
      <ProductNav countProducts={products && products.length} page={page} setPage={setPage} />
    </>
  );
}
