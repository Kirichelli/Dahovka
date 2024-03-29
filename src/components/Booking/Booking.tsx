import css from "./Booking.module.scss";
import IconMain from "../../assets/logo_light.svg";
import Button from "../shared/Button/Button";
import Icon from "../shared/Icons/Icon";
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
              <div className={css.booking_in}>Заезд</div>
              <Icon name="arrow" />
              <div className={css.booking_out}>Выезд</div>
              <Icon name="calendar" />
            </div>
            <div className={css.booking_guests}>
              <div className={css.guests__title}>2 взрослых, 0 детей</div>
              <Icon name="people" />
            </div>
            <Button href="#">Забронировать номер</Button>
          </div>
          <div className={css.arrow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="23.5"
                stroke="white"
                stroke-opacity="0.6"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.6259 32.3687L23.2518 13H24.7481L24.3741 32.3687C25.6038 28.5466 29.1349 25.2669 33 25.5044L32.9561 27.066C29.3858 26.8467 26.1279 29.1847 25.0435 32.7445L24.3565 35H23.6435L22.9565 32.7445C21.8721 29.1847 18.6142 26.8467 15.0439 27.066L15 25.5044C18.8651 25.2669 22.3961 28.5466 23.6259 32.3687Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
