import React, {useState} from "react";
import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import PreviewCourse from "./PreviewCourse";
import {Link} from "react-router-dom";


const Courses = ({ data }) => {

    const [buttonID, setButtonId] = useState();

    function handleButtonClick(event) {
        const id = event.target.id;
        console.log(id);
        setButtonId(id);
    }

    return (
        <Container>
            <h1>Courses List</h1>
            {data.map((course) => (
                <div key={course.id}>
                    <h2>{course.title}</h2>
                    <img
                        src={course.previewImageLink + '/cover.webp'}
                        className="style-img"
                        alt="alt image"
                    />
                    <p>{course.description}</p>
                    <Container id={course.id}>
                        <Row>
                            <Col xs={6} md={4}>
                                <p>{course.lessonsCount}</p>
                                <p>Lessons Count</p>
                            </Col>
                            <Col xs={6} md={4}>
                                <p>{course.rating}</p>
                                <p>Rating</p>
                            </Col>
                            <Col xs={12} md={4}>
                                {course.meta.skills ? (
                                    <>
                                        <p>Skills:</p>
                                        {course.meta.skills.map(item => (
                                            <p key={item}>{item}</p>
                                        ))}
                                    </>
                                ) : (
                                    <p>No skills available</p>
                                )}
                            </Col>
                        </Row>
                    </Container>
                    <Link to={`/course/${course.id}`} >
                        <Button variant="primary" id={course.id} onClick={handleButtonClick}>
                            Осмотреть курс подробней
                        </Button>
                    </Link>
                    {buttonID && <PreviewCourse id={buttonID} />}
                </div>
            ))}
        </Container>
    )
}

export default Courses;