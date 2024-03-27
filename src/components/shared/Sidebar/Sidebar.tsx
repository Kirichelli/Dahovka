import Collapsible, { CollapsibleProps } from "../Collapsible/Collapsible";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import css from "./Sidebar.module.scss";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ active, setActive }: SidebarProps) => {
  const links = [
    {
      label: "Об отеле",
      list: [
        "Карта комплекса",
        "Фото и видео",
        "Прейскурант цен и проживания",
        "Правила бронирования",
        "Вопрос-ответ",
      ],
    },
    {
      label: "Услуги",
      list: [
        "Трансфер",
        "Романтический пакет",
        "Быстрое заселение",
        "Корпоративные мероприятия",
      ],
    },
    {
      label: "Развлечения",
      list: [
        "Достопримечательности рядом",
        "SPA-Корпус",
        "Термальный бассейн",
        "Бани",
        "Детский отдых",
        "Зимний отдых",
        "Аренда Велосипедов",
        "Рыбалка",
        "Настольный теннис",
        "Рафтинг",
        "Конные прогулки",
        "Экстрим парк",
      ],
    },
    { label: "Номера" },
    { label: "Ресторан" },
    { label: "Контакты" },
  ];
  return (
    <>
      <div
        className={
          active ? [css.sidebar, css.sidebar__active].join("  ") : css.sidebar
        }
        onClick={() => setActive(!active)}
      >
        <div className={css.blur} />
        <div
          className={css.sidebar__content}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={css.sidebar__buttons}>
            <div className={css.buttons__block}>
              <Button href="#">
                <Icon name="vk" />
              </Button>
              <Button href="#">
                <Icon name="tg" />
              </Button>
              <Button href="#">
                <Icon name="od" />
              </Button>
              <Button href="#">
                <Icon name="youtube" />
              </Button>
            </div>
          </div>
          <div className={css.sidebar__list}>
            {links.map((link, index) => (
              <Collapsible
                index={index + 1}
                label={link.label}
                list={link.list}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
