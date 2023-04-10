import Head from "next/head";
import { NavBar } from "../../../components/NavBar";
import React from "react";
import { PrivateBeta } from "../../../components/PrivateBeta";

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
        <NavBar />
        <PrivateBeta />
      </main>
    </>
  );
}
