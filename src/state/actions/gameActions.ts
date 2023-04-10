import { Dispatch } from "react";
import {
  IncreaseGameTimeAction,
  SetGameLanguageAction,
  SetGameThemeAction,
  SetGameTimeAction,
} from "./gameActions.interface";
import { ActionType } from "../action-types";

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

export const setGameTheme = (theme: "light" | "dark") => {
  return (dispatch: Dispatch<SetGameThemeAction>) => {
    dispatch({
      type: ActionType.SET_THEME,
      payload: theme,
    });
  };
};
