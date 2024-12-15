import "bootstrap/dist/css/bootstrap.min.css";

export default function ProjectCard(props) {
  return (
    <div className="col-12 col-sm-6 card">
      <img
        src={props.img.src}
        className="card-img-top"
        alt={props.img.alt}
      />
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="card-title">{props.title}</h4>
          <a href={props.link} className="btn btn-primary">
            GitHub
          </a>
        </div>
        <h5 className="card-text">
          {props.tech.map((tech) => tech).join(" | ")}
        </h5>
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
}
