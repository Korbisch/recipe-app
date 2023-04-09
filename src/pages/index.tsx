import Head from "next/head";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";

export default function Home() {
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
        <Header />
        {/*<PrintRecipe />*/}
      </main>
    </>
  );
}
