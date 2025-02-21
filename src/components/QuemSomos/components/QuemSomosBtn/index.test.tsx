import { screen, render, fireEvent } from "@testing-library/react";
import { QuemSomosBtn } from "./index";

describe("Rendering and Navigation tests to Button on Quem Somos Page", () => {
  it("should render and test navigation", () => {
    render(<QuemSomosBtn />);

    const LinkBtn = screen.getByRole("link", {name: /Quem Somos/i})
    expect(LinkBtn).toBeInTheDocument();
  

    fireEvent.click(LinkBtn);

    expect(LinkBtn).toHaveAttribute('href', '/QuemSomos')
  });
});
