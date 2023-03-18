import React, { useEffect, useState } from "react";
import { getCourse } from "../http";
import PreviewVideo from "./PreviewVideo";

function PreviewCourse(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await getCourse(props.id)
            setCourse(response);
            setIsLoading(false);
        }
        fetchData().catch(error => console.log(error));
    }, [props.id]);

    if (isLoading) {
        return <p>Loading course data...</p>;
    }

    return (
        <div className="mt-100">
            <h1>{course.title}</h1>
            <PreviewVideo course={course}/>
            <p>{course.tags}</p>
        </div>
    );
}

export default PreviewCourse;
