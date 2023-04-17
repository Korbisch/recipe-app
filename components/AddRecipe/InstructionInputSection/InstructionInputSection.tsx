import { Button, Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import React from "react";
import { UseFormReturnType } from "@mantine/form";
import { FormValues } from "@/pages/add-recipe";
import { InstructionInputForm } from "./InstructionInputForm";
import { randomId } from "@mantine/hooks";

export const InstructionInputSection = (props: {
  form: UseFormReturnType<FormValues, (values: FormValues) => FormValues>;
}) => {
  const instructionInputFields = props.form.values.instructions.map(
    (item, index) => (
      <InstructionInputForm key={item.key} form={props.form} index={index} />
    )
  );

  return (
    <>
      <h3>Schritte</h3>
      {instructionInputFields}
      <Flex justify="flex-end">
        <Button
          mt={20}
          leftIcon={<IconPlus />}
          variant="default"
          onClick={() =>
            props.form.insertListItem("instructions", {
              description: "",
              ingredientIndices: [],
              key: randomId(),
            })
          }
        >
          Schritt
        </Button>
      </Flex>
    </>
  );
};
