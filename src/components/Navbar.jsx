function Navbar() {
  return (
    <div className="fixed top-0 left-0 mt-12 ml-4 flex flex-col justify-end ">
      <a href="#about" className="hover:text-neutral-300">
        About
      </a>
      <a href="#skills" className="hover:text-neutral-300">
        Skills
      </a>
      <a href="#projects" className="hover:text-neutral-300">
        Projects
      </a>
      <a href="#contact" className="hover:text-neutral-300">
        Contact
      </a>
    </div>
  );
}
export default Navbar;
