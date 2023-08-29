import React from "react";
import "./Button.scss";
let cn = require("classnames");

type ButtonTheme =
  | "add"
  | "sortAsc"
  | 'sortDesc'
  | "additionally"
  | "exit"
  | "search"
  | "additionallyTransparent"
  | "addTransparentButton";

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  theme: ButtonTheme;
  type?: "submit";
  disabled?: boolean;
};

function Button({ onClick, children, theme, disabled, type }: Props) {
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        disabled={disabled}
        className={cn(
          "root",
          [`root_theme_${theme}`],
          disabled && "root_disabled"
        )}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
