import NavMenuLink from "./NavMenuLink";
import NavMenuSocialLinks from "./NavMenuSocialLinks";

export default function NavMenu({ onClose }) {
  return (
    <nav className="fixed top-0 right-0 w-3/4 md:w-1/3 bg-cyan-400 h-screen rounded-tl-3xl rounded-bl-3xl z-10">
      <div onClick={onClose} className="absolute top-0 right-0 m-12 py-4 hover:cursor-pointer hover:animate-spin-slow">
        <span
          className="block w-16 h-2 m-auto bg-slate-50 rounded-lg"
          style={{ transform: "translateY(8px) rotate(45deg)" }}
        ></span>
        <span
          className="block w-16 h-2 m-auto bg-slate-50 rounded-lg"
          style={{ transform: "translateY(0px) rotate(-45deg)" }}
        ></span>
      </div>
      <a href="#landing">
        <h2 className="absolute top-1/4 right-0 m-12 text-slate-800 text-5xl font-bold text-right">
          My Stewdio
        </h2>
      </a>
      <div className="absolute top-1/3 right-0 m-12 text-slate-50 font-semibold text-right">
        <NavMenuLink idLink="#skills" text="Skills" />
        <NavMenuLink idLink="#projects" text="Projects" />
        <NavMenuLink idLink="#contact" text="Contact" />
      </div>

      <NavMenuSocialLinks />
    </nav>
  );
}
