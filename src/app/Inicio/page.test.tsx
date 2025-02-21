import Inicio from "./page";
import { screen, render } from "@testing-library/react";

describe("Rendering tests to Initial Page", () => {
  it("should render initial Page", () => {
    render(<Inicio />);
    // const PageTitle = screen.getByText(/Boas-vindas à Lacrei Saúde!/i);
    // expect(PageTitle).toBeInTheDocument();
  });
});
