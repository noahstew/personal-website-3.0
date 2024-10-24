import HeroAccent from "../components/hero/HeroAccent";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Hero() {
  return (
    <div href="#landing" className="h-screen">
      <h1 className="mt-10 mx-10 font-bold text-7xl ">Hey 👋</h1>
      <h1 className="-mt-2 mx-10 font-bold text-7xl ">I am Noah</h1>
      <h2 className="mx-10 -mt-2 text-cyan-400">
        Software Engineer|Data Scientist
      </h2>
      <div className="m-10">
        <div className="row  text-teal-400">
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
