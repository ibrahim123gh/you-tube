import "./feed.css";
import dragon from "../../assets/dragon.jpg";
import { Link } from "react-router-dom";
import { API_KEY, Valide } from "../../data";
import { useEffect, useState } from "react";
import moment from "moment/moment";

// eslint-disable-next-line react/prop-types
const Feed = ({ category }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    await fetch(`
      https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
    )
      .then((data) => data.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  return (
    <div className="container">
      {data.map((items, index) => (
        <Link to={`video/${category}/${items.id}`} className="cart" key={index}>
        <img 
          src={items.snippet.thumbnails?.medium?.url || items.snippet.thumbnails?.default?.url || dragon} 
          alt={items.snippet.title} 
        />
        <h2>{items.snippet.title}</h2>
        <h3>{items.snippet.channelTitle}</h3>
        <p>
          {Valide(items.statistics?.viewCount)} views • {moment(items.snippet.publishedAt).fromNow()}
        </p>
      </Link>
      ))}
    </div>
  );
};

export default Feed;