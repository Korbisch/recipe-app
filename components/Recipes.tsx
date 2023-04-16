import React, { useState } from "react";
import { RecipeCard } from "./RecipeCard";
import img from "../public/pasta.jpg";
import { Button, Container, Grid, UnstyledButton } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavBar } from "./NavBar";
import { RecipeDetails } from "./RecipeDetails/RecipeDetails";
import { v4 as uuidv4 } from "uuid";

// TODO: checkboxes next to ingredients for cook mode

export interface Recipe {
  id: string;
  image: string;
  title: string;
  details: {
    servings: number;
    ingredients: Ingredient[];
    instructions: Instruction[];
  };
}

export interface Ingredient {
  amount: string;
  unit: string;
  name: string;
}

export interface Instruction {
  ingredients: Ingredient[];
  description: string;
}

const ingredients: Ingredient[] = Array(4).fill({
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

export const Recipes = () => {
  const [currentRecipeId, setCurrentRecipeId] = useState<string | null>(null);

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
