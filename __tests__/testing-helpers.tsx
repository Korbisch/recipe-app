import { render } from "@testing-library/react";
import React from "react";
import { RecipeProvider } from "../state/useRecipeContext";

export const renderWithContext = (children: React.ReactNode) => {
  return render(<RecipeProvider>{children}</RecipeProvider>);
};
