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
  Center,
} from "@mantine/core";
import image from "../../public/eating_together.svg";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

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

  mobile: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  mobileImage: {
    maxWidth: 300,
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
  const { isLoading } = useUser();

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Center className={classes.mobile}>
          <Image
            className={classes.mobileImage}
            src={image.src}
            alt={"Header image"}
          />
        </Center>
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
              disabled={isLoading}
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
