import { Dispatch } from "react";
import { ActionType } from "../action-types/index";
import {
  AddCurrencyAction,
  AddCurrencyPerTurnAction,
  AddHousingAction,
  AddMealAction,
  AddMealPerTurnAction,
  AddWoodAction,
  AddWoodPerTurnAction,
  RemoveCurrencyAction,
  RemoveCurrencyPerTurnAction,
  RemoveHousingAction,
  RemoveMealAction,
  RemoveMealPerTurnAction,
  RemoveWoodAction,
  RemoveWoodPerTurnAction,
} from "./resourceActions.interfaces";

export const addCurrency = (amount: number) => {
  return (dispatch: Dispatch<AddCurrencyAction>) => {
    dispatch({
      type: ActionType.ADD_CURRENCY,
      payload: amount,
    });
  };
};

export const removeCurrency = (amount: number) => {
  return (dispatch: Dispatch<RemoveCurrencyAction>) => {
    dispatch({
      type: ActionType.REMOVE_CURRENCY,
      payload: amount,
    });
  };
};

export const addCurrencyPerTurn = (amount: number) => {
  return (dispatch: Dispatch<AddCurrencyPerTurnAction>) => {
    dispatch({
      type: ActionType.ADD_CURRENCY_PER_TURN,
      payload: amount,
    });
  };
};

export const removeCurrencyPerTurn = (amount: number) => {
  return (dispatch: Dispatch<RemoveCurrencyPerTurnAction>) => {
    dispatch({
      type: ActionType.REMOVE_CURRENCY_PER_TURN,
      payload: amount,
    });
  };
};

export const addHousing = (amount: number) => {
  return (dispatch: Dispatch<AddHousingAction>) => {
    dispatch({
      type: ActionType.ADD_HOUSING,
      payload: amount,
    });
  };
};

export const removeHousing = (amount: number) => {
  return (dispatch: Dispatch<RemoveHousingAction>) => {
    dispatch({
      type: ActionType.REMOVE_HOUSING,
      payload: amount,
    });
  };
};

export const addMeal = (amount: number) => {
  return (dispatch: Dispatch<AddMealAction>) => {
    dispatch({
      type: ActionType.ADD_MEAL,
      payload: amount,
    });
  };
};

export const removeMeal = (amount: number) => {
  return (dispatch: Dispatch<RemoveMealAction>) => {
    dispatch({
      type: ActionType.REMOVE_MEAL,
      payload: amount,
    });
  };
};

export const addMealPerTurn = (amount: number) => {
  return (dispatch: Dispatch<AddMealPerTurnAction>) => {
    dispatch({
      type: ActionType.ADD_MEAL_PER_TURN,
      payload: amount,
    });
  };
};

export const removeMealPerTurn = (amount: number) => {
  return (dispatch: Dispatch<RemoveMealPerTurnAction>) => {
    dispatch({
      type: ActionType.REMOVE_MEAL_PER_TURN,
      payload: amount,
    });
  };
};

export const addWood = (amount: number) => {
  return (dispatch: Dispatch<AddWoodAction>) => {
    dispatch({
      type: ActionType.ADD_WOOD,
      payload: amount,
    });
  };
};

export const removeWood = (amount: number) => {
  return (dispatch: Dispatch<RemoveWoodAction>) => {
    dispatch({
      type: ActionType.REMOVE_WOOD,
      payload: amount,
    });
  };
};

export const addWoodPerTurn = (amount: number) => {
  return (dispatch: Dispatch<AddWoodPerTurnAction>) => {
    dispatch({
      type: ActionType.ADD_WOOD_PER_TURN,
      payload: amount,
    });
  };
};

export const removeWoodPerTurn = (amount: number) => {
  return (dispatch: Dispatch<RemoveWoodPerTurnAction>) => {
    dispatch({
      type: ActionType.REMOVE_WOOD_PER_TURN,
      payload: amount,
    });
  };
};
