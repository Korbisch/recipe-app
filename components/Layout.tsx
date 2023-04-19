import { NavBar } from "./NavBar";
import React from "react";
import { Container } from "@mantine/core";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <Container my="md">{children}</Container>
    </>
  );
};
