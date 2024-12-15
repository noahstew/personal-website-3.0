import SectionHeader from "../components/general_use/SectionHeader";
import SocialLink from "../components/general_use/SocialLink";

export default function Contact() {
  return (
    <div className="mx-10">
      <SectionHeader sectionId="contact" title="Contact" />
      <div className="row">
        <div className="col-6 col-md-3">
          <SocialLink
            imgSrc="https://via.placeholder.com/150"
            imgAlt="email"
            imgSize="150"
          />
        </div>
        <div className="col-6 col-md-3">
          <SocialLink
            imgSrc="https://via.placeholder.com/150"
            imgAlt="resume"
            imgSize="150"
          />
        </div>
        <div className="col-6 col-md-3">
          <SocialLink
            imgSrc="https://via.placeholder.com/150"
            imgAlt="linkedin"
            imgSize="150"
          />
        </div>
        <div className="col-6 col-md-3">
          <SocialLink
            imgSrc="https://via.placeholder.com/150"
            imgAlt="github"
            imgSize="150"
          />
        </div>
      </div>
    </div>
  );
}
