import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "5", width = "5", color = "yellow") {
  const colorInput = boxList.getByLabelText("Color");
  const widthInput = boxList.getByLabelText("Width");
  const heightInput = boxList.getByLabelText("Height");

  fireEvent.change(colorInput, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });

  const addBtn = boxList.getByText("Add Box");
  fireEvent.click(addBtn);
}

it("renders without crashing", function () {
  render(<BoxList />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function () {
  const boxList = render(<BoxList />);
  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);
  expect(boxList.getByText("X")).toBeInTheDocument();
});

it("can remove a box", function () {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeBtn = boxList.getByText("X");
  fireEvent.click(removeBtn);
  expect(removeBtn).not.toBeInTheDocument();
});
