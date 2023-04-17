import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { NavBar } from "../../components/NavBar";
import React from "react";
import {
  ActionIcon,
  Badge,
  Button,
  Center,
  Container,
  FileInput,
  Flex,
  Group,
  MultiSelect,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { IconPlus, IconSalad, IconTrash } from "@tabler/icons-react";
import { TitleWithBackButton } from "../../components/TitleWithBackButton";
import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { IngredientInputSection } from "../../components/AddRecipe/IngredientInputSection/IngredientInputSection";
import { ServingInputSection } from "../../components/AddRecipe/ServingInputSection";

// TODO: do not zoom on focus

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

  const ingredientSelectorValues = form.values.ingredients.map((ingredient) => {
    const formattedIngredient = `${ingredient.amount} ${ingredient.unit} ${ingredient.name}`;
    return {
      value: ingredient.key,
      label: formattedIngredient,
    };
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

          <ServingInputSection form={form} />

          <FileInput mt={10} placeholder="schweinebraten.jpg" label="Bild" />

          <IngredientInputSection
            form={form}
            defaultIngredientValues={defaultIngredientValues}
          />

          <h3>Schritte</h3>

          <Group position="apart">
            <Badge variant="filled" size="xl" radius="sm">
              <Text size="xl" color="black">
                {1}
              </Text>
            </Badge>
            <ActionIcon onClick={() => null}>
              <IconTrash color="red" size="1rem" />
            </ActionIcon>
          </Group>
          <Textarea
            placeholder="Mehl mixen bis staubig."
            label="Beschreibung"
            autosize
            minRows={3}
          />
          <MultiSelect
            style={{ flexGrow: 1 }}
            data={ingredientSelectorValues}
            label="Zutaten"
            placeholder="Wähle alle Zutaten für diesen Schritt"
          />
          <Flex justify="flex-end">
            <Button
              mt={20}
              leftIcon={<IconPlus />}
              variant="default"
              onClick={() => null}
            >
              Schritt
            </Button>
          </Flex>

          <Center>
            <Button c="black" mt={20} type="submit">
              Rezept speichern
            </Button>
          </Center>
        </form>
      </Container>
    </>
  );
});
