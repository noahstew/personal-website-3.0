import React, {useState} from "react";
import "../index.css";
import Hamburger from "../components/nav_menu/Hamburger";
import NavMenu from "../components/nav_menu/NavMenu";

export default function NavBar() {
const [isClosed, setIsClosed] = useState(true);

function toggleMenu() {
	setIsClosed(!isClosed);
} 

  return (
    <div>
      {isClosed ? <Hamburger onOpen={toggleMenu}/> : <NavMenu onClose={toggleMenu}/>}
    </div>
  );
}
