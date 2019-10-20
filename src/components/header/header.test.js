import React from "react";
import { shallow } from "enzyme";
import Header from "./index";
import { findByTestAtrr } from "../../../Utils/index";

const setUp = (props = {}) => {
  const componet = shallow(<Header {...props} />);
  return componet;
};

describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render a logo", () => {
    const logo = findByTestAtrr(component, "logoImg");
    expect(logo.length).toBe(1);
  });
  it("should render withouth errors", () => {
    //   const component = setUp();
    // console.log(component.debug());
    const wrapper = findByTestAtrr(component, "headerCsomponent");
    expect(wrapper.length).toBe(1);
  });
});
