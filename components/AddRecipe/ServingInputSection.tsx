import { UseFormReturnType } from "@mantine/form";
import { ActionIcon, Group, NumberInput, rem, Text } from "@mantine/core";
import { IconMinus, IconPlus, IconUsers } from "@tabler/icons-react";
import React from "react";
import { FormValues } from "@/pages/add-recipe";

export function ServingInputSection({
  form,
}: {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
}) {
  return (
    <>
      {/* The text color of the other labels is not black */}
      <Text
        mt={10}
        style={{ fontSize: "14px", fontWeight: 500, color: "#212529" }}
      >
        Portionen
      </Text>
      <Group spacing={10} mt={1}>
        <IconUsers color={"#adb5bd"} />
        <ActionIcon
          size={42}
          variant="default"
          onClick={() =>
            form.setFieldValue("servings", form.values.servings - 1)
          }
        >
          <IconMinus />
        </ActionIcon>
        <NumberInput
          size={"md"}
          hideControls
          value={form.values.servings}
          styles={{ input: { width: rem(54), textAlign: "center" } }}
        />
        <ActionIcon
          size={42}
          variant="default"
          onClick={() =>
            form.setFieldValue("servings", form.values.servings + 1)
          }
        >
          <IconPlus />
        </ActionIcon>
      </Group>
    </>
  );
}
