import {render, fireEvent} from "@testing-library/react";

import Data from "../../store/Data";

import DropdownComponent from "./Dropdown";

describe("<Dropdown />", () => {
  test("renders aeropay component", () => {
    const user = {
      __v: 1,
      _id: "lajsdlf12",
      createDate: "04/05/2022",
      name: "Jhon Doe",
      points: 0,
      redeemHistory: ["celular"],
    };

    const component = render(
      <Data user={user}>
        <DropdownComponent />
      </Data>,
    );
    const button = component.getByText("0");

    fireEvent.click(button);
    const aeropayTitle = component.getByText("Add Balance");

    expect(aeropayTitle.parentNode).toHaveStyle("display:block");
    fireEvent.click(button);
    expect(aeropayTitle.parentNode).toHaveStyle("display:none");
  });
});
