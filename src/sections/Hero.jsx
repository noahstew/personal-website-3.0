import React from "react";
import HeroAccent from "../components/hero/HeroAccent";
import "bootstrap/dist/css/bootstrap.css";

export default function Hero() {
  return (
    <div href="#landing">
      <h1>Hey 👋 I am Noah</h1>
      <h2>Software Engineer | Data Scientist</h2>
      <div className="row">
        <HeroAccent
          className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"
          header="3rd Year"
          subheader="Computer Science Major & Data Science Minor"
        />
        <HeroAccent
          className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"
          header="CoFounder"
          subheader="Web8th Development"
        />
        <HeroAccent
          className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12"
          header="Coach"
          subheader="For mobile development at UBC Okanagans Coding Club"
        />{" "}
      </div>
    </div>
  );
}
