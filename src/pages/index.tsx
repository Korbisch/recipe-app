import Head from "next/head";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Center, Loader } from "@mantine/core";
import { Recipes } from "../../components/Recipes";

export default function Home() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return (
      <Center m={"auto"}>
        <Loader size="xl" variant="bars" />
      </Center>
    );
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
