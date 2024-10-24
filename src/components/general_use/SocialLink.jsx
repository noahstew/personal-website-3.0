export default function SocialLink(props) {
    return (
        <>
        <div className="col">
            <p>Image source: {props.imgSrc}</p>
            <p>Image alt: {props.imgAlt}</p>
            <p>Image size: {props.imgSize}</p>
        </div>
            
        </>
    );
}