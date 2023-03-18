import React from "react";

import VideoCorse from "./VideoCorse";

function CourseLesson ({videoLink, videoId, order, videoPreviewImageLink, videoStatus, title}){

    console.log(`${videoPreviewImageLink}/lesson-${order}.webp.`);
    console.log(order);

    if (videoStatus === "locked") {
        return (
            <div>
                <img
                    src={`${videoPreviewImageLink}/lesson-${order}.webp`}
                    className="style-img"
                    alt="Preview img"
                    width="640"
                    height="360"
                />
                <h3>{title}</h3>
                <p>This video is currently locked.</p>
            </div>
        );
    } else {
        return (
            <div>
                <VideoCorse
                    videoLink={videoLink}
                    videoId={videoId}
                    videoPreviewImageLink={videoPreviewImageLink}
                    order={order}
                />
                <h3>{title}</h3>
                <p>{videoStatus}</p>
            </div>
        );
    }
}

export default CourseLesson;