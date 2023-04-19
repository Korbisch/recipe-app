import React from "react";
import { Image } from "@mantine/core";
import { Servings } from "../../../components/RecipeDetails/Servings";
import { Ingredients } from "../../../components/RecipeDetails/Ingredients";
import { Instructions } from "../../../components/RecipeDetails/Instructions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { TitleWithBackButton } from "../../../components/TitleWithBackButton";
import { useRecipeContext } from "../../../state/useRecipeContext";
import { useRouter } from "next/router";

export default withPageAuthRequired(function RecipeDetailsPage() {
  const router = useRouter();
  const recipeId = router.query.id;

  const { recipes } = useRecipeContext();
  const recipe = recipes?.find((recipe) => recipe._id === recipeId);

  // TODO: error page
  if (!recipe) {
    return <></>;
  }

  return (
    <>
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
    </>
  );
});
