import { brandReducer } from "./brandReducer";
import { distanceReducer } from "./distanceReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    distance : distanceReducer,
    brand : brandReducer
});

export default rootReducer;

