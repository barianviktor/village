import { AreaType } from "./Area";

export interface Building {
  id: string;
  name: string;
  description: string;
  cost: {
    [key: string]: {
      [key: string]: number;
    };
  };
  provide: {
    [key: string]: {
      [key: string]: number;
    };
  };
  allLevels: number;
  currentLevel: number;

  canBuildOn: AreaType;
}
