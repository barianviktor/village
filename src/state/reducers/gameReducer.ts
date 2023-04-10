import { ActionType } from "../action-types/index";
import { Action } from "../actions/gameActions.interface";
import { GameState } from "./gameState.interface";

const initialState: GameState = {
  turn: 0,
  turnLength: 6000,
  language: "us",
  theme: "light",
};

const resourcesReducer = (
  state: GameState = initialState,
  action: Action
): GameState => {
  switch (action.type) {
    //handle housing
    case ActionType.INCREASE_GAME_TIME:
      return {
        ...state,
        turn: state.turn + 1,
      };
    case ActionType.SET_GAME_TIME:
      return {
        ...state,
        turn: action.payload,
      };
    case ActionType.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case ActionType.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};
export default resourcesReducer;
