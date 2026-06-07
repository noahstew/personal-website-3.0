import DesktopNavButton from '../components/DesktopNavButton';
import HamburgerMenu from '../components/HamburgerMenu';

function Navbar() {
  return (
    <>
      <div className="lgnavbar relative hidden lg:fixed lg:top-0 lg:left-0 lg:my-12 lg:ml-2 lg:flex lg:flex-col lg:items-end lg:text-2xl lg:font-bold lg:py-4 lg:pl-2">
        <DesktopNavButton id="about" />
        <DesktopNavButton id="skills" />
        <DesktopNavButton id="projects" />
        <DesktopNavButton id="experience" />
        {/* <DesktopNavButton id="contact" /> */}
      </div>
      <HamburgerMenu />
    </>
  );
}
export default Navbar;
