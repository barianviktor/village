import React from "react";
import "./field-component.scss";
import { Field } from "../../../interfaces/Field";
import AreaComponent from "../area-component/area-component";
import { Area } from "../../../interfaces/Area";

export interface FieldComponentProps {
  field: Field;
  fieldSize: number;
}
export default function FieldComponent({
  field,
  fieldSize,
}: FieldComponentProps) {
  return (
    <div
      className="field"
      style={{
        gridTemplateColumns: `repeat(${fieldSize}, 1fr)`,
        gridTemplateRows: `repeat(${fieldSize}, 1fr)`,
      }}
    >
      {field.areas.map((area: Area) => {
        return (
          <AreaComponent key={"area-" + area.x + "-" + area.y} area={area} />
        );
      })}
    </div>
  );
}
