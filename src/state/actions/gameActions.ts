import { Dispatch } from "react";
import {
  GenerateFieldAction,
  IncreaseGameTimeAction,
  SetGameLanguageAction,
  SetGameThemeAction,
  SetGameTimeAction,
} from "./gameActions.interface";
import { ActionType } from "../action-types";
import { Field } from "../../interfaces/Field";
import { useSelector } from "react-redux";
import { GameState } from "../reducers/gameState.interface";
import { RootState } from "../reducers";

export const increaseGameTime = () => {
  return (dispatch: Dispatch<IncreaseGameTimeAction>) => {
    dispatch({
      type: ActionType.INCREASE_GAME_TIME,
    });
  };
};

export const setGameTime = (time: number) => {
  return (dispatch: Dispatch<SetGameTimeAction>) => {
    dispatch({
      type: ActionType.SET_GAME_TIME,
      payload: time,
    });
  };
};

export const setGameLanguage = (language: string) => {
  return (dispatch: Dispatch<SetGameLanguageAction>) => {
    dispatch({
      type: ActionType.SET_LANGUAGE,
      payload: language,
    });
  };
};

export const setGameTheme = (theme: string) => {
  return (dispatch: Dispatch<SetGameThemeAction>) => {
    dispatch({
      type: ActionType.SET_THEME,
      payload: theme,
    });
  };
};

export const GenerateField = (field: Field) => {
  return (dispatch: Dispatch<GenerateFieldAction>) => {
    dispatch({
      type: ActionType.GENERATE_FIELD,
      payload: field,
    });
  };
};
