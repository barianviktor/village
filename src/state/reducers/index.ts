import { combineReducers } from "redux";
import resourcesReducer from "./resourcesReducer";
const reducers = combineReducers({
  resources: resourcesReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
