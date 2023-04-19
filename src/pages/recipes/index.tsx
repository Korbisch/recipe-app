import React from "react";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { Recipe } from "@/pages/_app";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { RecipeList } from "../../../components/RecipeList/RecipeList";

export default withPageAuthRequired(function Recipes({
  recipes,
}: {
  recipes: Recipe[];
}) {
  console.log(recipes);
  return (
    <>
      <h2>Deine Rezepte</h2>
      <Link href={"/add-recipe"} style={{ textDecoration: "none" }}>
        <Button leftIcon={<IconPlus />} variant="default" mb={20}>
          Rezept hinzufügen
        </Button>
      </Link>
      <RecipeList recipes={recipes} />
    </>
  );
});

// @ts-ignore
export async function getServerSideProps(context) {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/recipes`, {
      headers: { cookie: context.req.headers.cookie },
    });
    const recipes = await response.json();

    return { props: { recipes } };
  } catch (e) {
    console.error(e);
  }
}
