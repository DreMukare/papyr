import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the application", () => {
  render(<App />);

  expect(screen.getByText("SEE it works!")).toBeInTheDocument();
});
