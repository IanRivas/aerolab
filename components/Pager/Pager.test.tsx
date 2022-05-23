import {render, fireEvent} from "@testing-library/react";

import Pager from "./Pager";

describe("<Pager />", () => {
  const mockHandler = jest.fn();

  test("click button pager", () => {
    const component = render(<Pager finalPage={2} page={1} setPage={mockHandler} />);

    const button = component.container.querySelector("button:nth-child(3)");

    fireEvent.click(button);
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
