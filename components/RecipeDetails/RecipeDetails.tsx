import { Recipe } from "../Recipes";
import React, { FC } from "react";
import { Button, Container, Flex, Image } from "@mantine/core";
import { NavBar } from "../NavBar";
import { IconArrowBack } from "@tabler/icons-react";
import { Servings } from "./Servings";
import { Ingredients } from "./Ingredients";
import { Instructions } from "./Instructions";

interface RecipeDetailsProps {
  recipe: Recipe;
  onBackButtonClick: () => void;
}

// TODO: create a PageWrapper with Navbar and container md

export const RecipeDetails: FC<RecipeDetailsProps> = ({
  recipe,
  onBackButtonClick,
}) => {
  return (
    <>
      <NavBar />
      <Container my="md">
        <Flex justify="space-between" align="center">
          <h2>{recipe.title}</h2>
          <Button
            leftIcon={<IconArrowBack />}
            variant={"default"}
            onClick={onBackButtonClick}
          >
            Zurück
          </Button>
        </Flex>
        <Image
          src={recipe.image}
          mb={20}
          radius="md"
          alt={`Bild des Rezept ${recipe.title}`}
        />
        <Servings count={recipe.details.servings} />
        <Ingredients ingredients={recipe.details.ingredients} />
        <Instructions instructions={recipe.details.instructions} />
      </Container>
    </>
  );
};
