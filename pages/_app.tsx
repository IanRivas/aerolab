import "../styles/globals.css";
import type {AppProps} from "next/app";

import ProductProvider from "../store/Products";
import UserProvider from "../store/User";

import Layout from "@components/layout/main";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ProductProvider>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ProductProvider>
  );
}

export default MyApp;
