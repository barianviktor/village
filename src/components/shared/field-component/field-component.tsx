import React from "react";
import "./field-component.scss";
import { Field } from "../../../interfaces/Field";
import AreaComponent from "../area-component/area-component";
import { Area } from "../../../interfaces/Area";

export interface FieldComponentProps {
  field: Field;
}
export default function FieldComponent({ field }: FieldComponentProps) {
  return (
    <div className="field">
      {field.areas.map((areas: Area[], index: number) => {
        return (
          <div key={"area-row-" + index} className="area-row">
            {areas.map((area: Area) => {
              return (
                <AreaComponent key={"area-" + area.x + area.y} area={area} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
