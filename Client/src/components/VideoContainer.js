import video from "../assets/videoRo.mp4";

const VideoContainer = () => {
  return (
    <div className="videoContainer">
      <video src={video} autoPlay muted loop></video>
    </div>
  );
};

export default VideoContainer;
