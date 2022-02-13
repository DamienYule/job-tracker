import { render } from "@testing-library/react";
import HomeLogin from "../HomeLogin";


describe("displays login component", () => {
  it("renders properly", () => {
    render(<HomeLogin />);
  });
});
