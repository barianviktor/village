import { ActionType } from "../action-types/index";
import {
  AddCurrencyAction,
  AddCurrencyPerMinuteAction,
  AddHousingAction,
  AddMealAction,
  AddMealPerMinuteAction,
  AddWoodAction,
  AddWoodPerMinuteAction,
  RemoveCurrencyAction,
  RemoveCurrencyPerMinuteAction,
  RemoveHousingAction,
  RemoveMealAction,
  RemoveMealPerMinuteAction,
  RemoveWoodAction,
  RemoveWoodPerMinuteAction,
} from "./resourceActions.interfaces";

export const addCurrency = (amount: number): AddCurrencyAction => {
  return {
    type: ActionType.ADD_CURRENCY,
    payload: amount,
  };
};

export const removeCurrency = (amount: number): RemoveCurrencyAction => {
  return {
    type: ActionType.REMOVE_CURRENCY,
    payload: amount,
  };
};

export const addCurrencyPerMinute = (
  amount: number
): AddCurrencyPerMinuteAction => {
  return {
    type: ActionType.ADD_CURRENCY_PER_MINUTE,
    payload: amount,
  };
};

export const removeCurrencyPerMinute = (
  amount: number
): RemoveCurrencyPerMinuteAction => {
  return {
    type: ActionType.REMOVE_CURRENCY_PER_MINUTE,
    payload: amount,
  };
};

export const addHousing = (amount: number): AddHousingAction => {
  return {
    type: ActionType.ADD_HOUSING,
    payload: amount,
  };
};

export const removeHousing = (amount: number): RemoveHousingAction => {
  return {
    type: ActionType.REMOVE_HOUSING,
    payload: amount,
  };
};

export const addMeal = (amount: number): AddMealAction => {
  return {
    type: ActionType.ADD_MEAL,
    payload: amount,
  };
};

export const removeMeal = (amount: number): RemoveMealAction => {
  return {
    type: ActionType.REMOVE_MEAL,
    payload: amount,
  };
};

export const addMealPerMinute = (amount: number): AddMealPerMinuteAction => {
  return {
    type: ActionType.ADD_MEAL_PER_MINUTE,
    payload: amount,
  };
};

export const removeMealPerMinute = (
  amount: number
): RemoveMealPerMinuteAction => {
  return {
    type: ActionType.REMOVE_MEAL_PER_MINUTE,
    payload: amount,
  };
};

export const addWood = (amount: number): AddWoodAction => {
  return {
    type: ActionType.ADD_WOOD,
    payload: amount,
  };
};

export const removeWood = (amount: number): RemoveWoodAction => {
  return {
    type: ActionType.REMOVE_WOOD,
    payload: amount,
  };
};

export const addWoodPerMinute = (amount: number): AddWoodPerMinuteAction => {
  return {
    type: ActionType.ADD_WOOD_PER_MINUTE,
    payload: amount,
  };
};

export const removeWoodPerMinute = (
  amount: number
): RemoveWoodPerMinuteAction => {
  return {
    type: ActionType.REMOVE_WOOD_PER_MINUTE,
    payload: amount,
  };
};
