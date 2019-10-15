import React from "react";
import { findByTestAtrr, checkProps } from "../../../Utils";
import SharedButton from "./index";
import { shallow } from "enzyme";

describe("SharedBtn cmp", () => {
  describe("Checking propTypes", () => {
    test("Should not throw wrg", () => {
      const expectedProps = {
        buttonText: "Example text",
        emitEvent: () => {}
      };
      const propsError = checkProps(SharedButton, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
  describe("It renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        buttonText: "Example Button text",
        emitEvent: () => {}
      };
      wrapper = shallow(<SharedButton {...props} />);
    });
    it("Should render a button", () => {
      const button = findByTestAtrr(wrapper, "buttonComponent");
      expect(button.length).toBe(1);
    });
  });
});
