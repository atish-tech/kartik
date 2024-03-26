import landingImage from "../assets/landing.png";
import logo from "../assets/logo.jpg";
import { Navigation } from "./Navigation";

export const Home = () => {
  return (
    <div
      className="h-screen w-screen "
      style={{
        backgroundImage: `url(${landingImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="py-5 flex items-center justify-around">
        <div>
          <img src={logo} alt="logo" className="rounded-full" />
        </div>
        <Navigation textColor="white"/>
      </div>
    </div>
  );
};
