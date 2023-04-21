import React from "react";
import { RecipeDetailsPage } from "../../components/RecipeDetailsPage.tsx/RecipeDetailsPage";
import mockRouter from "next-router-mock";
import { renderWithContext } from "../testing-helpers";

jest.mock("next/router", () => require("next-router-mock"));

describe("RecipeDetailsPage", () => {
  it("should redirect to /recipes if recipes are undefined", () => {
    // Given
    mockRouter.push("/recipes/64425641a5067c476e8785b4"); // Set the initial url

    // When
    renderWithContext(<RecipeDetailsPage />);

    // Then
    expect(mockRouter).toMatchObject({
      asPath: "/recipes",
      pathname: "/recipes",
    });
  });
});
