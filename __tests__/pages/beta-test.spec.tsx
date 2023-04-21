import { render, screen } from "@testing-library/react";
import BetaTest from "@/pages/beta-test";
import "@testing-library/jest-dom";

describe("BetaTest", () => {
  it("renders a heading", () => {
    render(<BetaTest />);

    const heading = screen.getByRole("heading", {
      name: /Danke für dein Interesse.../i,
    });

    expect(heading).toBeInTheDocument();
  });
});
