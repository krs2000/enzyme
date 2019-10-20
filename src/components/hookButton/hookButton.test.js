import React from "react";
import { mount } from "enzyme";
import HookButton from "./index";
import { findByTestAtrr } from "../../../Utils/index";
describe("MyCompnent", () => {
  let onCountChange;
  let wrapper;

  beforeEach(() => {
    onCountChange = jest.fn();
    wrapper = mount(<HookButton onCountChange={onCountChange} />);
  });

  test("hook works", () => {
    expect(wrapper).not.toBeNull();
  });
  test("shows my  default text", () => {
    let countState = findByTestAtrr(wrapper, "countState");

    expect(countState.text()).toBe("Count: 0");
  });
  test("correctly increments by 1", () => {
    let countState = findByTestAtrr(wrapper, "countState");
    let incrementBtn = findByTestAtrr(wrapper, "incrementBtn");

    incrementBtn.simulate("click");
    expect(countState.text()).toBe("Count: 1");
  });
  test("correctly increments by 2", () => {
    let incrementBtn = findByTestAtrr(wrapper, "incrementBtn");
    expect(onCountChange).toBeCalledTimes(1);
    incrementBtn.simulate("click");
    expect(onCountChange).toBeCalledTimes(2);
  });
});
