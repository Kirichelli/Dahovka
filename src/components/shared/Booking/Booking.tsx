import css from "./Booking.module.scss";
import IconMain from "../../../assets/logo_light.svg";
import Button from "../Button/Button";
import Icon from "../Icons/Icon";
import Video from "../BackVideo/Video";
const Booking = () => {
  return (
    <>
      <div className={css.booking}>
        <Video />
        <div className={css.booking__container}>
          <img className={css.booking__icon} src={IconMain} alt="" />
          <div className={css.booking__title}>любимый отель в горах Адыгеи</div>
          <div className={css.booking__find}>
            <div className={css.booking__registration}>
              <div className={css.booking_in}>
                <input type="text" />
              </div>
              <Icon name="arrow" />
              <div className={css.booking_out}></div>
            </div>
            <div className={css.booking_guests}></div>
            <Button>Забронировать номер</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
