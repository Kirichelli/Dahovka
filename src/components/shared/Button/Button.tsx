import React, { ReactNode } from "react";
import css from "./Button.module.scss";
import Icon from "../Icons/Icon";
interface ButtonProps {
  children?: ReactNode;
  onClick?: () => void;
  href?: string;
}
const Button = ({ children, onClick, href }: ButtonProps) => {
  return (
    <>
      {href ? (
        <a href={href} onClick={onClick} className={css.button__link}>
          {children}
        </a>
      ) : (
        <button onClick={onClick} className={css.button}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
