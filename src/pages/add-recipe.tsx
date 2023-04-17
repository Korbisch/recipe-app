import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NavBar } from "../../components/NavBar";
import React from "react";
import {
  Button,
  Center,
  Container,
  NumberInput,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconSalad, IconUsers } from "@tabler/icons-react";
import { TitleWithBackButton } from "../../components/TitleWithBackButton";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IngredientInputSection } from "../../components/IngredientInputSection/IngredientInputSection";

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

          <IngredientInputSection
            form={form}
            defaultIngredientValues={defaultIngredientValues}
          />

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
