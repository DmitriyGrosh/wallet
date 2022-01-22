import React from "react";
import AuthContainer from "./AuthContainer";
import { render, screen, act, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const mockSetState = jest.fn();

describe("input values for auth", () => {
  it("renders red button", () => {
    render(
      <BrowserRouter>
        <AuthContainer setIsAuth={mockSetState} />
      </BrowserRouter>,
    );
    const password = screen.getByTestId("password");
    const email = screen.getByTestId("email");
    const name = screen.getByTestId("name");
    const submit = screen.getByRole("submit");
    const test = screen.getByText("Test");
    const send = screen.getByText("send");

    expect(password).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    act(() => {
      fireEvent.click(test);
    });

    expect(screen.getByText("required")).toBeInTheDocument();
  });
});
