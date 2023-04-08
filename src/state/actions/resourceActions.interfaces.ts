import { ActionType } from "../action-types";

export interface AddCurrencyAction {
  type: ActionType.ADD_CURRENCY;
  payload: number;
}

export interface RemoveCurrencyAction {
  type: ActionType.REMOVE_CURRENCY;
  payload: number;
}

export interface AddCurrencyPerMinuteAction {
  type: ActionType.ADD_CURRENCY_PER_MINUTE;
  payload: number;
}

export interface RemoveCurrencyPerMinuteAction {
  type: ActionType.REMOVE_CURRENCY_PER_MINUTE;
  payload: number;
}

export interface AddHousingAction {
  type: ActionType.ADD_HOUSING;
  payload: number;
}

export interface RemoveHousingAction {
  type: ActionType.REMOVE_HOUSING;
  payload: number;
}

export interface AddMealAction {
  type: ActionType.ADD_MEAL;
  payload: number;
}

export interface RemoveMealAction {
  type: ActionType.REMOVE_MEAL;
  payload: number;
}

export interface AddMealPerMinuteAction {
  type: ActionType.ADD_MEAL_PER_MINUTE;
  payload: number;
}

export interface RemoveMealPerMinuteAction {
  type: ActionType.REMOVE_MEAL_PER_MINUTE;
  payload: number;
}

export interface AddWoodAction {
  type: ActionType.ADD_WOOD;
  payload: number;
}

export interface RemoveWoodAction {
  type: ActionType.REMOVE_WOOD;
  payload: number;
}

export interface AddWoodPerMinuteAction {
  type: ActionType.ADD_WOOD_PER_MINUTE;
  payload: number;
}

export interface RemoveWoodPerMinuteAction {
  type: ActionType.REMOVE_WOOD_PER_MINUTE;
  payload: number;
}

export type Action =
  | AddCurrencyAction
  | RemoveCurrencyAction
  | AddCurrencyPerMinuteAction
  | RemoveCurrencyPerMinuteAction
  | AddHousingAction
  | RemoveHousingAction
  | AddMealAction
  | RemoveMealAction
  | AddMealPerMinuteAction
  | RemoveMealPerMinuteAction
  | AddWoodAction
  | RemoveWoodAction
  | AddWoodPerMinuteAction
  | RemoveWoodPerMinuteAction;
