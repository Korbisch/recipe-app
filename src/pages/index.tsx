import Head from "next/head";
import React from "react";
import { NavBar } from "../../components/NavBar";
import { Header } from "../../components/LandingPage/Header";
import { useUser } from "@auth0/nextjs-auth0/client";
import { RecipeList } from "../../components/RecipeList/RecipeList";
import { LoadingPage } from "../../components/LoadingPage";
import { Recipe } from "@/pages/_app";

export default function Home({ recipes }: { recipes: Recipe[] }) {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <LoadingPage />;
  }

  if (user) {
    return <RecipeList recipes={recipes} />;
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
