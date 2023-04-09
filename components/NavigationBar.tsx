import Link from "next/link";
import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import styles from "@/styles/Home.module.css";

export const NavigationBar = () => {
  const { user, isLoading } = useUser();
  const router = useRouter();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.description}>
      <h1>
        <Link href="/">PlateMate</Link>
      </h1>
      <nav>
        {!isLoading && !user && (
          <nav id="qsLoginBtn">
            <a href="/api/auth/login" tabIndex={0}>
              Login
            </a>
          </nav>
        )}
        {user && (
          <div>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => router.push("/profile")}>
                Profil
              </MenuItem>
              <MenuItem onClick={() => router.push("/api/auth/logout")}>
                Logout
              </MenuItem>
            </Menu>
          </div>
        )}
      </nav>
    </div>
  );
};
