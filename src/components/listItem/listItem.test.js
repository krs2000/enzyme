import React from "react";
import { findByTestAtrr, checkProps } from "../../../Utils";
import { shallow } from "enzyme";
import ListItem from "./index";

describe("List item componet", () => {
  describe("Checking Proptypes", () => {
    it("Should not throw warning", () => {
      const expectedProps = {
        title: "Example title",
        desc: "text"
      };
      const PropsErr = checkProps(ListItem, expectedProps);
      expect(PropsErr).toBeUndefined();
    });
  });
  describe("Componet Renders", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        title: "Example title",
        desc: "text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Should render withouth error", () => {
      const componet = findByTestAtrr(wrapper, "listItemComponent");
      expect(componet.length).toBe(1);
    });
    it("Should render title ", () => {
      const componet = findByTestAtrr(wrapper, "componetTitle");
      expect(componet.length).toBe(1);
    });
    it("Should render description ", () => {
      const componet = findByTestAtrr(wrapper, "componetDesc");
      expect(componet.length).toBe(1);
    });
  });

  describe("Componet not Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "text"
      };
      wrapper = shallow(<ListItem {...props} />);
    });
    it("Should not render", () => {
      const componet = findByTestAtrr(wrapper, "listItemComponent");
      expect(componet.length).toBe(0);
    });
  });
});
