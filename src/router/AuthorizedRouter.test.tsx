import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
import AuthorizedRouter from "./AuthorizedRouter";
import { IUsers } from "../redux/reducers/users";
import userEvent from "@testing-library/user-event";

export interface IRootStore {
  counter: { counter: number };
  users: { users: IUsers[] };
  posts: { posts: IUsers[] };
}

describe("auth component", () => {
  const mockStore = configureStore();
  const user: IUsers = {
    userId: "test",
    id: 1,
    title: "test",
    body: "test",
  };

  it("with initial state", () => {
    const initialState: IRootStore = {
      counter: { counter: 0 },
      users: { users: [user] },
      posts: { posts: [user] },
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthorizedRouter />
        </BrowserRouter>
      </Provider>,
    );

    const home = screen.getByText("Home");
    const posts = screen.getByText("Posts");
    const users = screen.getByText("Users");

    userEvent.click(home);
    expect(screen.getByText("User Number")).toBeInTheDocument();

    userEvent.click(posts);
    expect(screen.getByText("There's nothing here!")).toBeInTheDocument();

    userEvent.click(users);
    expect(screen.getByText("There's nothing here!")).toBeInTheDocument();
  });

  it("without initial state", () => {
    const initialState: IRootStore = {
      counter: { counter: 0 },
      users: { users: [] },
      posts: { posts: [] },
    };

    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <BrowserRouter>
          <AuthorizedRouter />
        </BrowserRouter>
      </Provider>,
    );

    const home = screen.getByText("Home");
    const posts = screen.getByText("Posts");
    const users = screen.getByText("Users");

    userEvent.click(home);
    expect(screen.getByText("get users")).toBeInTheDocument();

    userEvent.click(posts);
    expect(screen.getByText("There's nothing here!")).toBeInTheDocument();

    userEvent.click(users);
    expect(screen.getByText("There's nothing here!")).toBeInTheDocument();
  });
});
