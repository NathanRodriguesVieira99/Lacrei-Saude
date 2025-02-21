import QuemSomosPage from "./page";
import { render, screen } from "@testing-library/react";

describe("Rendering tests to Quem Somos Page", () => {
  it("should render Quem Somos Page", () => {
    render(<QuemSomosPage />);
  });
});
