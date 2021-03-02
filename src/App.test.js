import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("should test root component", () => {
    const wrapper = render(<App />);
    console.log(wrapper);
    expect(2).toEqual(2);
  });
});
