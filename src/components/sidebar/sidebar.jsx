/* eslint-disable react/prop-types */
import "./sidebar.css";
import dragon from "../../assets/dragon.jpg";
import dragonball from "../../assets/dragonball.jpg";
import johan from "../../assets/johan.jpg";

export default function Sidebar({ sidebar,category,setCategory }) {
  return (
    <>
      <div className={`SideAll ${sidebar === false ? "but-sidebar" : ""}`}>
        <div className="sidebar ">
          <div className={`side-left ${category === 0?"active":""}`} onClick={()=>setCategory(0)}>
            <i className="fa-solid fa-house"></i>
            <p>Home</p>
          </div>
          <div className={`side-left ${category === 20?"active":""}`} onClick={()=>setCategory(20)}>
            <i className="fa-solid fa-gamepad"></i>
            <p>Gaming</p>
          </div>
          <div className={`side-left ${category === 2?"active":""}`} onClick={()=>setCategory(2)}>
            <i className="fa-solid fa-car"></i>
            <p>Automobiles</p>
          </div>
          <div className={`side-left ${category === 17?"active":""}`} onClick={()=>setCategory(17)}>
            <i className="fa-solid fa-volleyball"></i>
            <p>Sports</p>
          </div>
          <div className={`side-left ${category === 24?"active":""}`} onClick={()=>setCategory(24)}>
            <i className="fa-solid fa-globe"></i>
            <p>Entertainment</p>
          </div>
          <div className={`side-left ${category === 28?"active":""}`} onClick={()=>setCategory(28)}>
            <i className="fa-solid fa-microchip"></i>
            <p>Technologiy</p>
          </div>
          <div className={`side-left ${category === 10?"active":""}`} onClick={()=>setCategory(10)}>
            <i className="fa-solid fa-music"></i>
            <p>Music</p>
          </div>
          <div className={`side-left ${category === 22?"active":""}`} onClick={()=>setCategory(22)}>
            <i className="fa-solid fa-blog"></i>
            <p>Blogs</p>
          </div>
          <div className={`side-left ${category === 25?"active":""}`} onClick={()=>setCategory(25)}>
            <i className="fa-solid fa-newspaper"></i>
            <p>New</p>
          </div>
        </div>

        <hr />
        <div className="subs-left">
          <p>Subscribed</p>
          <div className="subsucrib">
            <img src={dragon} alt="" />
            <p>DrgonBall</p>
          </div>
          <div className="subsucrib">
            <img src={dragonball} alt="" />
            <p>johan</p>
          </div>
          <div className="subsucrib">
            <img src={dragon} alt="" />
            <p>Houchi</p>
          </div>
          <div className="subsucrib">
            <img src={johan} alt="" />
            <p>Vegeta</p>
          </div>
          <div className="subsucrib">
            <img src={dragonball} alt="" />
            <p>johan</p>
          </div>
          <div className="subsucrib">
            <img src={dragon} alt="" />
            <p>Houchi</p>
          </div>
          <div className="subsucrib">
            <img src={johan} alt="" />
            <p>Vegeta</p>
          </div>
        </div>
      </div>
    </>
  );
}
