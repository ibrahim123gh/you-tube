/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import dragonball from "../../assets/dragonball.jpg";
import { API_KEY, Valide } from "../../data";
import "./playVideo.css";
import moment from "moment";

const PlayVideo = (props) => {
  const [apiData, setApiData] = useState(null);
  const [apiData2, setApiData2] = useState(null);
  const [apiDataCom, setApiDataCom] = useState([]);

  const fetchData = async () => {
    await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${props.videoId}&key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchData2 = async () => {
    if (!apiData) return;

    await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => setApiData2(data.items[0]));

    await fetch(
      `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${props.videoId}&key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => setApiDataCom(data.items))
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData2();
  }, [apiData]);

  console.log(apiDataCom)
  return (
    <div className="play-video">
      <iframe
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : ""}</h3>
      <div className="play-video-info">
        <p>
          {Valide(apiData ? apiData.statistics.viewCount : "0")} views &bull;{" "}
          {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div>
          <span>
            <i className="fa-regular fa-thumbs-up"></i>
            {apiData ? Valide(apiData.statistics.likeCount) : 155}
          </span>
          <span>
            <i className="fa-regular fa-thumbs-down"></i>
          </span>
          <span>
            <i className="fa-solid fa-share"></i>share
          </span>
          <span>
            <i className="fa-solid fa-floppy-disk"></i>save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={apiData ? apiData.snippet.thumbnails?.medium?.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {apiData2 ? Valide(apiData2.statistics.subscriberCount) : "1m"}{" "}
            Subsucribers
          </span>
        </div>
        <button>Subscriber</button>
      </div>
      <div className="vid-description">
        <p>{apiData ? apiData.snippet.description : ""}</p>
        <hr />
        <h4>
          {Valide(apiData ? apiData.statistics.commentCount : "0")} Comments
        </h4>
        {apiDataCom.map((item,index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="comment" key={index}>
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl?item.snippet.topLevelComment.snippet.authorProfileImageUrl:{dragonball}} alt="" />
              <div>
                <h3>
                {item.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p>
                  {item.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="comment-action">
                  <i className="fa-regular fa-thumbs-up"></i>
                  <span>{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <i className="fa-regular fa-thumbs-down"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
