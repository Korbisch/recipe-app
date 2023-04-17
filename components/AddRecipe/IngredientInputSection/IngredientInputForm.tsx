import { ActionIcon, createStyles, Grid, TextInput } from "@mantine/core";
import React from "react";
import { UseFormReturnType } from "@mantine/form";
import { IconTrash } from "@tabler/icons-react";
import { FormValues } from "@/pages/add-recipe";
import { IngredientInputGridColumns } from "./IngredientInputSection";

const useStyles = createStyles(() => ({
  center: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
}));

export const IngredientInputForm = (props: {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
  index: number;
}) => {
  const { classes } = useStyles();
  return (
    <Grid grow gutter="xs">
      <Grid.Col span={IngredientInputGridColumns.first}>
        <TextInput
          placeholder="100"
          {...props.form.getInputProps(`ingredients.${props.index}.amount`)}
        />
      </Grid.Col>
      <Grid.Col span={IngredientInputGridColumns.second}>
        <TextInput
          placeholder="g"
          {...props.form.getInputProps(`ingredients.${props.index}.unit`)}
        />
      </Grid.Col>
      <Grid.Col span={IngredientInputGridColumns.third}>
        <TextInput
          placeholder="Mehl"
          {...props.form.getInputProps(`ingredients.${props.index}.name`)}
        />
      </Grid.Col>
      <Grid.Col
        span={IngredientInputGridColumns.fourth}
        className={classes.center}
      >
        <ActionIcon
          onClick={() => props.form.removeListItem("ingredients", props.index)}
        >
          <IconTrash color="red" size="1rem" />
        </ActionIcon>
      </Grid.Col>
    </Grid>
  );
};
