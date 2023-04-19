import React from "react";
import { useRouter } from "next/router";
import { NavBar } from "../../../components/NavBar";
import { Container, Image } from "@mantine/core";
import { Servings } from "../../../components/RecipeDetails/Servings";
import { Ingredients } from "../../../components/RecipeDetails/Ingredients";
import { Instructions } from "../../../components/RecipeDetails/Instructions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Recipe } from "@/pages/_app";
import { TitleWithBackButton } from "../../../components/TitleWithBackButton";

export default withPageAuthRequired(function RecipeDetailsPage({
  recipes,
}: {
  recipes: Recipe[];
}) {
  const router = useRouter();
  const queryId = router.query.all && router.query.all[0];

  const recipe = recipes.find((recipe) => recipe.id === queryId) as Recipe;

  return (
    <>
      <NavBar />
      <Container my="md">
        <TitleWithBackButton title={recipe.title} />
        {recipe.image && (
          <Image
            src={recipe.image}
            mb={20}
            radius="md"
            alt={`Bild des Rezept ${recipe.title}`}
          />
        )}
        <Servings count={recipe.details.servings} />
        <Ingredients ingredients={recipe.details.ingredients} />
        <Instructions instructions={recipe.details.instructions} />
      </Container>
    </>
  );
});
