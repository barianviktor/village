import { combineReducers } from "redux";
import resourcesReducer from "./resourcesReducer";
import gameReducer from "./gameReducer";
const reducers = combineReducers({
  resources: resourcesReducer,
  game: gameReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
