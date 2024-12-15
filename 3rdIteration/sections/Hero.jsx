import HeroAccent from "../components/hero/HeroAccent";
import "../index.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Hero() {
  return (
    <div id="landing" className="h-screen pt-10 mx-10">
      <h1 className="font-bold text-7xl pt-36">Hey 👋</h1>
      <h1 className="font-bold text-7xl ">I am Noah</h1>
      <h2 className="text-cyan-400">Software Engineer|Data Scientist</h2>

      <div className="row  text-teal-400 pt-14">
        <HeroAccent
          header="3rd Year"
          subheader="BS Student in Computer Science & Data Science Minor"
        />
        <HeroAccent
          header="Coach"
          subheader="Teaching mobile development at UBC Okanagan's Coding Club"
        />
        <HeroAccent
          header="CoFounder"
          subheader="Providing amazing projects at Web8th Development"
        />
      </div>
    </div>
  );
}
