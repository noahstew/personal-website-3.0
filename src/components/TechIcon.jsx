export default function TechIcon({ name }) {
    let padding;
    name === "css" ? padding = "p-4" : padding = "p-2";
    return(
        <>
        <div>
            <img
                src={`/icons/${name}.png`}
                alt={name}
                className={`${padding} rounded-md border-4 border-neutral-700 bg-gradient-to-br from-neutral-600 via-neutral-500 to-neutral-600 my-2 mx-auto w-20 h-20`}
            />
        </div>
        </>
    );
}