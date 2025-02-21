import Inicio from "./page";
import { render } from "@testing-library/react";

describe("Rendering tests to Initial Page", () => {
  it("should render initial Page", () => {
    render(<Inicio />);
  });
});
