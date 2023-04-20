import { render, screen } from "@testing-library/react";
import BetaTest from "../src/pages/beta-test";
import "@testing-library/jest-dom";

jest.mock("next/router", () => require("next-router-mock"));

describe("BetaTest", () => {
  it("renders a heading", () => {
    render(<BetaTest />);

    const heading = screen.getByRole("heading", {
      name: /Danke für dein Interesse.../i,
    });

    expect(heading).toBeInTheDocument();
  });
});
