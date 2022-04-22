import Head from "next/head";
import {Box} from "@chakra-ui/react";

import Header from "../Header";

const Main = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link href="/aerolab.svg" rel="icon" sizes="any" type="image/svg+xml" />
        <title>Aerolab&apos;s</title>
      </Head>

      <Header />
      <Box as="main">{children}</Box>
    </>
  );
};

export default Main;
