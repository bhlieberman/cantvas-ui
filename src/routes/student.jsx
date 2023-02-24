import { useLoaderData } from "react-router-dom"

export function Student() {
    const { studentDetails } = useLoaderData();
    return (
        <div id="student-profile">
            <p>{studentDetails?.name}</p>
            <p>{studentDetails?.email}</p>
        </div>
    )
}