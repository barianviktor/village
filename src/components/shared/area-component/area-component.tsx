import React from "react";
import "./area-component.scss";
import { Area } from "../../../interfaces/Area";
export interface AreaComponentProps {
  area: Area;
}
export default function AreaComponent({ area }: AreaComponentProps) {
  return <div className={`area ${"area-type-" + area.type}`}></div>;
}
