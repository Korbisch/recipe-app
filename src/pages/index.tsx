import Head from "next/head";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Recipes } from "../../components/Recipes";
import { LoadingPage } from "../../components/LoadingPage";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (user) {
    return <Recipes />;
  }

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
