import { GET_LESSON, GET_CITY, GET_CATEGORY, GET_BLOG } from "../types";

const initialState = {
  lesson: [],
  city: [],
  kategoriBlog: [],
  dataBlog: [],
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
    case GET_CATEGORY:
      return {
        ...state,
        kategoriBlog: action.payload,
      };
    case GET_BLOG:
      return {
        ...state,
        dataBlog: action.payload,
      };

    default:
      return state;
  }
};

export default dataReducer;
