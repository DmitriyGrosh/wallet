import React from "react";
import renderer from "react-test-renderer";
import { Button } from "./Button";

test("Link changes the class when hovered", () => {
  const component = renderer.create(<Button label="Button" color="blue" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
