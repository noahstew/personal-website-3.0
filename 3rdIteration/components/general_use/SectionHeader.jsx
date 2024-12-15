export default function SectionHeader(props) {
    return (
        <div id={props.sectionId}>
        <h2 className="text-6xl font-bold" >{props.title}</h2>
        </div>
    );
    
}