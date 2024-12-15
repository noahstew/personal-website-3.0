export default function LinkIcon({ link = "", download = "", xmlns, viewBox, path, }) {
    return (<>
    <a href={link} download={download}>
    <svg
    className="rounded-md bg-neutral-300 px-1 h-12 w-12 fill-neutral-900 hover:-translate-y-2 ease-in-out duration-300 transform"
    xmlns={xmlns}
    viewBox={viewBox}
    >
    <path d={path}></path>
    </svg>
    </a>
    </>);
    }
    