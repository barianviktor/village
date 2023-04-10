import { ActionType } from "../action-types";

export interface IncreaseGameTimeAction {
  type: ActionType.INCREASE_GAME_TIME;
}

export interface SetGameTimeAction {
  type: ActionType.SET_GAME_TIME;
  payload: number;
}

export interface SetGameLanguageAction {
  type: ActionType.SET_LANGUAGE;
  payload: string;
}

export interface SetGameThemeAction {
  type: ActionType.SET_THEME;
  payload: "light" | "dark";
}

export type Action =
  | IncreaseGameTimeAction
  | SetGameTimeAction
  | SetGameLanguageAction
  | SetGameThemeAction;
