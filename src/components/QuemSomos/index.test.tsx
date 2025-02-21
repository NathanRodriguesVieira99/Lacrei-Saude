import { QuemSomos } from ".";
import { screen, render } from "@testing-library/react";

describe("Rendering tests to Quem Somos", () => {
  it("should render Quem Somos", () => {
    render(<QuemSomos />);
  });
});
