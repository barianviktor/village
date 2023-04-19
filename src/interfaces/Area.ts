import { Building } from "./Building";

export interface Area {
  type: AreaType;
  x: number;
  y: number;
  hasBuilding?: Building;
}

export enum AreaType {
  grass = "GRASS",
  water = "WATER",
  mountain = "MOUNTAIN",
  forest = "FOREST",
  stoneMine = "STONE_MINE",
  fish = "FISH",
  berry = "BERRY",
  grain = "GRAIN",
  lumber = "LUMBER",
  cattle = "CATTLE",
}
