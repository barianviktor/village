import { ActionType } from "../action-types/index";
import { ResourceAction } from "../actions";
import { ResourcesState } from "./resourcesState.interface";

const initialState: ResourcesState = {
  meals: 0,
  wood: 0,
  housing: 0,
  currency: 0,
  mealsPerMinute: 0,
  woodPerMinute: 0,
  currencyPerMinute: 0,
};

const resourcesReducer = (
  state: ResourcesState = initialState,
  action: ResourceAction
): ResourcesState => {
  switch (action.type) {
    //handle housing
    case ActionType.ADD_HOUSING:
      return {
        ...state,
        housing: state.housing + action.payload,
      };
    case ActionType.REMOVE_HOUSING:
      return {
        ...state,
        housing: state.housing - action.payload,
      };

    //handle currency
    case ActionType.ADD_CURRENCY:
      return {
        ...state,
        currency: state.currency + action.payload,
      };
    case ActionType.REMOVE_CURRENCY:
      return {
        ...state,
        currency: state.currency - action.payload,
      };
    case ActionType.ADD_CURRENCY_PER_MINUTE:
      return {
        ...state,
        currencyPerMinute: state.currencyPerMinute + action.payload,
      };
    case ActionType.REMOVE_CURRENCY_PER_MINUTE:
      return {
        ...state,
        currencyPerMinute: state.currencyPerMinute + action.payload,
      };
    //handle meals
    case ActionType.ADD_MEAL:
      return {
        ...state,
        meals: state.meals + action.payload,
      };
    case ActionType.REMOVE_MEAL:
      return {
        ...state,
        meals: state.meals - action.payload,
      };
    case ActionType.ADD_MEAL_PER_MINUTE:
      return {
        ...state,
        mealsPerMinute: state.mealsPerMinute + action.payload,
      };
    case ActionType.REMOVE_MEAL_PER_MINUTE:
      return {
        ...state,
        mealsPerMinute: state.mealsPerMinute - action.payload,
      };
    //handle wood
    case ActionType.ADD_WOOD:
      return {
        ...state,
        wood: state.wood + action.payload,
      };
    case ActionType.REMOVE_WOOD:
      return {
        ...state,
        wood: state.wood - action.payload,
      };
    case ActionType.ADD_WOOD_PER_MINUTE:
      return {
        ...state,
        woodPerMinute: state.woodPerMinute + action.payload,
      };
    case ActionType.REMOVE_WOOD_PER_MINUTE:
      return {
        ...state,
        woodPerMinute: state.woodPerMinute - action.payload,
      };

    default:
      return state;
  }
};

export default resourcesReducer;
