import {useRef} from "react";
import {InferGetServerSidePropsType} from "next";
import Head from "next/head";

import Data from "../store/Data";
import type {User, Product} from "../types";

import Header from "@components/Header";
import ProductContainer from "@components/ProductContainer";
import Footer from "@components/Footer";

const token = process.env.NEXT_PUBLIC_TOKEN;

const Home = ({user, products}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const refProducts = useRef<HTMLUListElement>(null);

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/aerolab.svg" rel="icon" sizes="any" type="image/svg+xml" />
        <title>Aerolab&apos;s</title>
        <meta content="A Challenge for Aerolab to redeem products" name="description" />
        <meta content="Aerolab Challenge" itemProp="name" />
        <meta content="A Challenge for Aerolab to redeem products" itemProp="description" />
        <meta content="/images/metadata.png" itemProp="image" />
      </Head>

      <Data user={user}>
        <Header refProducts={refProducts} />
        <main ref={refProducts}>
          <ProductContainer products={products ? products : []} />
        </main>
        <Footer />
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
