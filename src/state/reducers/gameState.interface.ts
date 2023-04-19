import { Building } from "../../interfaces/Building";
import { Field } from "../../interfaces/Field";

export interface GameState {
  turn: number;
  turnLength: number;
  language: string;
  theme: string;
  fields: Field[];
  fieldSize: number;
  buildings: {
    [key: string]: Building;
  };
}
