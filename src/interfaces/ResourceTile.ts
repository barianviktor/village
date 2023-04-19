export interface Area {
  type: ResourceType;
  x: number;
  y: number;
}

export enum ResourceType {
  lumber = "LUMBER",
  stoneMine = "STONE_MINE",
  fish = "FISH",
  berry = "BERRY",
  grain = "GRAIN",
  cattle = "CATTLE",
}
