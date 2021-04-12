import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_REQUEST } from "./type";
import { DISTANCE_NAME } from "./type";

const initialState = {
  loading: false,
  distance: [],
  error: "",
};

export const distanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISTANCE_NAME + FETCH_FAILURE:
      return {
        ...state,
        loading: true,
      };
    case DISTANCE_NAME + FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        distance: action.payload,
        error: "",
      };
    case DISTANCE_NAME + FETCH_REQUEST:
      return {
        ...state,
        loading: false,
        distance: [],
        error: action.error,
      };
    default:
      return state;
  }
};
