import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import TestRouter from "./TestRouter";
import "@testing-library/jest-dom";

test("test location with react-router-dom", () => {
  render(
    <BrowserRouter>
      <TestRouter />
    </BrowserRouter>,
  );

  const home = screen.getByTestId("location-home");
  const user = screen.getByTestId("location-user");
  const store = screen.getByTestId("location-store");
  const about = screen.getByTestId("location-about");

  expect(home).toBeInTheDocument();
  expect(user).toBeInTheDocument();
  expect(store).toBeInTheDocument();
  expect(about).toBeInTheDocument();

  userEvent.click(home);
  expect(screen.getByText("you are at Home"));

  userEvent.click(user);
  expect(screen.getByText("you are at User"));

  userEvent.click(store);
  expect(screen.getByText("you are at Store"));

  userEvent.click(about);
  expect(screen.getByText("you are at About"));
});
