import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  rem,
} from "@mantine/core";
import image from "../public/eating_together.svg";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: rem(300),
    },

    [theme.fn.smallerThan("xs")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: rem(400),

    [theme.fn.smallerThan("xs")]: {
      marginBottom: rem(30),
      maxWidth: rem(300),
      alignSelf: "center",
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
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Alle deine{" "}
              <span className={classes.highlight}>Lieblingsrezepte</span> an
              einem Ort!
            </Title>
            <Text color="dimmed" mt="md">
              Speichere deine Rezepte an einem Ort und greife von überall auf
              sie zu!
            </Text>

            <Group mt={30}>
              <Button
                onClick={() => router.push("/api/auth/login")}
                radius="xl"
                size="md"
                className={classes.control}
              >
                Registrieren
              </Button>
            </Group>
          </div>
          <Image
            src={image.src}
            className={classes.image}
            alt={"Header image"}
          />
        </div>
      </Container>
    </div>
  );
}
