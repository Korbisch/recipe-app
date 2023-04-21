import { createStyles } from "@mantine/core";
import { useRouter } from "next/router";
import { useRecipeContext } from "../../state/useRecipeContext";
import { TitleWithBackButton } from "../TitleWithBackButton";
import Image from "next/image";
import React from "react";
import { Servings } from "./Servings";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";

const useStyles = createStyles(() => ({
  image: {
    marginBottom: 20,
    borderRadius: "md",
  },
}));

export const RecipeDetailsPage = () => {
  const { classes } = useStyles();
  const router = useRouter();
  const recipeId = router.query.id;

  const { recipes } = useRecipeContext();
  const recipe = recipes?.find((recipe) => recipe._id === recipeId);

  if (!recipe) {
    router.push("/recipes");
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
};
