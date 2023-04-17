import React from "react";
import { RecipeCard } from "./RecipeCard";
import { Button, Container, Grid } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavBar } from "../NavBar";
import Link from "next/link";
import { Recipe } from "@/pages/_app";

// TODO: checkboxes next to ingredients for cook mode

export const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
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
              <Link
                href={`/recipe-details/${encodeURIComponent(recipe.id)}`}
                style={{ textDecoration: "none" }}
              >
                <RecipeCard image={recipe.image} title={recipe.title} />
              </Link>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};
