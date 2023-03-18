import React, {useEffect, useState} from "react";
import Hls from "hls.js";
import {Button, Col, Form, Row} from "react-bootstrap";

function PreviewVideo ({course}) {

    const [videoRef, setVideoRef] = useState(null);

    useEffect(() => {
        const initVideoPlayback = () => {
            if (videoRef) {
                if (Hls.isSupported()) {
                    const hls = new Hls();
                    hls.loadSource(course.meta.courseVideoPreview.link);
                    hls.attachMedia(videoRef);
                    hls.on(Hls.Events.MANIFEST_PARSED, () => {
                        videoRef.play();
                    });
                } else if (videoRef.canPlayType('application/vnd.apple.mpegurl')) {
                    videoRef.src = course.meta.courseVideoPreview.link;
                    videoRef.play();
                }
            }
        };

        if (videoRef && course) {
            initVideoPlayback();
        }

        return () => {
            document.removeEventListener("exitpictureinpicture", handleExitPiP);
        };
    }, [videoRef, course]);

    const handleEnterPiP = () => {
        if (videoRef && document.pictureInPictureEnabled) {
            videoRef.requestPictureInPicture();
        }
    };

    const handleExitPiP = () => {

    };


    return (
        <>
            <Form>
                <Row>
                    <Col md="auto" >
                        <video
                            ref={setVideoRef}
                            controls
                            width="640"
                            height="360">
                        </video>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="mt-50" onClick={handleEnterPiP}>Смотреть в режиме Picture-in-Picture</Button>
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default PreviewVideo;