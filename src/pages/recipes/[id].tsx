import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import { RecipeDetailsPage } from "../../../components/RecipeDetailsPage.tsx/RecipeDetailsPage";

export default withPageAuthRequired(function RecipeDetails() {
  return <RecipeDetailsPage />;
});
