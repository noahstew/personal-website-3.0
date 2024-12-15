export default function HeroAccent(props) {
    return (
        <div className="col-sm col-md-4">
          <h3>{props.header}</h3>
          <p className="text-slate-50">{props.subheader}</p>
        </div>
            );
}