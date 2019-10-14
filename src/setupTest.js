import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-ract-16";

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true
});
