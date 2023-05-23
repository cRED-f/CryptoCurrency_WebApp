import { NavLink } from "react-router-dom";
import img from "../assets/Images/background.png";
import "../assets/styles/animation.css";

function Home() {
  return (
    <div className="h-[100vh] relative">
      <img
        className="image-container w-screen"
        src={img}
        alt="background img"
      />

      <div>
        <h1 className="left-[600px]">
          <div className="message">
            <div className="word2">World</div>
          </div>
        </h1>
        <h1 className="left-[130px] top-[390px]">
          <div>
            <div className="word2">Explore</div>
          </div>
        </h1>
        <br />
        <h1 className="left-60 top-90">
          <div>
            <div className="word2">Crypto Currency</div>
          </div>
        </h1>
      </div>
      <NavLink to="/coins">
        {" "}
        <button
          className="glow-on-hover absolute top-[60%]  text-[25px] font-[bold] left-[150px] transform translate-x-[-50%] translate-y-[-50%]"
          type="button"
        >
          Enter
        </button>
      </NavLink>
    </div>
  );
}

export default Home;
