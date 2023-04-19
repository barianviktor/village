import React from "react";
import "./building-component.scss";
import { Building } from "../../../interfaces/Building";
export interface BuildingProps {
  building: Building;
}
export default function BuildingComponent({ building }: BuildingProps) {
  return <div className="building">{building.name}</div>;
}
