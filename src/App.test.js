import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "./../Utils";
import React from "react";

const setUp = (initialState = {}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />)
    .childAt(0)
    .dive();
  return wrapper;
};
describe("App component", () => {
  let wrapper;
  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Some title1",
          body: "Some text"
        },
        {
          title: "Some title2",
          body: "Some text"
        },
        {
          title: "Some title3",
          body: "Some text"
        }
      ]
    };
    wrapper = setUp(initialState);
  });

  test("Should render withouth err", () => {
    const component = findByTestAtrr(wrapper, "appComponent");
    expect(component.length).toBe(1);
  });

  test("exampleMethid_update state works", () => {
    const classInstance = wrapper.instance();
    classInstance.exampleMethod_updateState();
    const newState = classInstance.state.hideBtn;
    expect(newState).toBe(true);
  });
  test("should return value as expected", () => {
    const classInstance = wrapper.instance();
    const newValue = classInstance.exampleMethod_returnsAValue(6);
    expect(newValue).toBe(6);
  });
});
