import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import React from "react";
import { RecipeProvider } from "../../state/useRecipeContext";
import { Layout } from "../../components/Layout";

export interface User {
  id: string;
  email: string;
  name: string;
  created_at: string;
  recipes: Recipe[];
}

export interface Recipe {
  _id: string;
  image: string;
  name: string;
  servings: number;
  ingredients: RecipeIngredient[];
  instructions: RecipeInstruction[];
}

export interface RecipeIngredient {
  amount: string;
  unit: string;
  name: string;
}

export interface RecipeInstruction {
  ingredientIndices: number[];
  description: string;
}

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>PlateMate</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            "light-yellow": [
              "#FFFDF1",
              "#FFF0A5",
              "#FFE359",
              "#FFD91B",
              "#E8C100",
              "#BE9E00",
              "#9C8200",
              "#806A00",
            ],
          },
          primaryShade: 1,
          primaryColor: "light-yellow",
        }}
      >
        <UserProvider>
          <RecipeProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </RecipeProvider>
        </UserProvider>
      </MantineProvider>
    </>
  );
}
