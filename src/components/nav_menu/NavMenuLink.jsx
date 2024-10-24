export default function NavMenuLink(props) {
  return (
    <h3>
      <a href={props.idLink}>{props.text}</a>
    </h3>
  );
}
