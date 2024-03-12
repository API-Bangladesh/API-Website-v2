import React, { useState, useEffect, useRef } from "react";
import classEase from "classease";
import styles from "./VideoPlayer.module.css";

const VideoPlayer = () => {
  const videos = [
    "/videos/p1.mp4",
    "/videos/p2.mp4",
    "/videos/p3.mp4",
    "/videos/p4.mp4",
    "/videos/p5.mp4",
    "/videos/p6.mp4",
  ];

  const videoRefs = useRef([]);
  const currentVideoIndex = useRef(0);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);

    const handleVideoEnded = () => {
      const nextIndex = (currentVideoIndex.current + 1) % videos.length;

      // Pause, Reset the current video
      videoRefs.current[currentVideoIndex.current].pause();
      videoRefs.current[currentVideoIndex.current].currentTime = 0;

      // Set the active video index
      setActiveVideoIndex(nextIndex);

      videoRefs.current[nextIndex].play();

      currentVideoIndex.current = nextIndex;
    };

    videoRefs.current.forEach((video, index) => {
      video.addEventListener("ended", handleVideoEnded);
    });

    // Clean up event listeners
    return () => {
      videoRefs.current.forEach((video, index) => {
        video.removeEventListener("ended", handleVideoEnded);
      });
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {videos.map((src, index) => (
        <video
          key={index}
          ref={(ref) => (videoRefs.current[index] = ref)}
          className={classEase(
            "w-100",
            "sliderVideo",
            styles.video,
            index === activeVideoIndex ? styles.active : ""
          )}
          autoPlay={index === 0} // Autoplay the first video
          muted
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </div>
  );
};

export default VideoPlayer;
