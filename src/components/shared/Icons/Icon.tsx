import React from "react";
import Icons from "./sprite.svg";
import css from "./Icons.module.scss";

interface IconsProps {
  name: string;
  width?: number;
  height?: number;
  stroke?: string;
}
const Icon = ({ name, height = 24, width = 24, stroke }: IconsProps) => {
  return (
    <svg width={width} height={height} className={css.icon}>
      <use
        xlinkHref={`${Icons}#icon-${name}`}
        stroke={stroke}
        width={width}
        height={height}
      />
    </svg>
  );
};

export default Icon;
