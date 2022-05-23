import {render, screen} from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("renders the button", () => {
    render(<Footer />);

    const aSpan = screen.getByText("View this repository");

    expect(aSpan).toBeInTheDocument();
  });
});
