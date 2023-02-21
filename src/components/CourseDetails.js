import React, { useState } from 'react';

export function CourseDetails(props) {
    const [state, setState] = useState(props);
    return (
        <div id="course-details">
            <p>{state.description}</p>
        </div>
    )
}