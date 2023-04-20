import React from "react";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { RecipeList } from "../../components/RecipeList/RecipeList";
import useSWR from "swr";
import { Recipe } from "@/pages/_app";
import { LoadingPage } from "../../components/LoadingPage";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default withPageAuthRequired(function Recipes() {
  const { recipes, error, isLoading } = useRecipes();

  if (isLoading || !recipes) return <LoadingPage />;
  if (error) return <p>Error</p>;

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

export const useRecipes = () => {
  const { data, isLoading, error } = useSWR<Recipe[], any>(
    "/api/recipes",
    fetcher
  );

  return { recipes: data, isLoading, error };
};
