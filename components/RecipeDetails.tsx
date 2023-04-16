import { Recipe } from "./Recipes";
import React, { FC } from "react";
import {
  ActionIcon,
  Button,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Image,
} from "@mantine/core";
import { NavBar } from "./NavBar";
import { IconArrowBack, IconPaperBag } from "@tabler/icons-react";

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
        <h3>Zutaten</h3>
        {recipe.details.ingredients.map((ingredient) => {
          return (
            <Card key={ingredient.name}>
              <Card.Section>
                <Grid px={10} justify={"center"} align={"center"}>
                  <Grid.Col span={2} m={"auto"}>
                    <Center>
                      <ActionIcon variant="light" size="xl">
                        <IconPaperBag
                          color="black"
                          size="1.5rem"
                          stroke={1.5}
                        />
                      </ActionIcon>
                    </Center>
                  </Grid.Col>
                  <Grid.Col span={8}>{ingredient.name}</Grid.Col>
                  <Grid.Col span={2}>
                    {ingredient.amount} {ingredient.unit}
                  </Grid.Col>
                </Grid>
              </Card.Section>
            </Card>
          );
        })}
        <h3>Schritte</h3>
        <p>{recipe.details.instructions}</p>
      </Container>
    </>
  );
};
