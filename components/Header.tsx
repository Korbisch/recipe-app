import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
  SimpleGrid,
} from "@mantine/core";
import image from "../public/eating_together.svg";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}));

export function Header() {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src={image.src}
          className={classes.mobileImage}
          alt={"Header image"}
        />
        <div>
          <Title className={classes.title}>
            Alle deine{" "}
            <span className={classes.highlight}>Lieblingsrezepte</span> an einem
            Ort!
          </Title>
          <Text color="dimmed" mt="md">
            Speichere deine Rezepte an einem Ort und greife von überall auf sie
            zu!
          </Text>
          <Group mt={30}>
            <Button
              c="black"
              onClick={() => router.push("/api/auth/login")}
              radius="xl"
              size="md"
              className={classes.control}
            >
              Get Started
            </Button>
          </Group>
        </div>
        <Image
          src={image.src}
          className={classes.desktopImage}
          alt={"Header image"}
        />
      </SimpleGrid>
    </Container>
  );
}
