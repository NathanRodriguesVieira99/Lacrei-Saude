import HeroTitle from "./index";
import { screen, render } from "@testing-library/react";

describe("Rendering tests to Home Page", () => {
  it("should render Home Page and show de page title", () => {
    render(<HeroTitle />);
    const PageTitle = screen.getByText(/Boas-vindas à Lacrei Saúde!/i);
    expect(PageTitle).toBeInTheDocument();
  });
});
