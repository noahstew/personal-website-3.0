import "bootstrap/dist/css/bootstrap.min.css";
import SocialLink from "../general_use/SocialLink";

const imgSize = "50px";
export default function NavMenuSocialLinks() {
    return (
        <div className="row">
            <SocialLink imgSrc="linkedIn" imgAlt="LinkedIn" imgSize={imgSize}/>
            <SocialLink imgSrc="github" imgAlt="GitHub" imgSize={imgSize}/>
            <SocialLink imgSrc="email" imgAlt="Email" imgSize={imgSize}/>
        </div>
    );
}