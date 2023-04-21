import { useRouter } from "next/router";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  FileInput,
  LoadingOverlay,
  TextInput,
} from "@mantine/core";
import { TitleWithBackButton } from "../TitleWithBackButton";
import { IconSalad } from "@tabler/icons-react";
import { ServingInputSection } from "./ServingInputSection";
import { IngredientInputSection } from "./IngredientInputSection/IngredientInputSection";
import { InstructionInputSection } from "./InstructionInputSection/InstructionInputSection";

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

export const AddRecipePage = () => {
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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values: FormValues) => {
    setIsSubmitting(true);
    fetch(`/api/recipes`, {
      method: "POST",
      body: JSON.stringify(values),
    }).then(() => {
      router.push("/");
    });
  };

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay
          visible={isSubmitting}
          overlayBlur={1}
          loaderProps={{ variant: "bars", size: "xl" }}
        />
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
            <Button c="black" mt={20} type="submit" disabled={isSubmitting}>
              Rezept speichern
            </Button>
          </Center>
        </form>
      </Box>
    </>
  );
};
