import "./navbar.css";
import "../../all.min.css";
import You_tube from "../../assets/youTube.jpg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Navbar({setSidebar}) {
  return (
    <nav  className="navbar">
      <div className="right flex-dire">
        <i className="fa-solid fa-bars" onClick={() => setSidebar((prev) => !prev)}></i>
        <Link to="/"><img src={You_tube} alt="" /></Link>
      </div>
      <div className="cent flex-dire">
        <input type="text" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className="left flex-dire">
      <i className="fa-solid fa-video video-call"></i>
      <i className="fa-solid fa-gamepad"></i>
      <i className="fa-solid fa-bell"></i>
      <img src={You_tube} alt="" />
      </div>
    </nav>
  );
}
