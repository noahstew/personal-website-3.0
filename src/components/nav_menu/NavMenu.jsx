import React from "react";
import NavMenuLink from "./NavMenuLink";
import NavMenuSocialLinks from "./NavMenuSocialLinks";

export default function NavMenu({ onClose }) {
  return (
    <nav>
      <div onClick={onClose}>
        <span class="x"></span>
        <span class="x"></span>
      </div>
      <h2> My Stewdio</h2>
      <NavMenuLink idLink="#skills" text="Skills" />
      <NavMenuLink idLink="#projects" text="Projects" />
      <NavMenuLink idLink="#contact" text="Contact" />
      <NavMenuSocialLinks/>
    </nav>
  );
}
