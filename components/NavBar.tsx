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
} from "@mantine/core";
import { IconLogout, IconChevronDown } from "@tabler/icons-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0/client";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
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
    <Box pb={120}>
      <Header height={60} px="md">
        <Group position="apart" sx={{ height: "100%" }}>
          <Group sx={{ height: "100%" }} spacing={0}>
            <Link href="/" className={classes.link}>
              PlateMate
            </Link>
          </Group>
          <Group>
            {!isLoading && !user && (
              <>
                <Button onClick={() => router.push("/api/auth/login")}>
                  Sign up
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
                        {user.name}
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
