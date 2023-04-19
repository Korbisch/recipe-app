import React from "react";
import { Button, Container } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { NavBar } from "../../components/NavBar";
import Link from "next/link";
import { User } from "@/pages/_app";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { RecipeList } from "../../components/RecipeList/RecipeList";

export default withPageAuthRequired(function Recipes({
  users,
}: {
  users: User;
}) {
  const recipes = users.recipes;

  return (
    <>
      <NavBar />
      <Container my="md">
        <h2>Deine Rezepte</h2>
        <Link href={"/add-recipe"} style={{ textDecoration: "none" }}>
          <Button leftIcon={<IconPlus />} variant="default" mb={20}>
            Rezept hinzufügen
          </Button>
        </Link>
        <RecipeList recipes={recipes} />
      </Container>
    </>
  );
});

export async function getServerSideProps() {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/recipes`);
    const users = await response.json();

    return { props: { users } };
  } catch (e) {
    console.error(e);
  }
}
