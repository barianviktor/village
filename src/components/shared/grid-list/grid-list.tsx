import React from "react";
import "./grid-list.scss";
import { GridItem } from "../../settings-content/settings-content";
import RippleEffect from "../RippleEffect/RippleEffect";
export interface GridListProps {
  data: GridItem[];
  selectedId: any;
  onElementClick: (element: any) => void;
}
export default function GridList({
  data,
  selectedId,
  onElementClick,
}: GridListProps) {
  return (
    <div className="grid-container">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={`grid-item ${item.id === selectedId && "selected"}`}
            onClick={() => onElementClick(item.id)}
            role="button"
          >
            <RippleEffect></RippleEffect>
            <p className="grid-item-title">{item.title}</p>
            <p className="grid-item-sub-title">{item.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
}
