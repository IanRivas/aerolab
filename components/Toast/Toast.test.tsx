import {render, screen, fireEvent} from "@testing-library/react";

import Toast from "./Toast";

describe("<Toast />", () => {
  test("render Toast", () => {
    render(<Toast productName="Nintendo Switch 32GB" setVisible={null} visible={true} />);
    const span = screen.getByText("Nintendo Switch 32GB");

    expect(span).toBeInTheDocument();
  });
  test("button is called 1 time", () => {
    const mockHandler = jest.fn();

    const component = render(
      <Toast productName="Nintendo Switch 32GB" setVisible={mockHandler} visible={true} />,
    );
    const button = component.container.querySelector("button");

    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
