import { Area } from "./Area";

export interface Field {
  x: number;
  y: number;
  areas: Area[][];
  revealed: boolean;
  owner: string;
}
