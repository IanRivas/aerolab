import {InferGetServerSidePropsType} from "next";
import Head from "next/head";

import Header from "../components/Header";
import ProductContainer from "../components/ProductContainer";
import Data from "../store/Data";
import type {User, Product} from "../types";

const token = process.env.NEXT_PUBLIC_TOKEN;

const Home = ({user, products}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/aerolab.svg" rel="icon" sizes="any" type="image/svg+xml" />
        <title>Aerolab&apos;s</title>
      </Head>

      <Data user={user}>
        <Header />
        <main>
          <ProductContainer products={products} />
        </main>
      </Data>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const [userRes, productsRes] = await Promise.all([
    fetch("https://coding-challenge-api.aerolab.co/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
    fetch("https://coding-challenge-api.aerolab.co/products", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  ]);
  const [user, products]: [User, Product[]] = await Promise.all([
    userRes.json(),
    productsRes.json(),
  ]);

  return {
    props: {
      user,
      products,
    },
  };
}
