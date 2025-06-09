import home_banner from "../images/home_banner.jpg";
import "../styles/HomeBanner.css";

export const HomeBanner = () => {
  return (
    <div className="container_banner">
      <img
        src={home_banner}
        alt="banner beach and rocks"
        className="home-img"
      ></img>
    </div>
  );
};
