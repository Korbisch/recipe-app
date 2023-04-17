import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NavBar } from "../../components/NavBar";
import React from "react";
import {
  Button,
  Center,
  Container,
  Grid,
  NumberInput,
  Textarea,
  TextInput,
  Text,
} from "@mantine/core";
import { IconPlus, IconSalad, IconUsers } from "@tabler/icons-react";
import { TitleWithBackButton } from "../../components/TitleWithBackButton";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IngredientInput } from "../../components/IngredientInput";

export interface FormValues {
  servings: number;
  name: string;
  ingredients: {
    amount: string;
    unit: string;
    name: string;
    key: string;
  }[];
}

export default withPageAuthRequired(function AddRecipe() {
  const defaultIngredientValues = {
    amount: "",
    unit: "",
    name: "",
  };

  const form = useForm({
    initialValues: {
      name: "",
      servings: 2,
      ingredients: [
        {
          ...defaultIngredientValues,
          key: randomId(),
        },
      ],
    },
  });

  const ingredientInputFields = form.values.ingredients.map((item, index) => (
    <IngredientInput key={item.key} form={form} index={index} />
  ));

  return (
    <>
      <NavBar />
      <Container my="md">
        <TitleWithBackButton title="Neues Rezept" />
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <TextInput
            label="Name"
            icon={<IconSalad />}
            placeholder="Name"
            {...form.getInputProps("name")}
          />

          <NumberInput
            icon={<IconUsers />}
            defaultValue={2}
            min={1}
            placeholder="Portionen"
            label="Portionen"
            {...form.getInputProps("servings")}
          />

          {/*<IngredientInputSection form={} />*/}

          <h3>Zutaten</h3>
          <Grid grow gutter="xs">
            <Grid.Col span={2}>
              <Text weight={500} size="sm">
                Menge
              </Text>
            </Grid.Col>
            <Grid.Col span={2}>
              <Text weight={500} size="sm">
                Einheit
              </Text>
            </Grid.Col>
            <Grid.Col span={8}>
              <Text weight={500} size="sm">
                Zutat
              </Text>
            </Grid.Col>
          </Grid>
          {ingredientInputFields}
          <Button
            c="black"
            leftIcon={<IconPlus />}
            variant="default"
            mt={20}
            onClick={() =>
              form.insertListItem("ingredients", {
                ...defaultIngredientValues,
                key: randomId(),
              })
            }
          >
            Zutat hinzufügen
          </Button>

          <Center>
            <Button c="black" mt={20} type="submit">
              Rezept speichern
            </Button>
          </Center>
        </form>

        <h3>Schritte</h3>
        <Textarea
          placeholder="Schritte"
          label="Schritte"
          autosize
          minRows={5}
        />
      </Container>
    </>
  );
});
