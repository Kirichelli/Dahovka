import Booking from "./components/Booking/Booking";
import Location from "./components/Location/Location";
import Navbar from "./components/shared/Navbar/Navbar";
import css from "./App.module.scss";
import Slider from "./components/Slider/Slider";
import HorScroll from "./components/HorScroll/HorScroll";
function App() {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <Booking />
      <Location />
      <Slider />
      <HorScroll />
      <Location />
    </div>
  );
}

export default App;
