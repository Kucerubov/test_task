import React, {useState} from "react";
import CourseLesson from "./CourseLesson";
import VideoCorse from "./VideoCorse";
import {Button, Col, Row} from "react-bootstrap";

function PreviewVideo ({course}) {
    const [isLessonVisible, setIsLessonVisible] = useState(false);

    function handleButtonClick() {
        setIsLessonVisible(true);
    }

    return (
        <>
                <Row>
                    <Col>
                        <VideoCorse
                            videoLink={course.meta.courseVideoPreview.link}
                            videoId={course.id}
                        />
                    </Col>
                    <Col>
                       <h5>"+" - для увеличения громкости на 0.25</h5>
                        <h5>"-" - для увеличения громкости на 0.25</h5>
                        <h5>"ArrowLeft" - перемотать назад на 10 секунд</h5>
                        <h5>"ArrowRight" - перемотать вперед на 10 секунд</h5>
                    </Col>
                </Row>
                <Row md={3} >
                    <Button className="btn btn-info" onClick={handleButtonClick}>Show Lesson</Button>
                </Row>
                {isLessonVisible && (
                    <>
                        {course.lessons.map((item) => (
                            <CourseLesson
                                key={item.id}
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