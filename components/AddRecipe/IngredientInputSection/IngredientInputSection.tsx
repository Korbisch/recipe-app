import { Box, Button, Flex, Grid, Text } from "@mantine/core";
import React from "react";
import { IconPlus } from "@tabler/icons-react";
import { randomId } from "@mantine/hooks";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "@/pages/add-recipe";
import { Ingredient } from "@/pages/_app";
import { IngredientInputForm } from "./IngredientInputForm";

export enum IngredientInputGridColumns {
  first = 2,
  second = 2,
  third = 6,
  fourth = 2,
}

export const IngredientInputSection = (props: {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  defaultIngredientValues: Ingredient;
}) => {
  const ingredientInputFields = props.form.values.ingredients.map(
    (item, index) => (
      <IngredientInputForm key={item.key} form={props.form} index={index} />
    )
  );

  return (
    <>
      <Box mt={40}>
        <h3>Zutaten</h3>
      </Box>
      <Grid grow gutter="xs">
        <Grid.Col span={IngredientInputGridColumns.first}>
          <Text weight={500} size="sm">
            Menge
          </Text>
        </Grid.Col>
        <Grid.Col span={IngredientInputGridColumns.second}>
          <Text weight={500} size="sm">
            Einheit
          </Text>
        </Grid.Col>
        <Grid.Col
          span={
            IngredientInputGridColumns.third + IngredientInputGridColumns.fourth
          }
        >
          <Text weight={500} size="sm">
            Zutat
          </Text>
        </Grid.Col>
      </Grid>
      {ingredientInputFields}
      <Flex justify="flex-end">
        <Button
          mt={20}
          leftIcon={<IconPlus />}
          variant="default"
          onClick={() =>
            props.form.insertListItem("ingredients", {
              ...props.defaultIngredientValues,
              key: randomId(),
            })
          }
        >
          Zutat
        </Button>
      </Flex>
    </>
  );
};
