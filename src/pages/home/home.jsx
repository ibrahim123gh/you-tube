import Sidebar from "../../components/sidebar/sidebar";
import Feed  from "../../components/feed/feed";
import "./home.css"
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Home({ sidebar }) {
  
  const [category,setCategory] = useState(0);

  return (
    <>
    <div className="home-all">
      <Sidebar sidebar={sidebar} category={category}  setCategory={setCategory} />

      <div className={`home ${sidebar === true ? "" : "side-home"}`}>
      <Feed category={category}/>
      </div>
    </div>
    </>
  );
}
