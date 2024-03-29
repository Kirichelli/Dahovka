import { useRef, useEffect, useState } from "react";
import Button from "../shared/Button/Button";
import Card from "../shared/Card/Card";
import css from "./HorScroll.module.scss";
import image1 from "../../assets/image_1.png";
import image2 from "../../assets/image_2.png";
const cards = [
  {
    image: image1,
    title: "Завтрак и ужин шведский стол",
  },
  { image: image2, title: "Хамам, Баня только SPA корпус" },
  {
    image: image1,
    title: "Завтрак и ужин шведский стол",
  },
  { image: image2, title: "Хамам, Баня только SPA корпус" },
  {
    image: image1,
    title: "Завтрак и ужин шведский стол",
  },
];

const HorScroll = () => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const objectRef = useRef(null);
  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  const calcDynamicHeight = (objectWidth: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    return objectWidth - vw + vh + 150;
  };

  const handleDynamicHeight = (
    ref: React.RefObject<HTMLDivElement>,
    setDynamicHeight: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const objectWidth: number = ref.current ? ref.current.scrollWidth : 0;
    const dynamicHeight: number = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  };

  const applyScrollListener = (
    ref: React.RefObject<HTMLDivElement>,
    setTranslateX: React.Dispatch<React.SetStateAction<number>>
  ) => {
    window.addEventListener("scroll", () => {
      const offsetTop = -(ref.current ? ref.current?.offsetTop : 0);
      setTranslateX(offsetTop);
    });
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div className={css.container} style={{ height: `${dynamicHeight}px` }}>
      <div className={css.sticky} ref={containerRef}>
        <div
          className={css.scroll}
          style={{ transform: `translateX(${translateX}px)` }}
          ref={objectRef}
        >
          <div className={css.scroll__content}>
            <div className={css.scroll__content_title}>
              <span>Вы выбираете дату</span>
              <span>мы заботимся</span>
              <span>об остальном</span>
            </div>
            <div className={css.scroll__content_text}>
              Мы предоставляем 24 услуги, которые уже входят в стоимость номера.
            </div>
            <div className={css.scroll__content_btn}>посмотреть все услуги</div>
          </div>
          <div className={css.scroll__body}>
            {cards.map((card, index) => (
              <Card key={index} image={card.image} title={card.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorScroll;
