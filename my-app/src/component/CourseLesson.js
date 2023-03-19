import React from "react";
import VideoCorse from "./VideoCorse";

function CourseLesson ({videoLink, videoId, order, videoPreviewImageLink, videoStatus, title}){

    if (videoStatus === "locked") {
        return (
            <div id={`lesson-id-${videoId}`}>
                <h3>{title}</h3>
                <img
                    src={`${videoPreviewImageLink}/lesson-${order}.webp`}
                    className="style-img"
                    alt="Preview img"
                    width="640"
                    height="360"
                />
                <p>This video is locked.</p>
            </div>
        );
    } else {
        return (
            <div id={`lesson-id-${videoId}`}>
                <h3>{title}</h3>
                <VideoCorse
                    videoLink={videoLink}
                    videoId={videoId}
                    videoPreviewImageLink={videoPreviewImageLink}
                    order={order}
                />
            </div>
        );
    }
}

export default CourseLesson;