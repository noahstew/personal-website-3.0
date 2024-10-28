
export default function SocialLink(props) {
    return (
      <a className="hover:cursor-pointer">
        <div className={`${props.styles} rounded-lg`}>
            <img src={props.imgSrc} alt={props.imgAlt} />
        </div>
      </a>
    );
  }
  