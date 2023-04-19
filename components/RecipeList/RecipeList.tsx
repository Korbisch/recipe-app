import { Recipe } from "@/pages/_app";
import React, { useEffect } from "react";
import { Grid, UnstyledButton } from "@mantine/core";
import { RecipeCard } from "./RecipeCard";
import { useRouter } from "next/router";
import { useRecipeContext } from "../../state/useRecipeContext";

export const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  const router = useRouter();
  const { setRecipes } = useRecipeContext();

  useEffect(() => {
    setRecipes(recipes);
  }, [recipes, setRecipes]);

  return (
    <Grid>
      {recipes.map((recipe) => (
        <Grid.Col key={recipe._id} span={6} md={3} lg={3}>
          <UnstyledButton
            onClick={() =>
              router.push(`/recipes/${recipe._id}`, undefined, {
                shallow: true,
              })
            }
          >
            <RecipeCard image={recipe.image} title={recipe.name} />
          </UnstyledButton>
        </Grid.Col>
      ))}
    </Grid>
  );
};
