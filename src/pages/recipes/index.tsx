import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NavBar } from "../../../components/NavBar";
import { RecipeCard } from "../../../components/RecipeCard";
import img from "../../../public/pasta.jpg";
import { Container, Grid, Skeleton } from "@mantine/core";

export default withPageAuthRequired(function Recipes() {
  // TODO: checkboxes next to ingredients

  const child = <Skeleton height={140} radius="md" animate={false} />;

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
  console.log(recipes);

  return (
    <>
      <NavBar />
      <h1>Deine Rezepte</h1>
      <Container my="md">
        <Grid>
          {recipes.map((recipe) => (
            <Grid.Col key={Math.random()} xs={3}>
              {recipe}
            </Grid.Col>
          ))}
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
          <Grid.Col xs={3}>{child}</Grid.Col>
        </Grid>
      </Container>
    </>
  );
});
