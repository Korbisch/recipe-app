import { Box, createStyles, Flex, Group } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
  circle: {
    background: theme.fn.primaryColor(),
    borderRadius: "50%",
    height: "3rem",
    width: "3rem",
    color: "black",
    fontWeight: 700,
  },
}));

export const Servings = (props: { count: number }) => {
  const { classes } = useStyles();

  return (
    <Group position="apart">
      <h3>Portionen</h3>
      <Box className={classes.circle}>
        <Flex justify="center" align="center" h="100%">
          {props.count}
        </Flex>
      </Box>
    </Group>
  );
};
