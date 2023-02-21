import { useLoaderData } from "react-router-dom";

export function Details() {
    const details = useLoaderData();
    return (
        <div id="static-details">
            {details.name}: {details.email}
        </div>
    )
}

export async function detailsLoader() {
    const details = await fetch("http://localhost:8080/students/4");
    return details;
}