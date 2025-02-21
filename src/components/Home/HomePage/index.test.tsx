import HomePage from "./index";
import { screen, render } from "@testing-library/react";

describe("Rendering tests to Home Page", () => {
  it("should render Home Page", () => {
    render(<HomePage />);
  });
});
