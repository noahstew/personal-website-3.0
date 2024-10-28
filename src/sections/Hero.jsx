import HeroAccent from "../components/hero/HeroAccent";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Hero() {
  return (
    <div id="landing" className="h-screen pt-10 mx-10">
      <h1 className="font-bold text-7xl pt-36">Hey 👋</h1>
      <h1 className="font-bold text-7xl ">I am Noah</h1>
      <h2 className="text-cyan-400">
        Software Engineer|Data Scientist
      </h2>
      <div >
        <div className="row  text-teal-400 pt-48">
          <HeroAccent
            header="3rd Year"
            subheader="Computer Science Major & Data Science Minor"
          />
          <HeroAccent header="CoFounder" subheader="Web8th Development" />
          <HeroAccent
            header="Coach"
            subheader="For mobile development at UBC Okanagans Coding Club"
          />{" "}
        </div>
      </div>
    </div>
  );
}
