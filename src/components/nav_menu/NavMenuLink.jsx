export default function NavMenuLink(props) {
  return (
    <h3>
      <a className="no-underline text-slate-50 text-4xl" href={props.idLink}>{props.text}</a>
    </h3>
  );
}
