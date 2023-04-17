import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from "@mantine/core";
import image from "../public/bug_fixing.svg";
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
}));

export function PrivateBetaPage() {
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
          alt="Website under construction"
        />
        <div>
          <Title className={classes.title}>Danke für dein Interesse...</Title>
          <Text color="dimmed" size="lg">
            Wir befinden uns aktuell in der privaten Beta Testphase. Bald wird
            es möglich sein, sich für den Newsletter anzumelden, um updates zu
            erhalten sobald die Seite verfügbar ist.
          </Text>
          <Button
            variant="default"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={() => router.push("/")}
          >
            Get back to home page
          </Button>
        </div>
        <Image
          src={image.src}
          className={classes.desktopImage}
          alt="Website under construction"
        />
      </SimpleGrid>
    </Container>
  );
}
