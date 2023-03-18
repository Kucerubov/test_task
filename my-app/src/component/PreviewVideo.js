import React from "react";
import CourseLesson from "./CourseLesson";
import VideoCorse from "./VideoCorse";

function PreviewVideo ({course}) {


    return (
        <>
            <VideoCorse
                videoLink={course.meta.courseVideoPreview.link}
                videoId={course.id}
            />
            {course.lessons.map((item) => (
                <CourseLesson
                    videoLink={item.link}
                    videoId={item.id}
                    videoStatus={item.status}
                    videoPreviewImageLink={item.previewImageLink}
                    order={item.order}
                />
            ))}
        </>
    )
}

export default PreviewVideo;