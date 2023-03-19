import React, {useState} from "react";
import CourseLesson from "./CourseLesson";
import VideoCorse from "./VideoCorse";
import {Button, Row} from "react-bootstrap";

function PreviewVideo ({course}) {
    const [isLessonVisible, setIsLessonVisible] = useState(false);

    function handleButtonClick() {
        setIsLessonVisible(true);
    }

    return (
        <>
        <VideoCorse
            videoLink={course.meta.courseVideoPreview.link}
            videoId={course.id}
        />
        <Row md={3} >
            <Button className="btn btn-info" onClick={handleButtonClick}>Show Lesson</Button>
        </Row>
                {isLessonVisible && (
                    <>
                        {course.lessons.map((item) => (
                            <CourseLesson
                                videoLink={item.link}
                                videoId={item.id}
                                videoStatus={item.status}
                                videoPreviewImageLink={item.previewImageLink}
                                order={item.order}
                                title={item.title}
                            />
                        ))}
                    </>
                )}
        </>
    )
}

export default PreviewVideo;