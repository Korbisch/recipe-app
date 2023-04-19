import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import React from "react";
import { Button, Center, FileInput, TextInput } from "@mantine/core";
import { IconSalad } from "@tabler/icons-react";
import { TitleWithBackButton } from "../../components/TitleWithBackButton";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IngredientInputSection } from "../../components/AddRecipe/IngredientInputSection/IngredientInputSection";
import { ServingInputSection } from "../../components/AddRecipe/ServingInputSection";
import { InstructionInputSection } from "../../components/AddRecipe/InstructionInputSection/InstructionInputSection";
import { useRouter } from "next/router";

export interface FormValues {
  servings: number;
  name: string;
  ingredients: {
    amount: string;
    unit: string;
    name: string;
    key: string;
  }[];
  instructions: {
    description: string;
    ingredientIndices: number[];
    key: string;
  }[];
}

export default withPageAuthRequired(function AddRecipe() {
  const router = useRouter();
  const defaultIngredientValues = {
    amount: "",
    unit: "",
    name: "",
  };

  const form = useForm<FormValues>({
    initialValues: {
      name: "",
      servings: 2,
      ingredients: [
        {
          ...defaultIngredientValues,
          key: randomId(),
        },
      ],
      instructions: [
        { description: "", ingredientIndices: [], key: randomId() },
      ],
    },
    validate: {
      servings: (value) => (value < 2 ? "Invalid Servings" : null),
    },
  });

  const handleSubmit = (values: FormValues) => {
    fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify(values),
    }).then(() => router.push("/"));
  };

  return (
    <>
      <TitleWithBackButton title="Neues Rezept" />
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          label="Name"
          icon={<IconSalad />}
          placeholder="Name"
          {...form.getInputProps("name")}
        />

        <ServingInputSection form={form} />

        <FileInput mt={10} placeholder="schweinebraten.jpg" label="Bild" />

        <IngredientInputSection
          form={form}
          defaultIngredientValues={defaultIngredientValues}
        />

        <InstructionInputSection form={form} />

        <Center>
          <Button c="black" mt={20} type="submit">
            Rezept speichern
          </Button>
        </Center>
      </form>
    </>
  );
});
