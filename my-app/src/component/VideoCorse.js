import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import { Button, Col, Form, Row } from "react-bootstrap";

function VideoCourse({ videoLink, videoId, order, videoPreviewImageLink }) {
    const [videoRef, setVideoRef] = useState(null);

    useEffect(() => {
        if (videoRef) {
            videoRef.volume = 0.4;
        }
    }, [videoRef]);

    useEffect(() => {
        const initVideoPlayback = () => {
            if (videoRef) {
                if (Hls.isSupported()) {
                    const hls = new Hls();
                    hls.loadSource(videoLink);
                    hls.attachMedia(videoRef);
                } else if (videoRef.canPlayType("application/vnd.apple.mpegurl")) {
                    videoRef.src = videoLink;
                }
            }
        };

        if (videoRef && videoLink) {
            initVideoPlayback();
        }

        return () => {
            document.removeEventListener("exitpictureinpicture", handleExitPiP);
        };
    }, [videoRef, videoLink]);

    const handleEnterPiP = () => {
        if (videoRef && document.pictureInPictureEnabled) {
            videoRef.requestPictureInPicture();
        }
    };

    const handleExitPiP = () => {};

    return (
        <>
            <Form>
                <Row>
                    <Col md="auto">
                        <video
                            id={`video-${videoId}`}
                            ref={setVideoRef}
                            controls
                            width="640"
                            height="360"
                            poster={`${videoPreviewImageLink}/lesson-${order}.webp`}
                        ></video>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button className="mt-50" onClick={handleEnterPiP}>
                            Смотреть в режиме Picture-in-Picture
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}

export default VideoCourse;
