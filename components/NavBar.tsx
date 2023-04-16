import {
  createStyles,
  Header,
  Group,
  Button,
  Box,
  rem,
  Menu,
  UnstyledButton,
  Text,
  Skeleton,
  MediaQuery,
  Image,
} from "@mantine/core";
import { IconLogout, IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";
import logo from "../public/Logo.png";
import logoIcon from "../public/Logo-Icon.png";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,
  },
  user: {
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    transition: "background-color 100ms ease",

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    },
  },
  userActive: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
  },
}));

export function NavBar() {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const { user, isLoading } = useUser();

  const [userMenuOpened, setUserMenuOpened] = useState(false);

  return (
    <Box>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group sx={{ height: "100%" }} spacing={0}>
            <Link href="/" className={classes.link}>
              <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
                <Image
                  src={logo.src}
                  alt="Plate Mate Logo"
                  mah={50}
                  maw={200}
                />
              </MediaQuery>
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Image
                  src={logoIcon.src}
                  alt="Plate Mate Logo"
                  maw={50}
                  mah={50}
                />
              </MediaQuery>
            </Link>
          </Group>
          <Group>
            {isLoading && (
              <>
                <Skeleton height={36} width={115} radius="sm" />
                <Skeleton height={36} width={78} radius="sm" />
              </>
            )}
            {!isLoading && !user && (
              <>
                <Button
                  c="black"
                  onClick={() => router.push("/api/auth/login")}
                >
                  Get Started
                </Button>
                <Button
                  onClick={() => router.push("/api/auth/login")}
                  variant="default"
                >
                  Log in
                </Button>
              </>
            )}
            {user && (
              <Menu
                width={200}
                position="bottom-end"
                transitionProps={{ transition: "pop-top-right" }}
                onClose={() => setUserMenuOpened(false)}
                onOpen={() => setUserMenuOpened(true)}
                withinPortal
              >
                <Menu.Target>
                  <UnstyledButton
                    className={cx(classes.user, {
                      [classes.userActive]: userMenuOpened,
                    })}
                  >
                    <Group spacing={7}>
                      <Text
                        weight={500}
                        size="sm"
                        sx={{ lineHeight: 1 }}
                        mr={3}
                      >
                        {user.email}
                      </Text>
                      <IconChevronDown size={rem(12)} stroke={1.5} />
                    </Group>
                  </UnstyledButton>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item
                    onClick={() => router.push("/api/auth/logout")}
                    icon={<IconLogout size="0.9rem" stroke={1.5} />}
                  >
                    Logout
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            )}
          </Group>
        </Group>
      </Header>
    </Box>
  );
}
