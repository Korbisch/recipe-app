import {
  ActionIcon,
  Badge,
  Box,
  Group,
  MultiSelect,
  Text,
  Textarea,
} from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import React from "react";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "../AddRecipePage";

export const InstructionInputForm = (props: {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  index: number;
}) => {
  const filteredIngredients = props.form.values.ingredients.filter(
    (ingredient) => ingredient.name !== ""
  );
  const ingredientSelectorValues = filteredIngredients.map(
    (ingredient, index) => {
      const formattedIngredient = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
      return {
        value: index.toString(),
        label: formattedIngredient,
      };
    }
  );

  return (
    <Box mt={10}>
      <Group position="apart">
        <Badge variant="filled" size="xl" radius="sm">
          <Text size="xl" color="black">
            {props.index + 1}
          </Text>
        </Badge>
        <ActionIcon
          onClick={() => props.form.removeListItem("instructions", props.index)}
        >
          <IconTrash color="red" size="1rem" />
        </ActionIcon>
      </Group>
      <Textarea
        placeholder="Mehl mixen bis staubig."
        label="Beschreibung"
        autosize
        minRows={1}
        {...props.form.getInputProps(`instructions.${props.index}.description`)}
      />
      <MultiSelect
        style={{ flexGrow: 1 }}
        disabled={ingredientSelectorValues.length < 1}
        data={ingredientSelectorValues}
        label="Zutaten"
        placeholder="Wähle alle Zutaten für diesen Schritt"
        {...props.form.getInputProps(
          `instructions.${props.index}.ingredientIndices`
        )}
      />
    </Box>
  );
};
