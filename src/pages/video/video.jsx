import PlayVideo from "../../components/playVideo/PlayVideo";
import "./video.css";
import Recomented from "../../components/Recomented/Recomented";
import { useParams } from "react-router-dom";

const Video = () => {
  const { video } = useParams();

  return (
    <div className="video">
      <PlayVideo videoId={video} />
      <Recomented />
    </div>
  );
};

export default Video;
