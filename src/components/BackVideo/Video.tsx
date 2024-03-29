import sample from "../../assets/sample.mp4";
import css from "./Video.module.scss";
const Video = () => {
  return (
    <>
      <div className={css.container__video}>
        <video className={css.video} autoPlay loop muted>
          <source src={sample} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Video;
