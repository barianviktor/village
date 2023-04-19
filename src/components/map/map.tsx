import React, { useEffect } from "react";
import "./map.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/reducers";
import { GameState } from "../../state/reducers/gameState.interface";
import { bindActionCreators } from "redux";
import * as GameActions from "../../state/actions/gameActions";
import { Field } from "../../interfaces/Field";
import { Area, AreaType } from "../../interfaces/Area";
import FieldComponent from "../shared/field-component/field-component";
export default function Map() {
  const dispatch = useDispatch();

  const game: GameState = useSelector((state: RootState) => state.game);
  const { GenerateField } = bindActionCreators(GameActions, dispatch);
  let typeChances: {
    [key: string]: {
      type: AreaType;
      chance: number;
    };
  } = {
    GRASS: {
      type: AreaType.grass,
      chance: 0.6,
    },
    FOREST: {
      type: AreaType.forest,
      chance: 0.1,
    },
    WATER: {
      type: AreaType.water,
      chance: 0.05,
    },
    MOUNTAIN: {
      type: AreaType.mountain,
      chance: 0.05,
    },
  };
  const determineType = (gird: Area[], x: number, y: number) => {
    let neighborTypes: AreaType[] = [];
    let neighbors = findNeighbors(x, y, gird);

    neighbors.forEach((neighbor) => {
      neighborTypes.push(neighbor.type);
    });

    if (Math.random() < 0.7) {
      //full random between all types based on typeChances chance
      let items = Object.keys(typeChances).map((key) => typeChances[key].type);
      let chances = Object.keys(typeChances).map(
        (key) => typeChances[key].chance
      );
      let result = [];
      let total = chances.reduce((a, b) => a + b, 0);
      for (let i = 0; i < items.length; i++) {
        const chance = chances[i] / total;
        let random = Math.random();
        if (random < chance) {
          result.push(items[i]);
        }
      }
      let item = result[Math.floor(Math.random() * result.length)];
      return item;
    } else {
      //random between types that are in neighbors
      let items = neighborTypes;
      /*  let chances = neighborTypes.map((type) => {
        return typeChances[type].chance;
      }); */
      items = items.filter((item) => item !== AreaType.grass);
      console.log("items", items);
      let item = items[Math.floor(Math.random() * items.length)];
      /*   console.log("chances", chances); */
      return item;
    }
  };

  const findNeighbors = (x: number, y: number, grid: Area[]): Area[] => {
    let neighbors: Area[] = [];
    let possibleNeighbors: {
      x: number;
      y: number;
    }[] = [
      {
        x: x - 1,
        y: y,
      },
      {
        x: x + 1,
        y: y,
      },
      {
        x: x,
        y: y - 1,
      },
      {
        x: x,
        y: y + 1,
      },
      {
        x: x - 1,
        y: y - 1,
      },
      {
        x: x + 1,
        y: y + 1,
      },
      {
        x: x - 1,
        y: y + 1,
      },
      {
        x: x + 1,
        y: y - 1,
      },
    ];
    possibleNeighbors.forEach((possibleNeighbor) => {
      let area = findAreaInField(possibleNeighbor.x, possibleNeighbor.y, grid);
      if (area) {
        neighbors.push(area);
      }
    });
    return neighbors;
  };
  const findAreaInField = (
    x: number,
    y: number,
    grid: Area[]
  ): Area | undefined => {
    let area = grid.find((area: Area) => area.x == x && area.y == y);
    return area;
  };

  const generateField = (x: number, y: number) => {
    const field: Field = {
      x: x,
      y: y,
      areas: [],
      resourceTiles: [],
      revealed: false,
      owner: "",
    };

    for (let i = 0; i < game.fieldSize; i++) {
      for (let j = 0; j < game.fieldSize; j++) {
        const area: Area = {
          x: i,
          y: j,
          type: AreaType.grass,
        };
        if (
          i == Math.floor(game.fieldSize / 2) &&
          j == Math.floor(game.fieldSize / 2)
        ) {
          area.hasBuilding = game.buildings.townHall;
        }
        field.areas.push(area);
      }
    }

    GenerateField(field);
    field.areas.forEach((area: Area) => {
      let areaType = determineType(field.areas, area.x, area.y);
      if (areaType) {
        area.type = areaType;
      }
    });
  };
  useEffect(() => {
    console.log("map");
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        generateField(0, 0);
      }
    }
  }, []);
  console.log("game", game);
  return (
    <div
      className="map"
      style={{ gridTemplateColumns: `repeat(${game.fieldSize}, 1fr)` }}
    >
      {game.fields.map((field: Field) => {
        return (
          <FieldComponent
            key={"field-" + field.x + field.y}
            field={field}
            fieldSize={game.fieldSize}
          />
        );
      })}
    </div>
  );
}
