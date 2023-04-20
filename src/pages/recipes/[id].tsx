import React from "react";
import { Servings } from "../../../components/RecipeDetails/Servings";
import { Ingredients } from "../../../components/RecipeDetails/Ingredients";
import { Instructions } from "../../../components/RecipeDetails/Instructions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { TitleWithBackButton } from "../../../components/TitleWithBackButton";
import { useRecipeContext } from "../../../state/useRecipeContext";
import { useRouter } from "next/router";
import Image from "next/image";
import { createStyles } from "@mantine/core";

const useStyles = createStyles(() => ({
  image: {
    marginBottom: 20,
    borderRadius: "md",
  },
}));

export default withPageAuthRequired(function RecipeDetailsPage() {
  const { classes } = useStyles();
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
          width={358}
          height={358}
          className={classes.image}
          alt={recipe.name}
          priority
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
