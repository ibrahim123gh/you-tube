import { useState } from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import Video from "./pages/video/video"

export default function App() {

  const[sidebar,setSidebar] = useState(true)
  return (
    <div className="App">
      <Navbar setSidebar={setSidebar}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}/>}/>
        <Route path="/video/:categoryId/:video" element={<Video />}/>
      </Routes>
    </div>
  );
}
