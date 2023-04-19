import { Recipe } from "@/pages/_app";
import { randomId } from "@mantine/hooks";
import React from "react";
import { Grid } from "@mantine/core";
import Link from "next/link";
import { RecipeCard } from "./RecipeCard";

export const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  return (
    <Grid>
      {recipes.map((recipe) => (
        <Grid.Col key={randomId()} span={6} md={3} lg={3}>
          <Link
            style={{ textDecoration: "none" }}
            href={`/recipes/${recipe._id}`}
            as={`/recipes/${recipe._id}`}
          >
            <RecipeCard image={recipe.image} title={recipe.name} />
          </Link>
        </Grid.Col>
      ))}
    </Grid>
  );
};
