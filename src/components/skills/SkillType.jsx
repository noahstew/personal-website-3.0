import "bootstrap/dist/css/bootstrap.min.css";

export default function SkillType(props) {
    return (
      <div className="col-2">
        <button onClick={props.onClick} >
          <h3>{props.type}</h3>
        </button>
      </div>
    );
  }