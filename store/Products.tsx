import {createContext, useContext} from "react";

import {useFetchArray} from "hooks";
type ProductState = ReturnType<typeof useFetchArray>;

const defaultState: ProductState = {
  dataArray: null,
  setDataArray: null,
  error: null,
  loading: false,
};

const productContext = createContext<ProductState>(defaultState);

const ProductProvider = ({children}: {children: React.ReactNode}) => {
  const state = useFetchArray("https://coding-challenge-api.aerolab.co/products");

  return <productContext.Provider value={state}>{children}</productContext.Provider>;
};

export default ProductProvider;

export const useCurrentListProducts = () => useContext(productContext);
