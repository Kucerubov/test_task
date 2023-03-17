import React, { useEffect, useState } from "react";
import {getCourse} from "../http";
import Hls from "hls.js";

function PreviewCourse(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [course, setCourse] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await getCourse(props.id)
            setCourse(response);
            console.log(response.lessons);
            setIsLoading(false);
        }
        fetchData().catch(error => console.log(error));
    }, [props.id]);

    if (isLoading) {
        return <p>Loading course data...</p>;
    }

    function getVideo() {

    }

    const video = document.getElementById('video-element');
    const hls = new Hls();

    return (
        <div className="mt-100">
            <h1>{course.title}</h1>
            {
                hls.loadSource(`${response.lessons[0].link}`)
                hls.attachMedia(video);
            }
            <p>{course.tags}</p>
        </div>
    );
}

export default PreviewCourse;
