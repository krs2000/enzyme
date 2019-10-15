import moxios from "moxios";
import { testStore } from "./../../Utils";
import { fetchPosts } from "./../actions";

describe("fetch photos", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("store is updated correctly", () => {
    const expectedState = [
      {
        title: "Example title1",
        body: "text"
      },
      {
        title: "Example title2",
        body: "text"
      },
      {
        title: "Example title3",
        body: "text"
      }
    ];
    const store = testStore();

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedState
      });
      return store.dispatch(fetchPosts()).then(() => {
        const newState = store.getState();
        expect(newState).toBe(expectedState);
      });
    });
  });
});
