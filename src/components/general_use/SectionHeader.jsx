export default function SectionHeader(props) {
    return (
        <div id={props.sectionId}>
        <h2>{props.title}</h2>
        </div>
    );
    
}