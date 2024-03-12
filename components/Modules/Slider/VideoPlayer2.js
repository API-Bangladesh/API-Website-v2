import React, { useEffect, useRef } from "react";

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

  const handleVideoEnd = (index) => {
    const nextIndex = (index + 1) % videos.length;

    // Pause, Reset, Hide the current video
    const currentVideo = videoRefs.current[index];
    currentVideo.pause();
    currentVideo.currentTime = 0;
    currentVideo.style.display = "none";

    // Show and play the next video
    const nextVideo = videoRefs.current[nextIndex];
    nextVideo.style.display = "block";
    nextVideo.play();
  };

  useEffect(() => {
    // Hide all videos except the first one
    videos.forEach((src, index) => {
      if (index !== 0) {
        videoRefs.current[index].style.display = "none";
      }
    });
  }, []);

  return (
    <>
      {videos.map((src, index) => (
        <video
          key={index}
          ref={(ref) => (videoRefs.current[index] = ref)}
          autoPlay={index === 0} // Autoplay the first video
          muted
          playsInline
          className="w-100 sliderVideo"
          onEnded={() => handleVideoEnd(index)}
          // preload="auto"
          style={{ display: index === 0 ? "block" : "none" }}
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </>
  );
};

export default VideoPlayer;
