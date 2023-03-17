import React, {useEffect, useState} from "react";
import Hls from "hls.js";

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
    }, [videoRef, course]);


    return (
        <video
            ref={setVideoRef}
            controls
            width="640"
            height="360">
        </video>
    )
}

export default PreviewVideo;