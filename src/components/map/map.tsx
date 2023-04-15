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

  const generateField = (x: number, y: number) => {
    /* 
    export interface Area {
  type: AreaType;
  x: number;
  y: number;
  hasBuilding: boolean;
}
 */
    const field: Field = {
      x: x,
      y: y,
      areas: [],
      revealed: false,
      owner: "",
    };
    console.log("generateField");
    for (let i = 0; i < game.fieldSize; i++) {
      /* const areaRow: AreaRow = {
        areas: [],
      }; */
      const areas = [];
      for (let j = 0; j < game.fieldSize; j++) {
        const area: Area = {
          x: i,
          y: j,
          type: AreaType.grass,
        };
        areas.push(area);
      }
      field.areas.push(areas);
    }

    GenerateField(field);
  };
  useEffect(() => {
    console.log("map");
    generateField(0, 0);
  }, []);
  console.log("game", game);
  return (
    <div>
      <pre>{JSON.stringify(game)}</pre>
      {game.fields.map((field: Field) => {
        return (
          <FieldComponent key={"field-" + field.x + field.y} field={field} />
        );
      })}
    </div>
  );
}
