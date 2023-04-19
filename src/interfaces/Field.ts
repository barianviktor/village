import { Area } from "./Area";
import { Resource } from "./Resource";

export interface Field {
  x: number;
  y: number;
  areas: Area[];
  resourceTiles: Resource[];

  revealed: boolean;
  owner: string;
}
