import Head from "next/head";
import React from "react";
import { PrivateBetaPage } from "../../components/PrivateBetaPage";

export default function BetaTest() {
  return (
    <>
      <Head>
        <title>PlateMate</title>
        <meta name="description" content="Plate Mate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <PrivateBetaPage />
      </main>
    </>
  );
}
