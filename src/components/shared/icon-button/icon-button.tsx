import React from "react";
import "./icon-button.scss";
import RippleEffect from "../RippleEffect/RippleEffect";
import { ColorTypes } from "../../../interfaces/ColorTypes";
import { ButtonSizeTypes } from "../../../interfaces/ButtonSizeTypes";
import { LinkProps } from "react-router-dom";
import LinkItem, { LinkOBJ } from "../Link/linkItem";

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  ripple?: boolean;
  disabled?: boolean;
  elevation?: boolean;
  color?: ColorTypes;
  size?: ButtonSizeTypes;
  href?: LinkOBJ;
}

export default function IconButton({
  icon,
  onClick,
  ripple,
  disabled,
  color = ColorTypes.primary,
  size = ButtonSizeTypes.medium,
  href,
  elevation = true,
}: IconButtonProps) {
  let button = (
    <button
      className={`icon-button ${elevation && "elevated"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {ripple && <RippleEffect />}
      {icon}
    </button>
  );
  if (href) {
    button = <LinkItem href={href}>{button}</LinkItem>;
  }

  return button;
}
