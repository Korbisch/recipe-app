import React, { FC } from "react";
import { Badge, Card, Flex, Grid, Text } from "@mantine/core";
import { RecipeInstruction } from "@/pages/_app";

interface InstructionsProps {
  instructions: RecipeInstruction[];
}

export const Instructions: FC<InstructionsProps> = ({ instructions }) => {
  return (
    <>
      <h3>Schritte</h3>
      {instructions.map((instruction, index) => {
        return (
          <Card key={instruction.description} withBorder radius="md" mb="md">
            <Card.Section withBorder inheritPadding py="xs">
              <Grid justify="space-between">
                <Grid.Col span={2}>
                  <Badge variant="filled" size="xl" radius="sm">
                    <Text size="xl" color="black">
                      {index + 1}
                    </Text>
                  </Badge>
                </Grid.Col>
                <Grid.Col span={8}>
                  <Flex justify="flex-end" wrap="wrap" gap="xs">
                    {instruction.ingredients.map((ingredient, index) => {
                      return (
                        <Badge key={index} variant="outline">
                          <Text color="black">
                            {ingredient.amount} {ingredient.unit}{" "}
                            {ingredient.name}
                          </Text>
                        </Badge>
                      );
                    })}
                  </Flex>
                </Grid.Col>
              </Grid>
            </Card.Section>
            <Card.Section p="xs">{instruction.description}</Card.Section>
          </Card>
        );
      })}
    </>
  );
};
