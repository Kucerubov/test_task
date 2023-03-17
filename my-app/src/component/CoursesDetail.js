
import React from 'react';
import { useParams } from 'react-router-dom';
import PreviewCourse from './PreviewCourse';

function CourseDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Course Details</h1>
            <PreviewCourse id={id}/>
        </div>
    );
}

export default CourseDetails;