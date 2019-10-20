import React from "react";
import useCostumHook from "./useCostumHook";
import { mount } from "enzyme";
import { act } from "react-dom/test-utils";

describe.only("costum hook", () => {
  let results;
  const renderedHook = hook => {
    function HookWrapper() {
      results = hook();
      return null;
    }
    mount(<HookWrapper />);
    return results;
  };
  test("it Works", () => {
    renderedHook(useCostumHook);
    expect(results.count).toEqual(0);
    act(() => {
      results.increment();
    });
    expect(results.count).toEqual(1);
  });
});
