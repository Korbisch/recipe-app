import { UserProvider } from "@auth0/nextjs-auth0/client";
import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import img from "../../public/pasta.jpg";

export interface Recipe {
  id: string;
  image: string;
  title: string;
  details: {
    servings: number;
    ingredients: RecipeIngredient[];
    instructions: RecipeInstruction[];
  };
}

export interface RecipeIngredient {
  amount: string;
  unit: string;
  name: string;
}

export interface RecipeInstruction {
  ingredients: RecipeIngredient[];
  description: string;
}

const ingredients: RecipeIngredient[] = Array(4).fill({
  amount: "100",
  unit: "g",
  name: "Mehl",
});

const recipes: Recipe[] = Array(5).fill({
  id: uuidv4(),
  image: img.src,
  title: "My First Recipe",
  details: {
    servings: 3,
    ingredients,
    instructions: Array(6).fill({
      ingredients,
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    }),
  },
} as Recipe);

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
          <Component {...pageProps} recipes={recipes} />
        </UserProvider>
      </MantineProvider>
    </>
  );
}
