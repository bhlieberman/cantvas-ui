import { Form, useLoaderData } from "react-router-dom";

export function Details() {
    const [details] = useLoaderData();
    return (
        <>
            <div id="static-details">
                {details?.name}
            </div>
            <div id="enroll-student-form">
                <Form method="post">
                    <input type="text" placeholder="name" name="student-name"></input>
                    <input type="text" placeholder="student email" name="student-email"></input>
                    <button type="submit">Enroll student</button>
                </Form>
            </div>
        </>
    )
}

export async function detailsLoader({ params }) {
    const details = await fetch(`http://localhost:8080/api/courses/info/enrolled/${params.courseId}`);
    return details;
}

export async function studentAction({ request, params }) {
    const formData = await request.formData();
    const name = formData.get("student-name");
    const email = formData.get("student-email");
    return await fetch(`http://localhost:8080/api/courses/enroll?courseId=${params.courseId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
            'id': 42,
            'name': name,
            'email': email
        })
    });
}