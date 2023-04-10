import { ActionType } from "../action-types";

export interface AddCurrencyAction {
  type: ActionType.ADD_CURRENCY;
  payload: number;
}

export interface RemoveCurrencyAction {
  type: ActionType.REMOVE_CURRENCY;
  payload: number;
}

export interface AddCurrencyPerTurnAction {
  type: ActionType.ADD_CURRENCY_PER_TURN;
  payload: number;
}

export interface RemoveCurrencyPerTurnAction {
  type: ActionType.REMOVE_CURRENCY_PER_TURN;
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

export interface AddMealPerTurnAction {
  type: ActionType.ADD_MEAL_PER_TURN;
  payload: number;
}

export interface RemoveMealPerTurnAction {
  type: ActionType.REMOVE_MEAL_PER_TURN;
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

export interface AddWoodPerTurnAction {
  type: ActionType.ADD_WOOD_PER_TURN;
  payload: number;
}

export interface RemoveWoodPerTurnAction {
  type: ActionType.REMOVE_WOOD_PER_TURN;
  payload: number;
}

export type Action =
  | AddCurrencyAction
  | RemoveCurrencyAction
  | AddCurrencyPerTurnAction
  | RemoveCurrencyPerTurnAction
  | AddHousingAction
  | RemoveHousingAction
  | AddMealAction
  | RemoveMealAction
  | AddMealPerTurnAction
  | RemoveMealPerTurnAction
  | AddWoodAction
  | RemoveWoodAction
  | AddWoodPerTurnAction
  | RemoveWoodPerTurnAction;
