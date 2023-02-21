import { Outlet, useLoaderData, Link } from "react-router-dom";

export default function Root() {
    const details = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>Cantvas</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search details"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    {details.length ? (
                        <ul>
                            {details.map((detail) => (
                                <li key={detail.id}>
                                    <Link to={`details/${detail.id}`}>
                                        {detail.name}{" "}
                                        {detail.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No details</i>
                        </p>
                    )}
                </nav>
            </div>
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export async function loader() {
    const details = await fetch("http://localhost:8080/api/courses/info/enrolled?courseId=1");
    return details;
}