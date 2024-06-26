import { Card, Text, Group, createStyles, rem, Center } from "@mantine/core";
import React from "react";
import { IconSalad } from "@tabler/icons-react";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : "#f8f8f8",
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },
}));

interface RecipeCardProps {
  image?: string;
  title: string;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ image, title }) => {
  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section withBorder miw={169}>
        {image ? (
          <Image src={image} alt={title} height={180} width={170} />
        ) : (
          <Center>
            <IconSalad
              height={180}
              size={60}
              strokeWidth={1.5}
              color={"#b3c6e6"}
            />
          </Center>
        )}
      </Card.Section>
      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="lg" fw={500}>
            {title}
          </Text>
        </Group>
      </Card.Section>
    </Card>
  );
};
