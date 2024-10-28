import "bootstrap/dist/css/bootstrap.min.css";
import SocialLink from "../general_use/SocialLink";


const styles = "w-16 p-2 bg-slate-50";
export default function NavMenuSocialLinks() {
  return (
    <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 m-auto flex justify-center space-x-4 w">
      <SocialLink
        imgSrc="/link_images/linkedin.png"
        imgAlt="LinkedIn"
        styles={styles}
      />
      <SocialLink
        imgSrc="/link_images/github.png"
        imgAlt="GitHub"
        styles={styles}
      />
      <SocialLink
        imgSrc="/link_images/resume.png"
        imgAlt="Resume"
        styles={styles}
      />
      <SocialLink
        imgSrc="/link_images/email.png"
        imgAlt="Email"
        styles={styles}
      />
    </div>
  );
}
