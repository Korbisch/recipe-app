import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import img from "../public/pasta.jpg";
import { Button, Container, Grid, UnstyledButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavBar } from "./NavBar";
import { RecipeDetails } from "./RecipeDetails";
import { v4 as uuidv4 } from "uuid";

// TODO: checkboxes next to ingredients for cook mode

export interface Recipe {
  id: number;
  image: string;
  title: string;
  details: {
    portions: number;
    ingredients: {
      amount: string;
      unit: string;
      name: string;
    }[];
    instructions: string;
  };
}

const recipes: Recipe[] = Array(5).fill({
  id: uuidv4(),
  image: img.src,
  title: "My First Recipe",
  details: {
    portions: 3,
    ingredients: Array(5).fill({ amount: "100", unit: "g", name: "Mehl" }),
    instructions: "1. Mixen\n 2. Pürieren\n 3. Backen bei 200° C",
  },
});

export const Recipes = () => {
  const [currentRecipeId, setCurrentRecipeId] = useState<number | null>(null);

  if (currentRecipeId) {
    const currentRecipe = recipes.find(
      (recipe) => recipe.id === currentRecipeId
    ) as Recipe;
    return (
      <RecipeDetails
        recipe={currentRecipe}
        onBackButtonClick={() => setCurrentRecipeId(null)}
      />
    );
  }

  return (
    <>
      <NavBar />
      <Container my="md">
        <h2>Deine Rezepte</h2>
        <Button leftIcon={<IconPlus />} variant="default" mb={20}>
          Rezept hinzufügen
        </Button>
        <Grid>
          {recipes.map((recipe) => (
            <Grid.Col key={recipe.id} span={6} md={3} lg={3}>
              <UnstyledButton onClick={() => setCurrentRecipeId(recipe.id)}>
                <RecipeCard image={recipe.image} title={recipe.title} />
              </UnstyledButton>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};
