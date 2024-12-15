import "bootstrap/dist/css/bootstrap.min.css";

export default function SkillType(props) {
    return (
      <div className="col-lg-2 col-md-3 col-sm-6">
        <button onClick={props.onClick} >
          <h3>{props.type}</h3>
        </button>
      </div>
    );
  }