import React, { useEffect, useState } from "react";
import Hls from "hls.js";
import { Button, Col, Form, Row } from "react-bootstrap";

function VideoCourse({ videoLink, videoId, order, videoPreviewImageLink, title }) {
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

        const handleKeyDown = (event) => {
            if (videoRef) {
                if (event.key === "ArrowLeft") {
                    videoRef.currentTime -= 10;
                } else if (event.key === "ArrowRight") {
                    videoRef.currentTime += 10;
                } else if (event.key === "+") {
                    const newPlaybackRate = videoRef.playbackRate + 0.25;
                    if (newPlaybackRate <= 4.0) {
                        videoRef.playbackRate = newPlaybackRate;
                    }
                } else if (event.key === "-") {
                    const newPlaybackRate = videoRef.playbackRate - 0.25;
                    if (newPlaybackRate >= 0.5) {
                        videoRef.playbackRate = newPlaybackRate;
                    }
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [videoRef, videoLink]);

    const handleEnterPiP = () => {
        if (videoRef && document.pictureInPictureEnabled) {
            videoRef.requestPictureInPicture();
        }
    };

    return (
        <>
            <Form id={`video-form-${videoId}`}>
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
