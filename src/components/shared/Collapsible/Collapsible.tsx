import { useState, useRef, useEffect } from "react";
import Icon from "../Icons/Icon";
import css from "./Collapsible.module.scss";

export interface CollapsibleProps {
  label?: string;
  list?: string[];
  index?: number;
}
const Collapsible = ({ label, list, index }: CollapsibleProps) => {
  const [height, setHeight] = useState(0);
  const [isClicked, setIsClicked] = useState(false);

  const elementRef = useRef<HTMLDivElement | null>(null);

  const toggle = () => {
    const element = elementRef.current;
    if (element) {
      setIsClicked(!isClicked);
      setHeight(height !== 0 ? 0 : element.scrollHeight);
    }
  };

  return (
    <>
      <div className={css.drop}>
        <div className={css.drop__content}>
          <div className={css.drop__index}>{`0${index}`}</div>
          <a className={css.drop__link} href="#">
            {label}
          </a>
          {list && (
            <div
              onClick={toggle}
              className={isClicked ? css.drop__iconactive : css.drop__icon}
            >
              <Icon name="drop" />
            </div>
          )}
        </div>
        {list && (
          <div
            ref={elementRef}
            className={css.block}
            style={{ height: height ? `${height}px` : "0px" }}
          >
            <ul className={css.content}>
              {list.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Collapsible;
