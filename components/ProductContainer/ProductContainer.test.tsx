import {render} from "@testing-library/react";

import ProductContinaer from "./ProductContainer";

import Data from "store/Data";

describe("<ProductContainer />", () => {
  test("render products", () => {
    const products = [
      {
        _id: "a1",
        category: "Gaming",
        cost: 300,
        img: {hdUrl: "https://coding-challenge-api.aerolab.co/images/Switch-x2.png", url: ""},
        name: "Nintendo Switch 32GB",
      },
      {
        _id: "a2",
        category: "Gaming",
        cost: 200,
        img: {hdUrl: "https://coding-challenge-api.aerolab.co/images/SonyPS4-x2.png", url: ""},
        name: "Sony PS4",
      },
    ];

    const component = render(
      <Data user={null}>
        <ProductContinaer products={products} />
      </Data>,
    );

    component.getByText("Nintendo Switch 32GB");
    component.getByText("300", {exact: false});
    component.getByText("Sony PS4");
    component.getByText("200", {exact: false});
  });
});
