import Houses from "../../assets/house.png";
import css from "./Slider.module.scss";
const Slider = () => {
  return (
    <div className={css.slider}>
      <img className={css.slider__image} src={Houses} alt="" />
    </div>
  );
};

export default Slider;
