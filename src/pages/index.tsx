import Head from "next/head";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/LandingPage/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoadingPage } from "../../components/LoadingPage";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useUser();

  if (!user && isLoading) {
    return <LoadingPage />;
  }

  if (user) {
    router.push("/recipes");
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
