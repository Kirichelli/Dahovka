import css from "./Card.module.scss";
interface CardProps {
  image?: string;
  title?: string;
}
const Card = ({ image, title }: CardProps) => {
  return (
    <div className={css.card__body}>
      <div className={css.card__body_image}>
        <img src={image} alt="" />
      </div>
      <div className={css.card__body_title}>
        <span>Завтрак и ужин</span>
        <span>шведский стол</span>
      </div>
    </div>
  );
};

export default Card;
