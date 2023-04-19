import React from "react";
import "./area-component.scss";
import { Area, AreaType } from "../../../interfaces/Area";
import Building from "../building-component/building-component";
export interface AreaComponentProps {
  area: Area;
}
export default function AreaComponent({ area }: AreaComponentProps) {
  let interactableAreaTypes = [
    AreaType.grass,
    AreaType.stoneMine,
    AreaType.lumber,
    AreaType.fish,
    AreaType.berry,
    AreaType.grain,
    AreaType.cattle,
  ];

  let gridRowStart = area.y + 1;
  let gridColumnStart = area.x + 1;
  let gridRowEnd = area.y + 2;
  let gridColumnEnd = area.x + 2;

  return (
    <div
      style={{
        gridRowStart: gridRowStart,
        gridRowEnd,
        gridColumnStart: gridColumnStart,
        gridColumnEnd: gridColumnEnd,
      }}
      className={`area ${"area-type-" + area.type}`}
    >
      {area.hasBuilding && (
        <Building building={area.hasBuilding} key={area.hasBuilding.id} />
      )}
    </div>
  );
}
