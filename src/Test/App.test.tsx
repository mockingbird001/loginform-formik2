import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

const renderApp = () => {
  render(<App />);
  const getEmail = () => screen.getAllByLabelText(/email/i);
  const getPassword = () => screen.getByLabelText(/password/i);
  const getCheckbox = () => screen.getByLabelText(/rememberMe/i);
  const getSubmit = () => screen.getAllByRole("button", { name: /submit/i });
  return {
    getEmail,
    getPassword,
    getCheckbox,
    getSubmit,
  };
};

describe("App", () => {
  it("Should display input checkbox and button", () => {
    const { getEmail, getPassword, getCheckbox, getSubmit } = renderApp();
    getEmail();
    getPassword();
    getCheckbox();
    getSubmit();
  });
});
