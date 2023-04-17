import React from "react";
import { useRouter } from "next/router";
import { NavBar } from "../../../components/NavBar";
import { Button, Container, Flex, Image } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import { Servings } from "../../../components/RecipeDetails/Servings";
import { Ingredients } from "../../../components/RecipeDetails/Ingredients";
import { Instructions } from "../../../components/RecipeDetails/Instructions";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { Recipe } from "@/pages/_app";

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
        <Flex justify="space-between" align="center">
          <h2>{recipe.title}</h2>
          <Button
            leftIcon={<IconArrowBack />}
            variant={"default"}
            onClick={() => router.back()}
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
});
