import { render, screen } from "@testing-library/react";
import { CarlosWapo } from "../src/FirstApp";

describe("Pruebas en FirstApp ", () => {
  const title = "Hola, soy goku";
  const subTitle = "queh no hay subtiti";
  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CarlosWapo title={title} />);

    expect(container).toMatchSnapshot();
  });
  test('Debe de mostrar el mensaje "Hola, soy goku"', () => {
    render(<CarlosWapo title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
  test("Debe de mostrar el titulo en un h1", () => {
    render(<CarlosWapo title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });
  test("Debe de mostrar el subtitulo enviado por props", () => {
    render(<CarlosWapo title={title} subTitle={subTitle} />);
    expect(screen.getAllByText(subTitle).length).toBe(2);
  });
});
