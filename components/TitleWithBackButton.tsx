import { useRouter } from "next/router";
import { Button, Flex } from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import React from "react";

export const TitleWithBackButton = ({ title }: { title: string }) => {
  const router = useRouter();
  return (
    <Flex justify="space-between" align="center">
      <h2>{title}</h2>
      <Button
        leftIcon={<IconArrowBack />}
        variant={"default"}
        onClick={() => router.back()}
      >
        Zurück
      </Button>
    </Flex>
  );
};
