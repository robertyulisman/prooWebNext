import { GET_LESSON, GET_CITY } from "../types";

const initialState = {
  lesson: [],
  city: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LESSON:
      return {
        ...state,
        lesson: action.payload,
      };
    case GET_CITY:
      return {
        ...state,
        city: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
