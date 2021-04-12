import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";
import { BRAND_NAME } from "./type";

const initialState = {
  loading: false,
  brand: [],
  error: "",
};

export const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case BRAND_NAME + FETCH_FAILURE:
      return {
        ...state,
        loading: true
      };
    case BRAND_NAME + FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        brand: action.payload,
        error: "",
      };
    case BRAND_NAME + FETCH_REQUEST:
      return {
        ...state,
        loading: false,
        brand: [],
        error: action.error,
      };
    default:
      return state;
  }
};
