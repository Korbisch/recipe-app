import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import React from "react";
import { AddRecipePage } from "../../components/AddRecipePage/AddRecipePage";

export default withPageAuthRequired(function AddRecipe() {
  return <AddRecipePage />;
});
