import React from "react";
import { NavBar } from "../../../components/NavBar";
import { Container, Image } from "@mantine/core";
import { Servings } from "../../../components/RecipeDetails/Servings";
import { Ingredients } from "../../../components/RecipeDetails/Ingredients";
import { Instructions } from "../../../components/RecipeDetails/Instructions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Recipe } from "@/pages/_app";
import { TitleWithBackButton } from "../../../components/TitleWithBackButton";
import { GetServerSidePropsContext } from "next";

interface RecipeDetailsPageProps {
  recipe: Recipe;
}

export default withPageAuthRequired(function RecipeDetailsPage({
  recipe,
}: RecipeDetailsPageProps) {
  return (
    <>
      <NavBar />
      <Container my="md">
        <TitleWithBackButton title={recipe.name} />
        {recipe.image && (
          <Image
            src={recipe.image}
            mb={20}
            radius="md"
            alt={`Bild des Rezept ${recipe.name}`}
          />
        )}
        <Servings count={recipe.servings} />
        <Ingredients ingredients={recipe.ingredients} />
        <Instructions
          instructions={recipe.instructions}
          ingredients={recipe.ingredients}
        />
      </Container>
    </>
  );
});

export async function getServerSideProps(context: GetServerSidePropsContext) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/recipes/${context.params?.id}`
    );
    const recipe = await response.json();

    return { props: { recipe } };
  } catch (e) {
    console.error(e);
  }
}
