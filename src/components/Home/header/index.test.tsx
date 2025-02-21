import { screen, render, fireEvent } from "@testing-library/react";
import Header from "./index";


describe("Rendering and Navigation tests to Header", () => {
  it("should render header and test  navigation link", () => {
    // renderiza o header
    render(<Header />);
  
    // encontra o link pela role
    const linkElement = screen.getByRole("link", { name: /Logo Lacrei Saúde/i });
    expect(linkElement).toBeInTheDocument();
  
    // clica no link
    fireEvent.click(linkElement);
  
    // verifica se ocorre a navegação
   expect(linkElement).toHaveAttribute('href', '/Inicio')
  });
});
