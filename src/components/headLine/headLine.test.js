import React from "react";
import { shallow } from "enzyme";
import HeadLine from "./index";
import { findByTestAtrr, checkProps } from "../../../Utils/index";

const setUp = props => {
  const component = shallow(<HeadLine {...props} />);
  return component;
};
describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not  throw warning", () => {
      const expectedProps = {
        header: "Test Header",
        desc: "Test Desc",
        tempArr: [
          {
            fName: "Ann",
            lName: "Jones",
            email: "test@email.com",
            age: 22,
            onlineStatus: false
          }
        ]
      };
      const propsErr = checkProps(HeadLine, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });
  describe("Have props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "Test header",
        desc: "Test Desc"
      };
      wrapper = setUp(props);
    });

    it("Should render withouth errors", () => {
      const h1 = findByTestAtrr(wrapper, "HeadLineComponent");
      expect(h1.length).toBe(1);
    });
    it("Should render h1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    it("Should render desc", () => {
      const desc = findByTestAtrr(wrapper, "desc");
      expect(desc.length).toBe(1);
    });
  });
  describe("Have no props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    it("Should not render", () => {
      const h1 = findByTestAtrr(wrapper, "HeadLineComponent");
      expect(h1.length).toBe(0);
    });
  });
});
