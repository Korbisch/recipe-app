import React from "react";
import { RecipeCard } from "./RecipeCard";
import img from "../public/pasta.jpg";
import { Button, Container, Grid } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavBar } from "./NavBar";

export const Recipes = () => {
  // TODO: checkboxes next to ingredients

  const recipes = [
    <RecipeCard
      key={Math.random()}
      image={img.src}
      title={"My First Recipe"}
      description={"Nom Nom Nom"}
    />,
    <RecipeCard
      key={Math.random()}
      image={img.src}
      title={"My First Recipe"}
      description={"Nom Nom Nom"}
    />,
    <RecipeCard
      key={Math.random()}
      image={img.src}
      title={"My First Recipe"}
      description={"Nom Nom Nom"}
    />,
    <RecipeCard
      key={Math.random()}
      image={img.src}
      title={"My First Recipe"}
      description={"Nom Nom Nom"}
    />,
  ];

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
            <Grid.Col key={Math.random()} span={6} md={3} lg={3}>
              {recipe}
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </>
  );
};
