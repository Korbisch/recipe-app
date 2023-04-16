import { Center, createStyles, Loader } from "@mantine/core";
import React from "react";

const useStyles = createStyles(() => ({
  fullPage: {
    height: "100vh",
  },
}));

export const LoadingPage = () => {
  const { classes } = useStyles();
  return (
    <Center className={classes.fullPage}>
      <Loader size="xl" variant="bars" />
    </Center>
  );
};
