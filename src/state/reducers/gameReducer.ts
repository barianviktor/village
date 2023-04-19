import { AreaType } from "../../interfaces/Area";
import { ActionType } from "../action-types/index";
import { Action } from "../actions/gameActions.interface";
import { GameState } from "./gameState.interface";
import { Resource } from "../../interfaces/Resource";
const initialState: GameState = {
  turn: 0,
  turnLength: 6000,
  language: "hu",
  theme: "light",
  fields: [],
  fieldSize: 21,
  buildings: {
    townHall: {
      id: "town-hall",
      name: "Town Hall",
      description: "The center of governance and administration in the town.",
      cost: {
        1: {
          currency: 100,
          wood: 50,
          stone: 50,
        },
        2: {
          currency: 200,
          wood: 100,
          stone: 100,
        },
        3: {
          currency: 300,
          wood: 150,
          stone: 150,
        },
      },
      provide: {
        1: {
          population: 10,
        },
        2: {
          population: 20,
        },
        3: {
          population: 30,
        },
      },
      allLevels: 3,
      currentLevel: 1,
      canBuildOn: AreaType.grass,
    },
    farm: {
      id: "farm",
      name: "Farm",
      description: "A place to grow crops and provide food for the town.",
      cost: {
        1: {
          currency: 50,
          wood: 25,
          stone: 25,
        },
        2: {
          currency: 100,
          wood: 50,
          stone: 50,
        },
      },

      provide: {
        1: {
          meal: 10,
        },
        2: {
          meal: 20,
        },
      },
      allLevels: 2,
      currentLevel: 1,
      canBuildOn: AreaType.grass,
    },
    lumberMill: {
      id: "lumber-mill",
      name: "Lumber Mill",
      description:
        "A place to process wood and provide materials for construction.",
      cost: {
        1: {
          currency: 50,
          wood: 25,
          stone: 25,
        },
        2: {
          currency: 100,
          wood: 50,
          stone: 50,
        },
      },
      provide: {
        1: {
          wood: 10,
        },
        2: {
          wood: 20,
        },
      },
      allLevels: 2,
      currentLevel: 1,
      canBuildOn: AreaType.lumber,
    },
    stoneMine: {
      id: "stone-mine",
      name: "Stone Mine",
      description:
        "A deep excavation that provides valuable metals for construction.",
      cost: {
        1: {
          currency: 50,
          wood: 25,
        },
        2: {
          currency: 100,
          wood: 50,
        },
      },
      provide: {
        1: {
          stone: 10,
        },
        2: {
          stone: 20,
        },
      },
      allLevels: 2,
      currentLevel: 1,
      canBuildOn: AreaType.stoneMine,
    },
    house: {
      id: "house",
      name: "House",
      description: "A small dwelling for a family or a few individuals.",
      cost: {
        1: {
          currency: 50,
          wood: 25,
          stone: 25,
        },
        2: {
          currency: 100,
          wood: 50,
          stone: 50,
        },
      },
      provide: {
        1: {
          population: 5,
        },
        2: {
          population: 10,
        },
      },
      allLevels: 2,
      currentLevel: 1,
      canBuildOn: AreaType.grass,
    },
  },
};

const resourcesReducer = (
  state: GameState = initialState,
  action: Action
): GameState => {
  switch (action.type) {
    //handle housing
    case ActionType.INCREASE_GAME_TIME:
      return {
        ...state,
        turn: state.turn + 1,
      };
    case ActionType.SET_GAME_TIME:
      return {
        ...state,
        turn: action.payload,
      };
    case ActionType.SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case ActionType.SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case ActionType.GENERATE_FIELD:
      return {
        ...state,
        fields: state.fields.concat(action.payload),
      };
    default:
      return state;
  }
};
export default resourcesReducer;
