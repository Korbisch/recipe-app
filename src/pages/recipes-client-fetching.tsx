import React, { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { Recipe } from "@/pages/_app";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { RecipeList } from "../../components/RecipeList/RecipeList";
import { LoadingPage } from "../../components/LoadingPage";

export default withPageAuthRequired(function Recipes() {
  const [recipes, setRecipes] = useState<Recipe[]>();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/recipes`)
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <LoadingPage />;
  if (!recipes) return <p>No profile data</p>;

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
