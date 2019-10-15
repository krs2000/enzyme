import { types } from "../../actions/types";

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_POSTS:
      return [...payload];
    default:
      return state;
  }
};
