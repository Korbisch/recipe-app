import { Box, createStyles, Loader } from "@mantine/core";
import React from "react";

const useStyles = createStyles(() => ({
  fullPage: {
    height: "80vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const LoadingBars = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.fullPage}>
      <Loader size="xl" variant="bars" />
    </Box>
  );
};
