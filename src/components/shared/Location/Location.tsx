import css from "./Location.module.scss";
import mountains from "../../assets/mountains.png";
import Icon from "../Icons/Icon";
import Mount from "../../../assets/image18.png";
import { useEffect, useRef, useState } from "react";
import { lerp } from "../../helpers/MathUtils";
const services = [
  {
    icon: "service_1",
    title: "Завтрак и ужин шведский стол",
  },
  { icon: "service_2", title: "2 термальных бассейна" },
  { icon: "service_3", title: "24 услуги бесплатно" },
  { icon: "service_4", title: "Детская анимация 24/7" },
];
const Location = () => {
  const elementRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const element = elementRef.current;
    if (element) {
      const handleScroll = () => {
        const { height, top } = element.getBoundingClientRect();
        const animStart = top - window.innerHeight * 0.5;
        const animlength = height;
        const progress = Math.min(Math.max(-animStart / animlength, 0), 1);
        const shift = lerp(0, 100, progress);
        element.style.transform = `translateX(calc(-50% - ${shift}%))`;
        console.log(shift);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div className={css.location}>
      <div className={css.location__content}>
        <div className={css.location__image}>
          <div ref={elementRef} className={css.image}>
            <img src={Mount}></img>
          </div>
        </div>
        <div className={css.location__info}>
          <div className={css.title}>
            <span>Перезагрузитесь</span>
            <span>от серых будней</span>
          </div>
          <div className={css.block}>
            <div className={css.text}>
              Наш отель расположен — в станице Даховская, рядом все живописные
              места: Лаго-Наки, Гузерипль, Хаджохская теснина, водопады Руфабго.
            </div>
            <div className={css.services}>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <Icon name={service.icon} width={48} height={48} />
                    {service.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
