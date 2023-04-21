import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { AddRecipePage } from "../../components/AddRecipePage/AddRecipePage";
import fetchMock from "jest-fetch-mock";

describe("AddRecipePage", () => {
  afterEach(() => {
    fetchMock.resetMocks();
  });

  it("should disable submit button after it is clicked", async () => {
    // Given
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(<AddRecipePage />);
    const submitButton = screen.getByRole("button", {
      name: "Rezept speichern",
    });

    // When
    fireEvent.click(submitButton);
    fireEvent.click(submitButton);

    // Then
    expect(submitButton).toBeDisabled();

    await waitFor(() => expect(fetchMock.mock.calls.length).toBe(1));

    expect(submitButton).toBeDisabled();
  });
});
