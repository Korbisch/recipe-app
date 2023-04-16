import { ActionIcon, Card, Center, Grid, Text } from "@mantine/core";
import { IconPaperBag } from "@tabler/icons-react";
import React, { FC } from "react";
import { Ingredient } from "../Recipes";

interface IngredientsProps {
  ingredients: Ingredient[];
}

export const Ingredients: FC<IngredientsProps> = ({ ingredients }) => {
  return (
    <>
      <h3>Zutaten</h3>
      {ingredients.map((ingredient) => {
        return (
          <Card key={ingredient.name}>
            <Card.Section>
              <Grid px={10} justify={"center"} align={"center"}>
                <Grid.Col span={2} m={"auto"}>
                  <Center>
                    <ActionIcon variant="light" size="xl">
                      <IconPaperBag color="black" size="1.5rem" stroke={1.5} />
                    </ActionIcon>
                  </Center>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Text weight={500}>{ingredient.name}</Text>
                </Grid.Col>
                <Grid.Col span={2}>
                  {ingredient.amount} {ingredient.unit}
                </Grid.Col>
              </Grid>
            </Card.Section>
          </Card>
        );
      })}
    </>
  );
};
