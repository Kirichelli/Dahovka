import { useState } from "react";
import Button from "../Button/Button";
import css from "./Navbar.module.scss";
import Icon from "../Icons/Icon";
import Sidebar from "../Sidebar/Sidebar";
const Navbar = () => {
  const links = [
    { title: "Об отеле" },
    { title: "Номера" },
    { title: "Ресторан" },
    { title: "Контакты" },
  ];
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <Sidebar active={menuActive} setActive={setMenuActive} />
      <header className={css.header}>
        <div className={css.header__left}>
          <Button onClick={() => setMenuActive(!menuActive)} href="#">
            <span>Меню</span>
            <Icon name={menuActive ? "close" : "menu"} />
          </Button>
          <nav>
            <ul className={css.menu}>
              {links.map((link, index) => (
                <li key={index}>
                  <a href="#">{link.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={css.header__right}>
          <a className={css.header__phone} href="#">
            <span className={css.number}>8 (800) 533-79-38</span>
            <span className={css.text}>бронирование круглосуточно</span>
          </a>
          <Button href="#">ЗАБРОНИРОВАТЬ</Button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
