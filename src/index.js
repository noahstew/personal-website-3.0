import React, {useEffect} from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



function App() {
  useEffect(() => {
    document.body.classList.add('bg-slate-800', 'text-slate-200');
    document.body.style.fontFamily = "Source Code Pro";
  }, []);

  return (
    <React.StrictMode>
      <div>
        <NavBar/>
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </React.StrictMode>
  );
}
