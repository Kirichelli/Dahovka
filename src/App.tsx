import Video from "./components/shared/BackVideo/Video";
import Booking from "./components/shared/Booking/Booking";
import Location from "./components/shared/Location/Location";
import Navbar from "./components/shared/Navbar/Navbar";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import Icon from "./components/shared/Icons/Icon";
import css from "./App.module.scss";
function App() {
  return (
    <div className={css.wrapper}>
      <Navbar />
      <Booking />
      <Location />
      <Booking />
      <Booking />
      <Booking />
    </div>
  );
}

export default App;
