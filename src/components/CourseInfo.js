import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function CourseInfo() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/courses/all")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="CourseInfo" id="courses-div">
                {items.map(course => {
                    return (<div id="course-description" key={course.id}>
                        <p>Course name: {course.name}</p>
                        <p>
                            Begin date: {course.beginDate}
                        </p>
                        <p>End date: {course.endDate}</p>
                        <Link to={`/details/${course.id}`}>
                            <button id="detailed-course-button">View course details</button>
                        </Link>
                    </div>)

                })}
            </div>
        )
    }
}